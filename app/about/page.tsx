import Image from "next/image";
import { COMPANY, IMAGES } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Aina Yasmeen",
  description:
    "Meet Aina Yasmeen, Founder & CEO of AINEXA Digital Solutions — a studio built on accurate, efficient, and scalable digital work.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section className="bg-navy py-16 text-white">
        <div className="container max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">About</p>
          <h1 className="mt-3 text-4xl font-semibold">Built by an operator who still reads the specs.</h1>
          <p className="mt-4 text-slate-300">
            AINEXA Digital Solutions exists because {COMPANY.owner} was tired of digital projects that looked finished
            and still failed in production. The studio is her answer: honest estimates, senior craft, and software that
            holds up.
          </p>
        </div>
      </section>

      <section className="container mt-16 grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={IMAGES.about}
            alt="Aina Yasmeen, Founder and CEO of AINEXA Digital Solutions"
            width={1200}
            height={1400}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">{COMPANY.ownerTitle}</p>
          <h2 className="mt-2 text-3xl font-semibold text-navy dark:text-white">{COMPANY.owner}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Aina began her career shipping client software where a missed requirement meant a missed payroll cycle or a
            stalled launch. That pressure shaped how she leads today: write it down, prove it in a demo, and do not
            call it done until the customer can operate it.
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            She founded AINEXA to give growing companies access to the same standard usually reserved for in-house
            product orgs — product thinking, engineering discipline, and a founder who will still join a discovery
            call. Under her direction the studio expanded from web delivery into AI automation, mobile, and cloud so
            clients are not stitching together four vendors.
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            When Aina is not in a workshop, she is reviewing architecture decisions and acceptance tests. Quality at
            AINEXA is not a department. It is the Founder & CEO&apos;s operating system.
          </p>
        </div>
      </section>

      <section className="container mt-20 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-navy p-8 text-white">
          <h3 className="text-2xl font-semibold text-electric">Mission</h3>
          <p className="mt-4 text-slate-200">{COMPANY.mission}</p>
        </div>
        <div className="rounded-2xl border p-8">
          <h3 className="text-2xl font-semibold text-navy dark:text-white">Vision</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{COMPANY.vision}</p>
        </div>
      </section>

      <section className="container mt-16 overflow-hidden rounded-2xl">
        <Image
          src={IMAGES.team}
          alt="AINEXA engineers and designers collaborating around a product board"
          width={1600}
          height={900}
          className="w-full object-cover"
        />
      </section>
    </div>
  );
}
