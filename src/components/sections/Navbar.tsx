"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="section-container flex items-center justify-between h-[72px]"
        aria-label="Main navigation"
      >
        {/* Logo / Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight cursor-pointer group"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {siteConfig.logoImage ? (
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-accent-tint)]/60 border border-[var(--color-border)] p-1 transition-transform group-hover:scale-105 overflow-hidden">
              <Image
                src={siteConfig.logoImage}
                alt={`${siteConfig.name} logo`}
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <span
              className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
            />
          )}
          <span>{siteConfig.name}</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href
                    ? "text-[var(--color-accent-dark)] bg-[var(--color-accent-tint)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="hidden lg:inline-flex btn-primary !py-2.5 !px-6 text-sm cursor-pointer"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 lg:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-2 pt-12 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`w-full text-center py-3.5 px-6 rounded-2xl text-lg font-medium transition-colors duration-200 cursor-pointer ${
                activeSection === link.href
                  ? "text-[var(--color-accent-dark)] bg-[var(--color-accent-tint)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="btn-primary mt-4 w-full justify-center cursor-pointer"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
