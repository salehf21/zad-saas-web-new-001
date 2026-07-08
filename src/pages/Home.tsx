import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Footer, PageShell } from "../components/layout";
import { DashboardMockup, HeroNotifications } from "../components/mockups";
import { fadeUp, staggerContainer, Floating, Reveal } from "../components/motion";
import {
  EasySetupSection,
  FaqSection,
  FeatureGrid,
  FinalCta,
  InfoCard,
  JourneyGrid,
  PricingCard,
  Testimonials
} from "../components/sections";
import { Badge, Button, SectionHeader } from "../components/ui";
import { featureCards, journeySteps, problemCards, solutionItems } from "../data";

export function HomePage() {
  return (
    <PageShell>
      <section className="hero home-hero">
        <motion.div
          className="hero-copy"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Badge>Restaurant Operating System</Badge>
          </motion.div>
          <motion.h1 className="desktop-title" variants={fadeUp}>
            Run your restaurant from one digital operating system
          </motion.h1>
          <motion.h1 className="mobile-title" variants={fadeUp}>
            The Restaurant Operating System
          </motion.h1>
          <motion.p className="desktop-title" variants={fadeUp}>
            QR ordering, menus, reservations, tables, loyalty, and analytics — all in one place.
          </motion.p>
          <motion.p className="mobile-title" variants={fadeUp}>
            QR ordering, tables, loyalty, and receipts — all in ZAD.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <Button href="/signup" size="lg">
              Start for Free
            </Button>
            <Button href="/product" tone="white" size="lg">
              View Dashboard
            </Button>
          </motion.div>
          <motion.p className="mobile-setup-line" variants={fadeUp}>
            Download. Set up. Start.
          </motion.p>
          <motion.div className="hero-proof" variants={fadeUp}>
            {["No app required", "Free forever", "Built for restaurants & cafes"].map((item) => (
              <span key={item}>
                <Check size={14} /> {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Floating className="hero-float" distance={7} duration={7}>
            <DashboardMockup />
          </Floating>
          <HeroNotifications />
        </motion.div>
      </section>

      <EasySetupSection />

      <section className="section section-gray problem-section">
        <SectionHeader eyebrow="The Problem" title="Running a restaurant is harder than it should be" />
        <motion.div
          className="problem-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px 0px" }}
        >
          {problemCards.map(([Icon, title, text]) => (
            <InfoCard icon={Icon} title={title} text={text} key={title} />
          ))}
        </motion.div>
      </section>

      <section className="section solution-section">
        <Reveal>
          <h2>ZAD solves all of this</h2>
        </Reveal>
        <motion.div
          className="solution-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px 0px" }}
        >
          {solutionItems.map((item) => (
            <motion.span key={item} variants={fadeUp}>
              <Check size={16} /> {item}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section className="section section-gray">
        <SectionHeader
          title="Everything a modern restaurant needs"
          body="Not just a QR menu — a full operating system for orders, tables, guests, and growth."
        />
        <FeatureGrid items={featureCards} />
      </section>

      <section className="mobile-only-section mobile-pricing-section">
        <Reveal>
          <h2>Simple pricing</h2>
        </Reveal>
        <div className="pricing-cards">
          <PricingCard type="free" />
          <PricingCard type="custom" />
        </div>
      </section>

      <section className="section journey-section">
        <SectionHeader
          title="The customer journey in 9 steps"
          body="No app needed — just scan and enjoy a seamless experience."
        />
        <JourneyGrid steps={journeySteps} />
      </section>

      <Testimonials />
      <FaqSection />
      <FinalCta
        title="Start your digital restaurant experience today"
        body="Join hundreds of restaurants growing with ZAD."
      />
      <Footer />
    </PageShell>
  );
}
