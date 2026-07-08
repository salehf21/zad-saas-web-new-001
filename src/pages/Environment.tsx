import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Footer, PageShell } from "../components/layout";
import { PhoneMockup, ReceiptTransition } from "../components/mockups";
import { CountUp, Floating, Reveal, Stagger, StaggerItem, staggerContainer } from "../components/motion";
import { FinalCta, InfoCard } from "../components/sections";
import { Badge, Button, SectionHeader } from "../components/ui";
import { envHelpIcons, envProblemIcons } from "../data";
import { useI18n } from "../i18n";

export function EnvironmentPage() {
  const { m } = useI18n();
  return (
    <PageShell>
      <section className="qr-hero env-hero">
        <Reveal className="qr-hero-copy">
          <Badge>{m.environment.badge}</Badge>
          <h1>{m.environment.title}</h1>
          <p>{m.environment.sub}</p>
          <div className="hero-actions">
            <Button href="/contact" size="lg">
              {m.common.bookADemo}
            </Button>
            <Button href="/signup" tone="white" size="lg">
              {m.common.startForFree}
            </Button>
          </div>
        </Reveal>
        <Reveal className="phone-cluster" delay={0.15} y={36}>
          <Floating distance={8} duration={6}>
            <PhoneMockup variant="scan" />
          </Floating>
          <ReceiptTransition />
        </Reveal>
      </section>

      <section className="section section-gray">
        <SectionHeader
          eyebrow={m.environment.problemEyebrow}
          title={m.environment.problemTitle}
          body={m.environment.problemBody}
        />
        <motion.div
          className="env-problem-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px 0px" }}
        >
          {m.environment.problems.map((card, index) => (
            <InfoCard icon={envProblemIcons[index]} title={card.title} text={card.body} key={card.title} />
          ))}
        </motion.div>
      </section>

      <section className="section">
        <SectionHeader eyebrow={m.environment.helpEyebrow} title={m.environment.helpTitle} />
        <Stagger className="feature-grid env-help-grid">
          {m.environment.helps.map((item, index) => {
            const Icon = envHelpIcons[index];
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
      </section>

      <section className="section section-gray env-metrics">
        <SectionHeader title={m.environment.metricsTitle} body={m.environment.metricsBody} />
        <Stagger className="stats-section env-stats">
          {m.environment.metrics.map((stat) => (
            <StaggerItem className="stat-card" key={stat.label}>
              <strong>
                <CountUp value={stat.value} />
              </strong>
              <span>{stat.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section">
        <SectionHeader title={m.environment.benefitsTitle} />
        <Stagger className="env-benefits">
          {m.environment.benefits.map((item) => (
            <StaggerItem className="env-benefit" key={item}>
              <Check size={16} /> {item}
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section statement-section">
        <Reveal className="statement-inner">
          <Badge>{m.environment.statementEyebrow}</Badge>
          <p>{m.environment.statement}</p>
        </Reveal>
      </section>

      <FinalCta title={m.environment.ctaTitle} body={m.environment.ctaBody} />
      <Footer />
    </PageShell>
  );
}
