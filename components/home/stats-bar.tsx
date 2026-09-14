import { AnimatedCounter } from "@/components/animated-counter";
import { STATS } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="border-y bg-navy">
      <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm font-medium text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
