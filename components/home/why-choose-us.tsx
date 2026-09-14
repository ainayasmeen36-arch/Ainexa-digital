import { ShieldCheck, Gauge, Layers, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { WHY_CHOOSE } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ICONS = [ShieldCheck, Gauge, Layers, UserRound];

export function WhyChooseUs() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Why AINEXA"
          title="Why companies choose us"
          description="We are not a volume shop. We are a delivery studio that treats accuracy, efficiency, and scalability as non-negotiable."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <Card key={item.title} className="border-navy/10">
                <CardHeader className="flex flex-row items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-electric/35 bg-gradient-to-br from-navy to-[#2A241C] text-electric">
                    <Icon className="h-7 w-7" strokeWidth={2.4} />
                  </span>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">{item.body}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
