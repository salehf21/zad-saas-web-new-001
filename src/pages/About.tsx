import { Footer, PageShell } from "../components/layout";
import { DashboardMockup, MissionGraphic } from "../components/mockups";
import { Reveal } from "../components/motion";
import { FinalCta, SplitSection } from "../components/sections";
import { Badge } from "../components/ui";

export function AboutPage() {
  return (
    <PageShell>
      <section className="hero about-hero">
        <Reveal className="hero-copy">
          <Badge>About ZAD</Badge>
          <h1>Built for modern restaurants in the region and beyond</h1>
          <p>
            We believe powerful restaurant software should be simple to start, affordable to keep,
            and respectful of how real teams work.
          </p>
        </Reveal>
        <Reveal className="hero-visual" delay={0.15} y={36}>
          <DashboardMockup compact title="ZAD Restaurant OS" />
        </Reveal>
      </section>
      <SplitSection
        eyebrow="Mission"
        title="Give every restaurant an operating system"
        body="From reservation to digital receipt, ZAD connects the customer journey with back-of-house control."
        visual={<MissionGraphic />}
        bullets={[
          "Free to start",
          "Quick setup in 10 minutes",
          "Arabic and English by design",
          "Built in Amman, Jordan"
        ]}
      />
      <FinalCta
        title="Start for free and grow with precision"
        body="Download. Set up. Start. ZAD keeps the first step simple."
      />
      <Footer />
    </PageShell>
  );
}
