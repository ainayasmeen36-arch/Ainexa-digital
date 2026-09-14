import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a free consultation with ${COMPANY.name}. Email ${COMPANY.email} or message us on WhatsApp.`,
};

export default function ContactPage() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019511546089!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000";
  const wa = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello AINEXA — I would like a free consultation.")}`;

  return (
    <div className="pb-20">
      <section className="bg-navy py-16 text-white">
        <div className="container max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold">Tell us what you want to ship.</h1>
          <p className="mt-4 text-slate-300">
            Share a short brief. We will come back with questions, a recommended path, and — if it is a fit — a
            calendar invite with Aina&apos;s team.
          </p>
        </div>
      </section>

      <div className="container mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <aside className="space-y-6">
          <div className="rounded-2xl border p-6">
            <h2 className="font-heading text-lg font-semibold">Studio details</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-electric" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-electric">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-electric" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-electric">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-electric" />
                {COMPANY.address}
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">{COMPANY.hours}</p>
            <Button asChild variant="electric" className="mt-6">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border">
            <iframe
              title="AINEXA Digital Solutions service region map"
              src={mapSrc}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
