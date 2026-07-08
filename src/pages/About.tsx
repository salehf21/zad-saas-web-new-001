import { Footer, PageShell } from "../components/layout";
import { DashboardMockup, MissionGraphic } from "../components/mockups";
import { Reveal } from "../components/motion";
import { FinalCta, SplitSection } from "../components/sections";
import { Badge } from "../components/ui";
import { useI18n } from "../i18n";

export function AboutPage() {
  const { m } = useI18n();
  return (
    <PageShell>
      <section className="hero about-hero">
        <Reveal className="hero-copy">
          <Badge>{m.about.badge}</Badge>
          <h1>{m.about.title}</h1>
          <p>{m.about.sub}</p>
        </Reveal>
        <Reveal className="hero-visual" delay={0.15} y={36}>
          <DashboardMockup compact title={m.mockups.zadRestaurantOs} />
        </Reveal>
      </section>
      <SplitSection
        eyebrow={m.about.mission.eyebrow}
        title={m.about.mission.title}
        body={m.about.mission.body}
        visual={<MissionGraphic />}
        bullets={m.about.mission.bullets}
      />
      <FinalCta title={m.about.ctaTitle} body={m.about.ctaBody} />
      <Footer />
    </PageShell>
  );
}
