"""Upload Next.js `out/` contents into Hostinger public_html over SFTP."""

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
    skip = {"", ".", "out", "./out"}
    candidates: list[str] = []
    if remote and remote not in skip and remote not in candidates:
        candidates.append(remote)
    for item in ("public_html", f"domains/{SITE_DOMAIN}/public_html", "."):
        if item not in candidates:
            candidates.append(item)
    return candidates


def run_lftp(script: str, password: str) -> subprocess.CompletedProcess[str]:
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
    ssl_allow = "true" if proto == "ftps" else "false"
    return [
        "set ssl:verify-certificate no",
        f"set ftp:ssl-allow {ssl_allow}",
        "set ftp:ssl-force false",
        "set ftp:passive-mode true",
        "set net:max-retries 1",
        "set net:timeout 25",
        "set sftp:auto-confirm yes",
        f"open -p {port} {proto}://{host}",
        f"user {lftp_quote(user)} {lftp_quote(password)}",
    ]


def try_upload(
    user: str,
    host: str,
    password: str,
    proto: str,
    port: int,
    remotes: list[str],
) -> bool:
    print(f"Trying {proto}://{host}:{port} (username length {len(user)})")
    for remote in remotes:
        lines = [
            *connect_prefix(user, host, password, proto, port),
            "set cmd:fail-exit yes",
            "lcd ./out",
        ]
        if remote != ".":
            lines.append(f"mkdir -p {lftp_quote(remote)}")
        lines.extend(
            [
                f"cd {lftp_quote(remote)}",
                "mirror -R --no-perms --parallel=4 . .",
                "bye",
            ]
        )
        result = run_lftp("\n".join(lines), password)
        if result.returncode == 0:
            print(f"Deploy succeeded via {proto} port {port} into {remote}")
            return True
        combined = redact(f"{result.stdout}\n{result.stderr}".strip(), password)
        if combined:
            print(combined[-1500:])
        # Login failed — do not try other remote folders on this protocol.
        if re.search(r"530 |Login incorrect|Login failed|authentication failed", combined, re.I):
            return False
        if re.search(r"Connection refused", combined, re.I):
            return False
    return False


def main() -> int:
    if not os.path.isdir("out"):
        print("Local out/ folder is missing. Build did not produce a static export.")
        return 1

    host = clean_host(os.environ.get("FTP_SERVER", ""))
    user = clean_user(os.environ.get("FTP_USERNAME", ""))
    password = clean_password(os.environ.get("FTP_PASSWORD", ""))
    remotes = remote_candidates(os.environ.get("FTP_REMOTE_DIR", ""))

    if not all([host, user, password]):
        print("FTP_SERVER, FTP_USERNAME, or FTP_PASSWORD is empty")
        return 1

    print(
        f"user_len={len(user)} password_len={len(password)} "
        f"remote_candidates={remotes}"
    )

    # Main Hostinger user (u12345678) authenticates on SFTP :65002.
    attempts = [("sftp", 65002), ("ftp", 21)]

    for proto, port in attempts:
        if try_upload(user, host, password, proto, port, remotes):
            return 0

    print(
        "Deploy failed. For the main Hostinger user, keep SFTP enabled, "
        "set HOSTINGER_FTP_REMOTE_DIR to public_html/ (not out/), "
        "and use the u12345678 username plus that account's FTP password."
    )
    return 1


if __name__ == "__main__":
    sys.exit(main())
