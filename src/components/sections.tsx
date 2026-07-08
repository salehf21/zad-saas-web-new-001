import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { featureIcons } from "../data";
import { useI18n } from "../i18n";
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

export function FeatureGrid({ range = [0, 12] }: { range?: [number, number] }) {
  const { m } = useI18n();
  const items = m.home.features.slice(range[0], range[1]);
  const icons = featureIcons.slice(range[0], range[1]);
  return (
    <Stagger className="feature-grid">
      {items.map((item, index) => {
        const Icon = icons[index];
        return (
          <StaggerItem className="feature-card" key={item.title}>
            <span className="feature-icon">
              <Icon size={24} strokeWidth={1.7} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

export function EasySetupSection() {
  const { m } = useI18n();
  return (
    <section className="section setup-section">
      <SectionHeader eyebrow={m.setup.eyebrow} title={m.setup.title} body={m.setup.body} />
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
          {m.setup.steps.map((step, index) => (
            <StaggerItem className="setup-step-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <Reveal className="setup-cta" delay={0.2}>
        <Button href="/signup" size="lg">
          {m.setup.cta}
        </Button>
        <small>{m.setup.ctaNote}</small>
      </Reveal>
    </section>
  );
}

export function JourneyGrid() {
  const { m } = useI18n();
  return (
    <Stagger className="journey-grid">
      {m.home.journeySteps.map((step, index) => (
        <StaggerItem className="journey-step" key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Testimonials() {
  const { m } = useI18n();
  return (
    <section className="section testimonials">
      <SectionHeader title={m.home.testimonialsTitle} />
      <Stagger className="testimonial-grid">
        {m.home.testimonials.map((entry) => (
          <StaggerItem className="testimonial-card" key={entry.name}>
            <div className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star size={18} fill="currentColor" key={index} />
              ))}
            </div>
            <p>"{entry.quote}"</p>
            <strong>{entry.name}</strong>
            <span>{entry.role}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function FaqSection() {
  const { m } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section-gray faq-section">
      <SectionHeader title={m.home.faqTitle} />
      <Stagger className="faq-grid">
        {m.home.faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <StaggerItem className={`faq-item ${open ? "faq-item-open" : ""}`} key={faq.q}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {faq.q}
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
                    <p>{faq.a}</p>
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
  primary,
  secondary
}: {
  title: string;
  body: string;
  primary?: string;
  secondary?: string;
}) {
  const { m } = useI18n();
  return (
    <section className="final-cta">
      <SectionHeader title={title} body={body} dark />
      <Reveal className="hero-actions" delay={0.15}>
        <Button href="/signup" size="lg">
          {primary ?? m.common.startForFree}
        </Button>
        <Button href="/contact" tone="outline" size="lg">
          {secondary ?? m.common.bookADemo}
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
  bullets: readonly string[];
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

export function BenefitList({ title, items }: { title: string; items: readonly string[] }) {
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
  const { m } = useI18n();
  const dark = type === "custom";
  const items = dark ? m.pricing.customFeatures : m.pricing.freeFeatures;
  return (
    <motion.article
      className={`pricing-card ${dark ? "pricing-card-dark" : ""}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      <div className="pricing-card-head">
        <div>
          <h2>{dark ? m.pricing.customName : m.pricing.freeName}</h2>
          {dark ? (
            <strong>{m.pricing.customPrice}</strong>
          ) : (
            <strong>
              <span>$0</span>
              {m.pricing.freePerMonth}
            </strong>
          )}
        </div>
        {!dark ? <Badge>{m.pricing.mostPopular}</Badge> : <Badge dark>{m.pricing.enterprise}</Badge>}
      </div>
      <p>{dark ? m.pricing.customDesc : m.pricing.freeDesc}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={16} /> {item}
          </li>
        ))}
      </ul>
      <Button href={dark ? "/contact" : "/signup"} tone={dark ? "outline" : "red"}>
        {dark ? m.common.contactUs : m.common.startForFree}
      </Button>
      <small>{dark ? m.pricing.customNote : m.pricing.freeNote}</small>
    </motion.article>
  );
}

export function ComparisonTable() {
  const { m } = useI18n();
  return (
    <Reveal className="comparison-wrap">
      <div className="comparison-table">
        <div className="comparison-head">
          <span>{m.pricing.compareFeature}</span>
          <span>{m.pricing.freeName}</span>
          <span>{m.pricing.customName}</span>
        </div>
        {m.pricing.compareRows.map((row, index) => (
          <div className="comparison-row" key={row}>
            <strong>{row}</strong>
            <span aria-label={index > 6 ? m.pricing.notIncluded : m.pricing.included}>
              {index > 6 ? "—" : <Check size={18} />}
            </span>
            <span aria-label={m.pricing.included}>
              <Check size={18} />
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
