"use client";

import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education } from "@/data/site";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Learning</p>
            <h2 className="section-heading">Education & Certifications</h2>
          </div>
        </FadeIn>

        <StaggerContainer className="max-w-3xl mx-auto space-y-6">
          {education.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItemVariants}
              className="card-gradient rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-6 hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
            >
              <div className="flex gap-5">
                {/* Thumbnail */}
                <div className="flex-shrink-0 hidden sm:block">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-tint)] flex items-center justify-center text-[var(--color-accent-dark)]">
                    {item.type === "course" ? (
                      <GraduationCap size={28} />
                    ) : (
                      <Award size={28} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        {item.institution} · {item.year}
                      </p>
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-[var(--color-accent-dark)] hover:text-[var(--color-accent)] transition-colors flex-shrink-0 cursor-pointer"
                      >
                        View
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  {item.issuer && (
                    <p className="text-xs text-[var(--color-muted)] mt-1">
                      Issued by {item.issuer}
                    </p>
                  )}

                  {item.topics && item.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-accent-tint)] text-[var(--color-accent-dark)] border border-[var(--color-accent)]/10"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
