"""Upload Next.js `out/` into the Hostinger domain web root over SFTP."""

from __future__ import annotations

import os
import re
import subprocess
import sys
import tempfile

SITE_DOMAIN = "ainexia.com"


def lftp_quote(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"') + '"'


def clean_host(raw: str) -> str:
    host = raw.strip().replace("\r", "")
    for prefix in ("ftp://", "ftps://", "sftp://", "https://", "http://"):
        if host.lower().startswith(prefix):
            host = host[len(prefix) :]
    return host.split("/")[0].split(":")[0]


def clean_user(raw: str) -> str:
    return raw.strip().replace("\r", "")


def clean_password(raw: str) -> str:
    return raw.replace("\r", "").strip("\n").strip("\t")


def remote_candidates(raw: str) -> list[str]:
    remote = raw.strip().replace("\r", "").strip("/")
    skip = {"", ".", "out", "./out", "public_html"}
    candidates = [
        f"domains/{SITE_DOMAIN}/public_html",
        f"domains/www.{SITE_DOMAIN}/public_html",
    ]
    if remote and remote not in skip and remote not in candidates:
        candidates.insert(0, remote)
    candidates.extend(["public_html", "."])
    return candidates


def run_lftp(script: str) -> subprocess.CompletedProcess[str]:
    path = None
    try:
        with tempfile.NamedTemporaryFile("w", encoding="utf-8", delete=False) as handle:
            handle.write(script)
            path = handle.name
        return subprocess.run(["lftp", "-f", path], text=True, capture_output=True)
    finally:
        if path:
            try:
                os.remove(path)
            except OSError:
                pass


def redact(text: str, password: str) -> str:
    return text.replace(password, "***")


def connect_prefix(user: str, host: str, password: str, proto: str, port: int) -> list[str]:
    return [
        "set ssl:verify-certificate no",
        "set ftp:ssl-allow false",
        "set ftp:ssl-force false",
        "set ftp:passive-mode true",
        "set net:max-retries 1",
        "set net:timeout 30",
        "set sftp:auto-confirm yes",
        f"open -p {port} {proto}://{host}",
        f"user {lftp_quote(user)} {lftp_quote(password)}",
    ]


def probe(user: str, host: str, password: str, proto: str, port: int) -> None:
    script = "\n".join(
        [
            *connect_prefix(user, host, password, proto, port),
            "set cmd:fail-exit no",
            "cls -1 domains",
            "cls -1 domains/ainexia.com",
            "bye",
        ]
    )
    result = run_lftp(script)
    print("Remote listing:")
    print(redact(f"{result.stdout}\n{result.stderr}", password)[-2500:])


def try_upload(
    user: str,
    host: str,
    password: str,
    proto: str,
    port: int,
    remotes: list[str],
) -> bool:
    print(f"Trying {proto}://{host}:{port} (username length {len(user)})")
    probe(user, host, password, proto, port)

    for remote in remotes:
        lines = [
            *connect_prefix(user, host, password, proto, port),
            "set cmd:fail-exit yes",
            "lcd ./out",
            f"cd {lftp_quote(remote)}",
            "mirror -R --no-perms --parallel=4 --overwrite . .",
            "set cmd:fail-exit no",
            "cls -1",
            "bye",
        ]
        result = run_lftp("\n".join(lines))
        combined = redact(f"{result.stdout}\n{result.stderr}".strip(), password)
        if result.returncode == 0:
            print(f"Deploy succeeded via {proto} port {port} into {remote}")
            if combined:
                print(combined[-800:])
            return True
        if combined:
            print(combined[-1200:])
        if re.search(r"530 |Login incorrect|Login failed|authentication failed", combined, re.I):
            return False
        if re.search(r"Connection refused", combined, re.I):
            return False
    return False


def main() -> int:
    if not os.path.isdir("out") or not os.path.isfile("out/index.html"):
        print("Local out/index.html is missing.")
        return 1

    host = clean_host(os.environ.get("FTP_SERVER", ""))
    user = clean_user(os.environ.get("FTP_USERNAME", ""))
    password = clean_password(os.environ.get("FTP_PASSWORD", ""))
    remotes = remote_candidates(os.environ.get("FTP_REMOTE_DIR", ""))

    if not all([host, user, password]):
        print("FTP_SERVER, FTP_USERNAME, or FTP_PASSWORD is empty")
        return 1

    print(f"user_len={len(user)} remote_candidates={remotes}")

    for proto, port in (("sftp", 65002), ("ftp", 21)):
        if try_upload(user, host, password, proto, port, remotes):
            return 0

    print("Could not cd into the Hostinger web root. Check domains/ainexia.com/public_html in File Manager.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
