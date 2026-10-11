"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
import { FadeIn } from "@/components/ui/motion";
import {
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/social-icons";

const socialIconMap: Record<string, React.ReactNode> = {
  Linkedin: <LinkedinIcon size={20} />,
  Instagram: <InstagramIcon size={20} />,
  Facebook: <FacebookIcon size={20} />,
  Globe: <Globe size={20} />,
};

const serviceOptions = [
  "Social Media Marketing",
  "SEO",
  "Paid Advertising",
  "Content Marketing",
  "Email Marketing",
  "Analytics & Reporting",
  "Other",
];

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        {/* CTA Block */}
        <FadeIn>
          <div
            className="rounded-[var(--radius-lg)] p-10 md:p-16 text-center mb-16 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-tint) 0%, #dde8e1 50%, var(--color-accent-tint) 100%)",
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative z-10"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s grow your brand together.
            </h2>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary relative z-10 text-base cursor-pointer"
            >
              Book a Free Call
            </a>
          </div>
        </FadeIn>

        {/* Two-column: info + form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <FadeIn direction="left">
            <div>
              <p className="eyebrow">Get in Touch</p>
              <h2 className="section-heading mb-8">
                Let&apos;s start a conversation
              </h2>

              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-tint)] flex items-center justify-center text-[var(--color-accent-dark)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-medium">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-medium hover:text-[var(--color-accent-dark)] transition-colors cursor-pointer"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-tint)] flex items-center justify-center text-[var(--color-accent-dark)]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-medium">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-sm font-medium hover:text-[var(--color-accent-dark)] transition-colors cursor-pointer"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-tint)] flex items-center justify-center text-[var(--color-accent-dark)]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-medium">
                      Location
                    </p>
                    <p className="text-sm font-medium">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-medium mb-3">
                  Follow Me
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-accent-dark)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-tint)] transition-all duration-200 cursor-pointer"
                      aria-label={`Follow on ${social.platform}`}
                    >
                      {socialIconMap[social.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Contact Form */}
          <FadeIn direction="right">
            <form
              onSubmit={handleSubmit}
              className="card-gradient rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-[var(--shadow-card)] p-7 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-tint)] outline-none transition-all duration-200 text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-tint)] outline-none transition-all duration-200 text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium mb-2"
                  >
                    Service interested in
                  </label>
                  <select
                    id="contact-service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-tint)] outline-none transition-all duration-200 text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-tint)] outline-none transition-all duration-200 text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="btn-primary w-full justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : formState === "success" ? (
                    <>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      Message sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                {formState === "error" && (
                  <p className="text-red-600 text-sm text-center" role="alert">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
