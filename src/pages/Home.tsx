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
import { problemIcons } from "../data";
import { useI18n } from "../i18n";

export function HomePage() {
  const { m } = useI18n();
  return (
    <PageShell>
      <section className="hero home-hero">
        <motion.div className="hero-copy" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Badge>{m.home.badge}</Badge>
          </motion.div>
          <motion.h1 className="desktop-title" variants={fadeUp}>
            {m.home.titleDesktop}
          </motion.h1>
          <motion.h1 className="mobile-title" variants={fadeUp}>
            {m.home.titleMobile}
          </motion.h1>
          <motion.p className="desktop-title" variants={fadeUp}>
            {m.home.subDesktop}
          </motion.p>
          <motion.p className="mobile-title" variants={fadeUp}>
            {m.home.subMobile}
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <Button href="/signup" size="lg">
              {m.common.startForFree}
            </Button>
            <Button href="/product" tone="white" size="lg">
              {m.common.viewDashboard}
            </Button>
          </motion.div>
          <motion.p className="mobile-setup-line" variants={fadeUp}>
            {m.home.setupLine}
          </motion.p>
          <motion.div className="hero-proof" variants={fadeUp}>
            {m.home.proof.map((item) => (
              <span key={item}>
                <Check size={14} /> {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 40, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Floating className="hero-float" distance={7} duration={7}>
            <DashboardMockup />
          </Floating>
          <HeroNotifications />
        </motion.div>
      </section>

      <EasySetupSection />

      <section className="section section-gray problem-section">
        <SectionHeader eyebrow={m.home.problemEyebrow} title={m.home.problemTitle} />
        <motion.div
          className="problem-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px 0px" }}
        >
          {m.home.problems.map((card, index) => (
            <InfoCard icon={problemIcons[index]} title={card.title} text={card.body} key={card.title} />
          ))}
        </motion.div>
      </section>

      <section className="section solution-section">
        <Reveal>
          <h2>{m.home.solutionTitle}</h2>
        </Reveal>
        <motion.div
          className="solution-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px 0px" }}
        >
          {m.home.solutionItems.map((item) => (
            <motion.span key={item} variants={fadeUp}>
              <Check size={16} /> {item}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section className="section section-gray">
        <SectionHeader title={m.home.featuresTitle} body={m.home.featuresBody} />
        <FeatureGrid />
      </section>

      <section className="mobile-only-section mobile-pricing-section">
        <Reveal>
          <h2>{m.home.simplePricing}</h2>
        </Reveal>
        <div className="pricing-cards">
          <PricingCard type="free" />
          <PricingCard type="custom" />
        </div>
      </section>

      <section className="section journey-section">
        <SectionHeader title={m.home.journeyTitle} body={m.home.journeyBody} />
        <JourneyGrid />
      </section>

      <Testimonials />
      <FaqSection />
      <FinalCta title={m.home.ctaTitle} body={m.home.ctaBody} />
      <Footer />
    </PageShell>
  );
}
