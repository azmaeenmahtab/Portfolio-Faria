"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/site";
import { FadeIn } from "@/components/ui/motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

interface CaseStudyContentProps {
  project: Project;
  nextProject: Project;
}

export function CaseStudyContent({ project, nextProject }: CaseStudyContentProps) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="section-container">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to projects
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-accent-tint)] text-[var(--color-accent-dark)] border border-[var(--color-accent)]/10">
                {project.category}
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)]">
                {project.projectType}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mb-10">
              {project.summary}
            </p>
          </FadeIn>

          {/* Cover Image */}
          <FadeIn delay={0.2}>
            <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-lg)] mb-16">
              <ImagePlaceholder
                aspectRatio="16/9"
                rounded="rounded-none"
                iconSize={56}
              />
            </div>
          </FadeIn>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-10">
              <FadeIn>
                <div>
                  <h2
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Overview
                  </h2>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div>
                  <h2
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Goal
                  </h2>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {project.goal}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <h2
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Strategy
                  </h2>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {project.strategy}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div>
                  <h2
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Execution
                  </h2>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {project.execution}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeIn direction="right">
                <div className="card-gradient rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-6">
                  <h3
                    className="font-bold text-sm mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Client / Brand
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    {project.client}
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <div className="card-gradient rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-6">
                  <h3
                    className="font-bold text-sm mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Tools Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-accent-tint)] text-[var(--color-accent-dark)] border border-[var(--color-accent)]/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Results */}
          <FadeIn>
            <h2
              className="text-2xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Results & Impact
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {project.results.map((result, i) => (
              <FadeIn key={result.label} delay={0.1 * i}>
                <div className="card-gradient rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-6 text-center hover:shadow-[var(--shadow-card)] transition-shadow duration-300">
                  <p className="text-3xl md:text-4xl font-bold text-[var(--color-accent-dark)] mb-2">
                    {result.value}
                  </p>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {result.label}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {result.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Gallery */}
          <FadeIn>
            <h2
              className="text-2xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Project Gallery
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {project.galleryImages.map((_, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-sm)]">
                  <ImagePlaceholder
                    aspectRatio="4/3"
                    rounded="rounded-none"
                    iconSize={28}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Next Project */}
          <FadeIn>
            <div className="border-t border-[var(--color-border)] pt-10">
              <p className="eyebrow mb-2">Next Project</p>
              <Link
                href={`/work/${nextProject.slug}`}
                className="group inline-flex items-center gap-3 text-2xl font-bold hover:text-[var(--color-accent-dark)] transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {nextProject.title}
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
