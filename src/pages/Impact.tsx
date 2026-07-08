import { Footer, PageShell } from "../components/layout";
import { AnalyticsPanel } from "../components/mockups";
import { CountUp, Reveal, Stagger, StaggerItem } from "../components/motion";
import { FinalCta, SplitSection } from "../components/sections";
import { Badge, Button } from "../components/ui";

const stats: readonly [string, string][] = [
  ["80%", "less menu printing"],
  ["10 min", "average setup time"],
  ["24/7", "digital ordering"],
  ["0", "app downloads needed"]
];

export function ImpactPage() {
  return (
    <PageShell>
      <section className="hero impact-hero">
        <Reveal className="hero-copy">
          <Badge>Impact</Badge>
          <h1>Less paper, fewer mistakes, faster service</h1>
          <p>
            ZAD helps restaurants reduce waste and grow with better guest data, cleaner operations,
            and simpler workflows.
          </p>
          <Button href="/signup">Start for Free</Button>
        </Reveal>
      </section>
      <Stagger className="section section-gray stats-section">
        {stats.map(([value, label]) => (
          <StaggerItem className="stat-card" key={label}>
            <strong>
              <CountUp value={value} />
            </strong>
            <span>{label}</span>
          </StaggerItem>
        ))}
      </Stagger>
      <SplitSection
        eyebrow="For your restaurant"
        title="Operational clarity at the exact moment you need it"
        body="Replace manual steps with live order data, automatic receipts, and customer profiles that are easy to act on."
        visual={<AnalyticsPanel />}
        bullets={[
          "More accurate orders",
          "Lower paper waste",
          "Better repeat-customer insight",
          "A calmer service rhythm"
        ]}
      />
      <FinalCta
        title="Make your restaurant easier to run"
        body="Start with the free plan and grow into the tools you need."
      />
      <Footer />
    </PageShell>
  );
}
