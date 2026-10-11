"use client";

import { impactStats } from "@/data/site";
import { FadeIn, useCountUp } from "@/components/ui/motion";

export function Impact() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Sage gradient background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-tint) 0%, #e2ede7 50%, var(--color-accent-tint) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {impactStats.map((stat) => (
              <CounterCard key={stat.label} stat={stat} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CounterCard({
  stat,
}: {
  stat: (typeof impactStats)[number];
}) {
  const { count, ref } = useCountUp(stat.value, 2000);

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-accent-dark)] mb-2">
        <span ref={ref}>{count}</span>
        <span>{stat.suffix}</span>
      </p>
      <p className="text-sm md:text-base text-[var(--color-muted)] font-medium">
        {stat.label}
      </p>
    </div>
  );
}
