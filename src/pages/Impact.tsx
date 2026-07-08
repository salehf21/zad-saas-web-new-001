import { Footer, PageShell } from "../components/layout";
import { AnalyticsPanel } from "../components/mockups";
import { CountUp, Reveal, Stagger, StaggerItem } from "../components/motion";
import { FinalCta, SplitSection } from "../components/sections";
import { Badge, Button } from "../components/ui";
import { useI18n } from "../i18n";

export function ImpactPage() {
  const { m } = useI18n();
  return (
    <PageShell>
      <section className="hero impact-hero">
        <Reveal className="hero-copy">
          <Badge>{m.impact.badge}</Badge>
          <h1>{m.impact.title}</h1>
          <p>{m.impact.sub}</p>
          <Button href="/signup">{m.common.startForFree}</Button>
        </Reveal>
      </section>
      <Stagger className="section section-gray stats-section">
        {m.impact.stats.map((stat) => (
          <StaggerItem className="stat-card" key={stat.label}>
            <strong>
              <CountUp value={stat.value} />
            </strong>
            <span>{stat.label}</span>
          </StaggerItem>
        ))}
      </Stagger>
      <SplitSection
        eyebrow={m.impact.split.eyebrow}
        title={m.impact.split.title}
        body={m.impact.split.body}
        visual={<AnalyticsPanel />}
        bullets={m.impact.split.bullets}
      />
      <FinalCta title={m.impact.ctaTitle} body={m.impact.ctaBody} />
      <Footer />
    </PageShell>
  );
}
