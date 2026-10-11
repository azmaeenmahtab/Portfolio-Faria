"use client";

import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/site";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { motion } from "framer-motion";

export function Blog() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <p className="eyebrow">Insights</p>
              <h2 className="section-heading">Latest articles</h2>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-dark)] hover:gap-2.5 transition-all duration-300 cursor-pointer"
            >
              View all articles
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={staggerItemVariants}
              className="group card-gradient rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Cover */}
              <div className="overflow-hidden">
                <ImagePlaceholder
                  aspectRatio="16/10"
                  rounded="rounded-none"
                  iconSize={28}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-accent-tint)] text-[var(--color-accent-dark)]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                    <Clock size={12} aria-hidden="true" />
                    {post.readTime}
                  </div>
                </div>

                <h3
                  className="text-lg font-bold mb-2 group-hover:text-[var(--color-accent-dark)] transition-colors duration-200 line-clamp-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--color-muted)] mb-3 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <p className="text-xs text-[var(--color-muted)]">{post.date}</p>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
