"""Upload Next.js `out/` to Hostinger. Tries SFTP then FTP with Hostinger-safe options."""

from __future__ import annotations

import os
import re
import subprocess
import sys
import tempfile


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


def clean_remote(raw: str) -> str:
    remote = raw.strip().replace("\r", "") or "public_html/"
    if remote in {".", "./"}:
        return "./"
    return remote if remote.endswith("/") else f"{remote}/"


def looks_like_short_extra_user(user: str) -> bool:
    """Hostinger extra accounts are u12345678.ainexadeploy — not just ainexadeploy."""
    if user.startswith("u") and re.match(r"^u\d+", user):
        return False
    if "@" in user:
        return False
    return "." not in user


def username_variants(user: str, host: str) -> list[str]:
    variants = [user]
    if "@" not in user:
        domain = host[4:] if host.startswith("ftp.") else host
        if domain and f"{user}@{domain}" not in variants:
            variants.append(f"{user}@{domain}")
    return variants


def host_variants(host: str) -> list[str]:
    variants = [host]
    if not re.match(r"^\d+\.\d+\.\d+\.\d+$", host) and not host.startswith("ftp."):
        variants.append(f"ftp.{host}")
    return variants


def try_mirror(user: str, host: str, password: str, remote: str, proto: str, port: int) -> bool:
    script = "\n".join(
        [
            "set ssl:verify-certificate no",
            "set ftp:ssl-allow true",
            "set ftp:ssl-force false",
            "set ftp:passive-mode true",
            "set net:max-retries 1",
            "set net:timeout 25",
            "set sftp:auto-confirm yes",
            "set cmd:fail-exit yes",
            f"open -p {port} {proto}://{host}",
            f"user {lftp_quote(user)} {lftp_quote(password)}",
            f"mirror -R --no-perms --parallel=4 ./out {remote}",
            "bye",
        ]
    )
    print(f"Trying {proto}://{host}:{port} (username length {len(user)})")
    path = None
    try:
        with tempfile.NamedTemporaryFile("w", encoding="utf-8", delete=False) as handle:
            handle.write(script)
            path = handle.name
        result = subprocess.run(["lftp", "-f", path], text=True, capture_output=True)
    finally:
        if path:
            try:
                os.remove(path)
            except OSError:
                pass
    if result.returncode == 0:
        print(f"Deploy succeeded via {proto} port {port}")
        return True
    combined = f"{result.stdout}\n{result.stderr}".strip()
    if combined:
        combined = combined.replace(password, "***")
        print(combined[-2000:])
    return False


def main() -> int:
    host = clean_host(os.environ.get("FTP_SERVER", ""))
    user = clean_user(os.environ.get("FTP_USERNAME", ""))
    password = clean_password(os.environ.get("FTP_PASSWORD", ""))
    remote = clean_remote(os.environ.get("FTP_REMOTE_DIR", ""))

    if not all([host, user, password]):
        print("FTP_SERVER, FTP_USERNAME, or FTP_PASSWORD is empty")
        return 1

    if looks_like_short_extra_user(user):
        print(
            "This username looks like a short extra FTP name (for example ainexadeploy). "
            "Hostinger login is the FULL name from hPanel, like u12345678.ainexadeploy "
            "or the main user u12345678. Copy that exact value into HOSTINGER_FTP_USERNAME."
        )

    attempts = [
        ("sftp", 65002),
        ("ftp", 21),
        ("ftps", 21),
    ]

    for hostname in host_variants(host):
        for candidate in username_variants(user, hostname):
            for proto, port in attempts:
                if try_mirror(candidate, hostname, password, remote, proto, port):
                    return 0

    print(
        "All Hostinger login methods failed. Use Plan Details / FTP Accounts FULL username "
        "(u12345678 or u12345678.ainexadeploy), FTP password not hPanel password, "
        "hostname from the same FTP card, and enable SFTP under Remote access (port 65002)."
    )
    return 1


if __name__ == "__main__":
    sys.exit(main())
