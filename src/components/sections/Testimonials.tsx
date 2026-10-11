"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";
import { FadeIn } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="section-container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Kind Words</p>
            <h2 className="section-heading">What people say</h2>
          </div>
        </FadeIn>

        {/* Desktop: 3-card grid */}
        <FadeIn delay={0.1}>
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </FadeIn>

        {/* Mobile: single carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard testimonial={testimonials[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots and arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-accent-tint)] transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 cursor-pointer ${
                    i === activeIndex
                      ? "bg-[var(--color-accent)]"
                      : "bg-[var(--color-border)]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-accent-tint)] transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="card-gradient rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] p-7 flex flex-col">
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-tint)] flex items-center justify-center text-[var(--color-accent)] mb-5">
        <Quote size={18} />
      </div>

      <p className="text-[var(--color-foreground)] leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Stars */}
      <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < testimonial.rating
                ? "fill-[var(--color-accent)] text-[var(--color-accent)]"
                : "text-[var(--color-border)]"
            }
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="w-11 h-11 rounded-full image-placeholder flex-shrink-0">
          <span className="text-xs">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-[var(--color-muted)]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
