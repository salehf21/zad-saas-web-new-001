import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { customFeatures, faqs, pricingFeatures, setupSteps, testimonials } from "../data";
import type { CardContent } from "../data";
import { EASE, Reveal, Stagger, StaggerItem } from "./motion";
import { Badge, Button, SectionHeader } from "./ui";

export function InfoCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <StaggerItem className="info-card">
      <Icon size={28} strokeWidth={1.8} />
      <h3>{title}</h3>
      <p>{text}</p>
    </StaggerItem>
  );
}

export function FeatureGrid({ items }: { items: readonly CardContent[] }) {
  return (
    <Stagger className="feature-grid">
      {items.map(([Icon, title, text]) => (
        <StaggerItem className="feature-card" key={title}>
          <span className="feature-icon">
            <Icon size={24} strokeWidth={1.7} />
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function EasySetupSection() {
  return (
    <section className="section setup-section">
      <SectionHeader
        eyebrow="Easy Setup"
        title="Download. Set up. Start."
        body="No hardware, no consultants, no waiting. Go from signup to live QR ordering in about 10 minutes."
      />
      <div className="setup-steps">
        <motion.span
          className="setup-progress"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-64px 0px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
        />
        <Stagger className="setup-steps-grid">
          {setupSteps.map(([num, title, body]) => (
            <StaggerItem className="setup-step-card" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <Reveal className="setup-cta" delay={0.2}>
        <Button href="/signup" size="lg">
          Set Up Your Restaurant
        </Button>
        <small>Free forever · No credit card · No app for your customers</small>
      </Reveal>
    </section>
  );
}

export function JourneyGrid({ steps }: { steps: readonly [string, string, string][] }) {
  return (
    <Stagger className="journey-grid">
      {steps.map(([num, title, body]) => (
        <StaggerItem className="journey-step" key={num}>
          <span>{num}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Testimonials() {
  return (
    <section className="section testimonials">
      <SectionHeader title="Trusted by restaurants" />
      <Stagger className="testimonial-grid">
        {testimonials.map(([name, role, quote]) => (
          <StaggerItem className="testimonial-card" key={name}>
            <div className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star size={18} fill="currentColor" key={index} />
              ))}
            </div>
            <p>"{quote}"</p>
            <strong>{name}</strong>
            <span>{role}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section-gray faq-section">
      <SectionHeader title="Frequently asked questions" />
      <Stagger className="faq-grid">
        {faqs.map(([question, answer], index) => {
          const open = openIndex === index;
          return (
            <StaggerItem className={`faq-item ${open ? "faq-item-open" : ""}`} key={question}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {question}
                <motion.span
                  className="faq-chevron"
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}

export function FinalCta({
  title,
  body,
  primary = "Start for Free",
  secondary = "Book a Demo"
}: {
  title: string;
  body: string;
  primary?: string;
  secondary?: string;
}) {
  return (
    <section className="final-cta">
      <SectionHeader title={title} body={body} dark />
      <Reveal className="hero-actions" delay={0.15}>
        <Button href="/signup" size="lg">
          {primary}
        </Button>
        <Button href="/contact" tone="outline" size="lg">
          {secondary}
        </Button>
      </Reveal>
    </section>
  );
}

export function SplitSection({
  eyebrow,
  title,
  body,
  visual,
  bullets,
  reverse = false
}: {
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
  bullets: string[];
  reverse?: boolean;
}) {
  return (
    <section className={`split-section ${reverse ? "split-reverse" : ""}`}>
      <Reveal className="split-visual" y={32}>
        {visual}
      </Reveal>
      <Reveal className="split-copy" delay={0.1}>
        <Badge>{eyebrow}</Badge>
        <h2>{title}</h2>
        <p>{body}</p>
        <ul className="check-list">
          {bullets.map((item) => (
            <li key={item}>
              <Check size={16} /> {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function BenefitList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <h2>{title}</h2>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>
            <Check size={16} /> {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function PricingCard({ type }: { type: "free" | "custom" }) {
  const dark = type === "custom";
  const items = dark ? customFeatures : pricingFeatures;
  return (
    <motion.article
      className={`pricing-card ${dark ? "pricing-card-dark" : ""}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      <div className="pricing-card-head">
        <div>
          <h2>{dark ? "Custom System" : "Free Forever"}</h2>
          {dark ? (
            <strong>Contact Us</strong>
          ) : (
            <strong>
              <span>$0</span>/month
            </strong>
          )}
        </div>
        {!dark ? <Badge>Most Popular</Badge> : <Badge dark>Enterprise</Badge>}
      </div>
      <p>
        {dark
          ? "Enterprise solutions for multi-branch restaurants and franchise chains."
          : "Ideal for small restaurants and food trucks starting their digital journey."}
      </p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={16} /> {item}
          </li>
        ))}
      </ul>
      <Button href={dark ? "/contact" : "/signup"} tone={dark ? "outline" : "red"}>
        {dark ? "Contact Us" : "Start for Free"}
      </Button>
      <small>{dark ? "Tailored to your restaurant." : "Always free. No time limit."}</small>
    </motion.article>
  );
}

export function ComparisonTable() {
  const rows = [
    "QR Menu",
    "Table Ordering",
    "Menu Management",
    "Order Dashboard",
    "Reservations",
    "Digital Receipts",
    "Analytics",
    "Custom Dashboard",
    "Custom Branding",
    "Multi-Branch",
    "POS Integration",
    "Dedicated Support"
  ];
  return (
    <Reveal className="comparison-wrap">
      <div className="comparison-table">
        <div className="comparison-head">
          <span>Feature</span>
          <span>Free Forever</span>
          <span>Custom System</span>
        </div>
        {rows.map((row, index) => (
          <div className="comparison-row" key={row}>
            <strong>{row}</strong>
            <span aria-label={index > 6 ? "Not included" : "Included"}>
              {index > 6 ? "—" : <Check size={18} />}
            </span>
            <span aria-label="Included">
              <Check size={18} />
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
