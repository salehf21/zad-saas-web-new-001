import { Footer, PageShell } from "../components/layout";
import {
  AnalyticsPanel,
  DashboardMockup,
  KitchenPanel,
  MenuBuilder,
  ReservationPanel,
  TableMap
} from "../components/mockups";
import { Reveal } from "../components/motion";
import { FinalCta, SplitSection } from "../components/sections";
import { Badge, Button, SectionHeader } from "../components/ui";
import { useI18n } from "../i18n";

export function ProductPage() {
  const { m } = useI18n();
  return (
    <PageShell>
      <section className="hero product-hero">
        <Reveal className="hero-copy">
          <Badge>{m.product.badge}</Badge>
          <h1>{m.product.title}</h1>
          <p>{m.product.sub}</p>
          <Button href="/signup">{m.common.tryForFree}</Button>
        </Reveal>
        <Reveal className="hero-visual" delay={0.15} y={36}>
          <DashboardMockup compact title={m.mockups.burgerHouse} />
        </Reveal>
      </section>

      <SplitSection
        eyebrow={m.product.kitchen.eyebrow}
        title={m.product.kitchen.title}
        body={m.product.kitchen.body}
        visual={<KitchenPanel />}
        reverse
        bullets={m.product.kitchen.bullets}
      />

      <SplitSection
        eyebrow={m.product.reservations.eyebrow}
        title={m.product.reservations.title}
        body={m.product.reservations.body}
        visual={<ReservationPanel />}
        bullets={m.product.reservations.bullets}
      />

      <section className="section section-gray table-section">
        <SectionHeader eyebrow={m.product.tableMapEyebrow} title={m.product.tableMapTitle} align="left" />
        <TableMap />
      </section>

      <SplitSection
        eyebrow={m.product.menuBuilder.eyebrow}
        title={m.product.menuBuilder.title}
        body={m.product.menuBuilder.body}
        visual={<MenuBuilder />}
        bullets={m.product.menuBuilder.bullets}
      />

      <section className="section section-gray analytics-section">
        <SectionHeader eyebrow={m.product.analyticsEyebrow} title={m.product.analyticsTitle} align="left" />
        <AnalyticsPanel />
      </section>

      <FinalCta title={m.product.ctaTitle} body={m.product.ctaBody} />
      <Footer />
    </PageShell>
  );
}
