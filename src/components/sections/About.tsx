"use client";

import { Download, BarChart3, Lightbulb, Target } from "lucide-react";
import { about, siteConfig } from "@/data/site";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={24} />,
  Lightbulb: <Lightbulb size={24} />,
  Target: <Target size={24} />,
};

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        {/* Two-column: image + text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div
                className="rounded-[24px] overflow-hidden"
                style={{
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <ImagePlaceholder
                  aspectRatio="4/3"
                  rounded="rounded-none"
                  iconSize={40}
                />
              </div>
              {/* Subtle decorative element */}
              <div
                className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[24px] bg-[var(--color-accent-tint)]"
                aria-hidden="true"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn>
              <p className="eyebrow">About Me</p>
              <h2 className="section-heading mb-6">{about.heading}</h2>
            </FadeIn>

            {about.bio.map((paragraph, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                  {paragraph}
                </p>
              </FadeIn>
            ))}

            {/* Quick Facts */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
                {about.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="px-4 py-3 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]"
                  >
                    <p className="text-xs text-[var(--color-muted)] font-medium uppercase tracking-wider mb-0.5">
                      {fact.label}
                    </p>
                    <p className="font-semibold text-sm text-[var(--color-foreground)]">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <a
                href={siteConfig.resumeUrl}
                className="btn-primary cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </FadeIn>
          </div>
        </div>

        {/* Value Cards */}
        <StaggerContainer className="grid sm:grid-cols-3 gap-6 mt-16 md:mt-20">
          {about.values.map((value) => (
            <motion.div
              key={value.title}
              variants={staggerItemVariants}
              className="card-gradient rounded-[var(--radius-card)] p-6 border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-tint)] flex items-center justify-center text-[var(--color-accent-dark)] mb-4">
                {iconMap[value.icon]}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {value.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
