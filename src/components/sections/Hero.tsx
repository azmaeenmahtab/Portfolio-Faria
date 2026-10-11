"use client";

import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { hero, siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/motion";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Soft radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-tint) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-tint) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <FadeIn delay={0.1}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-tint)] border border-[var(--color-border)] mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]" />
                </span>
                <span className="text-sm font-medium text-[var(--color-accent-dark)]">
                  {hero.badge}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] mb-6">
                {hero.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-[var(--color-muted)] max-w-xl mb-8 leading-relaxed">
                {hero.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#work" className="btn-primary cursor-pointer">
                  View My Work
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  className="btn-secondary cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-3">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)]"
                  >
                    <span className="font-bold text-sm text-[var(--color-foreground)]">
                      {stat.value}
                    </span>
                    <span className="text-sm text-[var(--color-muted)]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Portrait + floating cards */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <FadeIn delay={0.3} direction="right">
              <div className="relative">
                {/* Portrait frame with gradient border */}
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
                  <div
                    className="rounded-[32px] p-[3px] shadow-[0_20px_50px_rgba(107,143,123,0.15)]"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent-tint), var(--color-accent), var(--color-accent-tint))",
                    }}
                  >
                    <div className="relative rounded-[29px] overflow-hidden bg-white aspect-[3/4]">
                      {hero.portraitImage ? (
                        <Image
                          src={hero.portraitImage}
                          alt={siteConfig.name}
                          fill
                          priority
                          sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 400px"
                          className="object-cover object-center"
                        />
                      ) : (
                        <ImagePlaceholder
                          aspectRatio="3/4"
                          rounded="rounded-none"
                          iconSize={48}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating card 1 */}
                <div className="absolute -left-6 sm:-left-10 top-16 sm:top-20 bg-white rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] border border-[var(--color-border)] animate-[float_3s_ease-in-out_infinite]">
                  <p className="text-xs text-[var(--color-muted)] font-medium">
                    {hero.floatingCards[0].label}
                  </p>
                  <p className="text-lg font-bold text-[var(--color-accent-dark)]">
                    {hero.floatingCards[0].value}
                  </p>
                </div>

                {/* Floating card 2 */}
                <div className="absolute -right-4 sm:-right-8 bottom-20 sm:bottom-24 bg-white rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] border border-[var(--color-border)] animate-[float_3s_ease-in-out_infinite_0.5s]">
                  <p className="text-xs text-[var(--color-muted)] font-medium">
                    {hero.floatingCards[1].label}
                  </p>
                  <p className="text-lg font-bold text-[var(--color-accent-dark)]">
                    {hero.floatingCards[1].value}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={0.7}>
          <div className="hidden md:flex justify-center mt-16">
            <button
              onClick={() =>
                document
                  .getElementById("tools")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex flex-col items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Scroll down"
            >
              <span className="text-xs font-medium tracking-wider uppercase">
                Scroll
              </span>
              <ArrowDown size={16} className="animate-bounce" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
