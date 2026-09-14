"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO, PORTFOLIO_FILTERS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]>("All");

  const items = useMemo(
    () => (filter === "All" ? PORTFOLIO : PORTFOLIO.filter((item) => item.category === filter)),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {PORTFOLIO_FILTERS.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setFilter(name)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition",
              filter === name
                ? "border-electric bg-navy text-electric"
                : "border-border hover:border-electric/50"
            )}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="overflow-hidden rounded-2xl border bg-card shadow-sm"
            >
              <div className="relative h-52">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="electric">{project.category}</Badge>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold">{project.title}</h2>
                <p className="mt-1 text-xs font-medium text-slate-500">{project.client}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
