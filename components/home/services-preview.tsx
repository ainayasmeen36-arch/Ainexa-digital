import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SERVICE_ICONS, ServiceIcon } from "@/components/service-icon";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="One studio. Every digital layer that actually moves revenue."
          description="Pick a practice to start — or bring a messy brief. We will tell you which service belongs first."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <Link
                key={service.slug}
                href={`/services/#${service.slug}`}
                className="group relative block min-h-[320px] overflow-hidden rounded-2xl border border-navy/15 shadow-sm"
              >
                <Image
                  src={`${service.image.split("?")[0]}?auto=format&fit=crop&w=1200&q=80`}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover brightness-[0.88] transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EC] from-0% via-[#F7F3EC]/85 via-45% to-transparent to-72%" />
                <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-6">
                  <ServiceIcon icon={Icon} />
                  <h3 className="mt-4 font-sans text-3xl font-extrabold leading-[1.15] tracking-tight text-navy sm:text-[2.05rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base font-bold leading-relaxed text-navy">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[#6E5426]">
                    Explore this service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/services/">Explore all services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
