import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected AINEXA Digital Solutions projects across custom software, web, AI, mobile, cloud, and product design.",
};

export default function PortfolioPage() {
  return (
    <div className="pb-20">
      <section className="bg-navy py-16 text-white">
        <div className="container max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold">Work that ships — and stays in production.</h1>
          <p className="mt-4 text-slate-300">
            A snapshot of platforms, apps, and growth systems we have delivered for finance, health, retail, logistics,
            and SaaS teams.
          </p>
        </div>
      </section>
      <div className="container mt-12">
        <PortfolioGrid />
      </div>
    </div>
  );
}
