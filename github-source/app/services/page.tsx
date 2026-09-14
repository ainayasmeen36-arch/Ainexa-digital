import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SERVICE_ICONS, ServiceIcon } from "@/components/service-icon";
import { SERVICES } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, MERN and Next.js web development, AI bots, SEO, UI/UX, mobile apps, and cloud solutions from AINEXA Digital Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="pb-20">
      <section className="bg-navy py-16 text-white">
        <div className="container max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">Services</p>
          <h1 className="mt-3 text-4xl font-semibold">Seven practices. One delivery standard.</h1>
          <p className="mt-4 text-slate-300">
            Every engagement is scoped for accuracy, staffed for efficiency, and architected so the product still
            holds up when usage, teams, and markets grow.
          </p>
        </div>
      </section>

      <div className="container mt-16 space-y-20">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            const reverse = index % 2 === 1;
          return (
            <article key={service.slug} id={service.slug} className="scroll-mt-24">
              <div className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={`${service.title} at AINEXA Digital Solutions`}
                    width={1400}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="mb-5 inline-flex">
                    <ServiceIcon icon={Icon} size="lg" />
                  </span>
                  <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-200">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="container mt-20">
        <SectionHeading
          title="How we engage"
          description="Fixed-scope sprints for well-defined work. Dedicated pods for product roadmaps. Either way, you get written acceptance criteria and weekly visible progress."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Discover", body: "We map users, systems, and constraints before a line of code is written." },
            { title: "Build", body: "Senior engineers and designers ship in short cycles with demos you can react to." },
            { title: "Operate", body: "Launch, measure, and iterate — with optional retainers for growth and cloud ops." },
          ].map((step) => (
            <Card key={step.title}>
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
