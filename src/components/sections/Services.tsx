"use client";

import {
  Share2,
  Search,
  MousePointerClick,
  PenTool,
  Mail,
  BarChart2,
  ArrowRight,
} from "lucide-react";
import { services, skills } from "@/data/site";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/motion";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Share2: <Share2 size={24} />,
  Search: <Search size={24} />,
  MousePointerClick: <MousePointerClick size={24} />,
  PenTool: <PenTool size={24} />,
  Mail: <Mail size={24} />,
  BarChart2: <BarChart2 size={24} />,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="section-container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">What I Do</p>
            <h2 className="section-heading">Services that move the needle</h2>
          </div>
        </FadeIn>

        {/* Service Cards Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItemVariants}
              className="group card-gradient rounded-[var(--radius-card)] p-7 border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-tint)] flex items-center justify-center text-[var(--color-accent-dark)] mb-5 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-dark)] group-hover:gap-2.5 transition-all duration-300">
                Learn more
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Skills Block */}
        <FadeIn delay={0.2}>
          <div className="mt-16 md:mt-20">
            <h3
              className="text-xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Skills & Expertise
            </h3>
            <div className="max-w-2xl mx-auto space-y-5">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[var(--color-foreground)]">
          {name}
        </span>
        <span className="text-xs font-medium text-[var(--color-muted)]">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-accent), var(--color-accent-dark))",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}
