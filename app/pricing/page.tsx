import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Check } from "lucide-react";
import { PLANS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = pageMeta({
  title: "Pricing",
  description:
    "Starter, Growth, and Enterprise engagement plans from AINEXA Digital Solutions — transparent starting points, custom scoped after discovery.",
  path: "/pricing/",
});

export default function PricingPage() {
  return (
    <div className="pb-20">
      <section className="bg-navy py-16 text-white">
        <div className="container max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">Pricing</p>
          <h1 className="mt-3 text-4xl font-semibold">Clear starting points. Precise final scopes.</h1>
          <p className="mt-4 text-slate-300">
            These packages are typical engagement sizes — not one-size-fits-all SKUs. After a free consultation we
            confirm timeline, team, and a written statement of work.
          </p>
        </div>
      </section>

      <div className="container mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "flex flex-col rounded-2xl border bg-card p-8 shadow-sm",
              plan.featured && "border-electric ring-2 ring-electric/40 lg:-translate-y-2"
            )}
          >
            {plan.featured && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-electric">Most chosen</p>
            )}
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="mt-4 font-heading text-4xl font-semibold text-navy dark:text-white">{plan.price}</p>
            <p className="text-sm text-muted-foreground">{plan.cadence}</p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{plan.description}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild variant={plan.featured ? "electric" : "default"} className="mt-8">
              <Link href="/contact/">Get Free Consultation</Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
