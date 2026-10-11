"use client";

import { processSteps } from "@/data/site";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/motion";
import { motion } from "framer-motion";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="section-container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">How I Work</p>
            <h2 className="section-heading">
              A simple, transparent process
            </h2>
          </div>
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <StaggerContainer className="hidden md:grid md:grid-cols-5 gap-6 relative">
          {/* Connecting line */}
          <div
            className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-[var(--color-border)]"
            aria-hidden="true"
          />

          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItemVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-[var(--color-accent)] flex items-center justify-center mb-5 shadow-[var(--shadow-sm)]">
                <span
                  className="text-xl font-bold text-[var(--color-accent-dark)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {String(step.number).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Mobile: vertical timeline */}
        <StaggerContainer className="md:hidden space-y-0 relative ml-6">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-[var(--color-border)]"
            aria-hidden="true"
          />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={staggerItemVariants}
              className={`relative flex gap-5 ${i < processSteps.length - 1 ? "pb-10" : ""}`}
            >
              {/* Number circle */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-[var(--color-accent)] flex items-center justify-center shadow-[var(--shadow-sm)]">
                <span
                  className="text-sm font-bold text-[var(--color-accent-dark)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.number}
                </span>
              </div>
              <div className="pt-1">
                <h3
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
