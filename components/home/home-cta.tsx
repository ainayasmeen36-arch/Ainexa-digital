import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, IMAGES } from "@/lib/data";

export function HomeCta() {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 text-white md:grid md:grid-cols-2 md:items-center md:gap-10 md:px-14">
          <Image
            src={IMAGES.cta}
            alt="Product designer working on a laptop in a modern studio"
            fill
            className="object-cover opacity-20"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">Next step</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">If the last build felt messy, this consultation will not.</h2>
            <p className="mt-4 text-slate-200">
              Bring the brief you have. In one call we will tell you what to ship first, what to wait on, and whether
              AINEXA is the right partner — even if the honest answer is no.
            </p>
          </div>
          <div className="relative mt-8 flex flex-col items-start gap-3 md:mt-0 md:items-end">
            <Button asChild variant="electric" size="lg">
              <Link href="/contact/">Get a free consultation</Link>
            </Button>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
