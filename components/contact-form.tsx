"use client";

import { FormEvent, useState } from "react";
import { SERVICES } from "@/lib/data";
import { addInquiry, seedAdminStorage } from "@/lib/admin-storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Errors = Record<string, string>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid work email.";
    if (message.length < 20) next.message = "Tell us a little more (at least 20 characters).";
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    seedAdminStorage();
    addInquiry({
      name: data.get("name")!.toString().trim(),
      email: data.get("email")!.toString().trim(),
      company: data.get("company")?.toString().trim() ?? "",
      service: data.get("service")?.toString() ?? "General inquiry",
      message: data.get("message")!.toString().trim(),
    });
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-electric/40 bg-electric/10 p-8">
        <h3 className="text-xl font-semibold">Request received.</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Thank you. A member of Aina&apos;s team will reply within one business day. You can also reach us on WhatsApp
          for a faster start.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" className="mt-2" placeholder="Amina Rahman" />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" className="mt-2" placeholder="you@company.com" />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" className="mt-2" placeholder="Your organization" />
        </div>
        <div>
          <Label htmlFor="service">Service of interest</Label>
          <select
            id="service"
            name="service"
            className="mt-2 flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
            defaultValue={SERVICES[0].title}
          >
            {SERVICES.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          className="mt-2"
          placeholder="Share goals, timeline, and any systems we should know about."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <Button type="submit" variant="electric" className="w-full sm:w-auto">
        Request free consultation
      </Button>
      <p className="text-xs text-muted-foreground">
        Submissions are stored locally in this browser for the demo admin dashboard — no backend required.
      </p>
    </form>
  );
}
