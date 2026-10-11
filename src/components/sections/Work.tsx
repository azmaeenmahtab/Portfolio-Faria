"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects, projectCategories } from "@/data/site";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="section-container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Portfolio</p>
            <h2 className="section-heading">Selected projects</h2>
          </div>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-250 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[var(--color-accent)] text-white shadow-[0_4px_12px_rgba(107,143,123,0.3)]"
                    : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:bg-[var(--color-accent-tint)] hover:text-[var(--color-accent-dark)] border border-[var(--color-border)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block card-gradient rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="16/10"
          rounded="rounded-none"
          iconSize={36}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category tag */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-[var(--color-foreground)] border border-[var(--color-border)]">
            {project.category}
          </span>
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border ${
              project.projectType === "Client Project"
                ? "bg-[var(--color-accent-tint)]/90 text-[var(--color-accent-dark)] border-[var(--color-accent)]/20"
                : "bg-white/90 text-[var(--color-muted)] border-[var(--color-border)]"
            }`}
          >
            {project.projectType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2 group-hover:text-[var(--color-accent-dark)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">
          {project.summary}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-3 mb-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent-tint)] border border-[var(--color-accent)]/10"
            >
              <span className="text-sm font-bold text-[var(--color-accent-dark)]">
                {metric.value}
              </span>
              <span className="text-xs text-[var(--color-muted)]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-dark)] group-hover:gap-2.5 transition-all duration-300">
          View case study
          <ArrowRight size={14} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
