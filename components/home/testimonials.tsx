import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Proof"
          title="What operators say after we ship"
          description="Not vanity quotes. These are the outcomes finance, health, and logistics teams hired us to protect."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-navy/10 bg-card p-7 shadow-sm"
            >
              <Quote className="h-8 w-8 text-electric" strokeWidth={1.75} />
              <p className="mt-4 flex-1 text-base leading-relaxed text-navy dark:text-slate-100">“{item.quote}”</p>
              <footer className="mt-6 border-t border-navy/10 pt-4">
                <p className="font-semibold text-navy dark:text-white">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
