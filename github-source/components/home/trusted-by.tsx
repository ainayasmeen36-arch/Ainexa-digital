import { TRUSTED_BRANDS } from "@/lib/data";

export function TrustedBy() {
  const loop = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section className="py-16">
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Trusted by product and operations teams
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 px-6">
          {loop.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="whitespace-nowrap font-heading text-lg font-semibold text-navy/50 dark:text-white/40"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
