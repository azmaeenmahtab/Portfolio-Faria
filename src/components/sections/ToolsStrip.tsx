"use client";

import { tools } from "@/data/site";
import { FadeIn } from "@/components/ui/motion";

export function ToolsStrip() {
  // Double the tools array for seamless infinite scroll
  const doubled = [...tools, ...tools];

  return (
    <section id="tools" className="py-12 md:py-16 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <FadeIn>
        <p className="text-center text-sm font-medium text-[var(--color-muted)] mb-8 tracking-wide uppercase">
          Tools I work with
        </p>
      </FadeIn>

      <div className="overflow-hidden relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10 sm:gap-14 whitespace-nowrap">
          {doubled.map((tool, i) => (
            <span
              key={`${tool.name}-${i}`}
              className="text-base sm:text-lg font-semibold text-[var(--color-muted)] opacity-50 hover:opacity-80 transition-opacity duration-300 select-none"
            >
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
