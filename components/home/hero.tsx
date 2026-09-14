"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, FileBadge, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, IMAGES } from "@/lib/data";

const PROMISES = [
  { icon: Clock3, text: "Reply within one business day" },
  { icon: FileBadge, text: "Written scope before any invoice" },
  { icon: CheckCircle2, text: "No surprise fees after kickoff" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 premium-grid opacity-50" />
      <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-electric/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-teal/25 blur-3xl" />
      <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-electric">
            Founder-led · Accurate delivery · UK & global
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
            The studio clients call when the last vendor{" "}
            <span className="gradient-text">missed the brief.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
            AINEXA designs and ships software, websites, AI automation, and cloud platforms with one standard:
            honest estimates, visible progress, and systems that still work at 10x scale.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="electric" size="lg">
              <Link href="/contact/">
                Book a free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
              <Link href="/portfolio/">Review case studies</Link>
            </Button>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-1">
            {PROMISES.map((item) => (
              <li key={item.text} className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <item.icon className="h-4 w-4 shrink-0 text-electric" />
                {item.text}
              </li>
            ))}
          </ul>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-electric hover:underline"
          >
            <Phone className="h-4 w-4" />
            Speak with the studio · {COMPANY.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative pb-8"
        >
          <div className="overflow-hidden rounded-3xl border border-electric/40 shadow-[0_30px_80px_rgba(198,164,107,0.22)]">
            <Image
              src={IMAGES.hero}
              alt="AINEXA product and engineering team collaborating on a digital product"
              width={1600}
              height={1066}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="absolute left-5 top-5 rounded-2xl border border-electric/30 bg-navy/85 px-4 py-3 backdrop-blur-md">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-electric">Typical first week</p>
            <p className="mt-1 text-sm font-semibold text-white">Discovery signed. Risks on paper. Build starts.</p>
          </div>
          <div className="absolute -bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:left-6">
            {["Custom software", "AI bots", "Next.js", "Cloud"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-electric/30 bg-navy/90 px-3 py-1.5 text-xs font-semibold text-electric backdrop-blur-md"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
