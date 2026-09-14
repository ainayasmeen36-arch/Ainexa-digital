"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email")?.toString().trim() ?? "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    const list = JSON.parse(window.localStorage.getItem("ainexa.newsletter") ?? "[]") as string[];
    window.localStorage.setItem("ainexa.newsletter", JSON.stringify([...new Set([...list, email])]));
    setStatus("ok");
    form.reset();
  }

  return (
    <footer className="border-t bg-navy text-slate-200">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-xl font-semibold text-white">{COMPANY.name}</p>
          <p className="mt-3 max-w-xs text-sm text-slate-300">{COMPANY.tagline}</p>
          <p className="mt-4 text-sm text-slate-400">
            Founded by {COMPANY.owner}, {COMPANY.ownerTitle}.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-electric">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-electric">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/admin/" className="hover:text-electric">
                Client dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-electric">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href="/services/" className="hover:text-electric">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-electric">Newsletter</p>
          <p className="mt-4 text-sm text-slate-300">
            Monthly notes on product delivery, AI automation, and shipping software that lasts.
          </p>
          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
            <Input
              name="email"
              type="email"
              required
              placeholder="Work email"
              className="bg-white/5 border-white/15 text-white placeholder:text-slate-400"
            />
            <Button type="submit" variant="electric">
              Subscribe
            </Button>
            {status === "ok" && <p className="text-xs text-electric">You are on the list. Welcome aboard.</p>}
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>
            {COMPANY.email} · {COMPANY.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
