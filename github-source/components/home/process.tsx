import { PROCESS } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Process() {
  return (
    <section className="border-y border-navy/10 bg-muted/50 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Engagement"
          title="Four steps. No grey area."
          description="Clients stay because the process is as disciplined as the product. You always know what happens next."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <article key={item.step} className="rounded-2xl border border-navy/10 bg-card p-6 shadow-sm">
              <p className="font-heading text-3xl font-bold text-electric">{item.step}</p>
              <h3 className="mt-3 text-xl font-bold text-navy dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
