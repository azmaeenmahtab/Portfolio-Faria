"use client";

import Image from "next/image";
import { ArrowUp, Globe } from "lucide-react";
import { siteConfig, navLinks, socialLinks } from "@/data/site";
import {
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/social-icons";

const socialIconMap: Record<string, React.ReactNode> = {
  Linkedin: <LinkedinIcon size={18} />,
  Instagram: <InstagramIcon size={18} />,
  Facebook: <FacebookIcon size={18} />,
  Globe: <Globe size={18} />,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="section-container py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-2.5 font-bold text-lg tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {siteConfig.logoImage ? (
                <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-accent-tint)]/60 border border-[var(--color-border)] p-1 overflow-hidden">
                  <Image
                    src={siteConfig.logoImage}
                    alt={`${siteConfig.name} logo`}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              ) : (
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]"
                  aria-hidden="true"
                />
              )}
              <span>{siteConfig.name}</span>
            </div>
            <p className="text-sm text-[var(--color-muted)] max-w-sm leading-relaxed mb-5">
              {siteConfig.description}
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-accent-dark)] hover:border-[var(--color-accent)] transition-all duration-200 cursor-pointer"
                  aria-label={`Follow on ${social.platform}`}
                >
                  {socialIconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-muted)]" role="list">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[var(--color-foreground)] transition-colors cursor-pointer"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-[var(--color-foreground)] transition-colors cursor-pointer"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[var(--color-muted)] hover:text-[var(--color-accent-dark)] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
