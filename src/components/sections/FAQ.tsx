"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/site";
import { FadeIn } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="section-container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-heading">Frequently asked questions</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} faq={faq} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function AccordionItem({ faq }: { faq: (typeof faqs)[number] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-gradient rounded-[var(--radius-md)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className="font-semibold text-[var(--color-foreground)] text-base"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen
              ? "bg-[var(--color-accent)] text-white"
              : "bg-[var(--color-accent-tint)] text-[var(--color-accent-dark)]"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
