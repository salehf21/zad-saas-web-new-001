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

export function ProductPage() {
  return (
    <PageShell>
      <section className="hero product-hero">
        <Reveal className="hero-copy">
          <Badge>Restaurant Dashboard</Badge>
          <h1>The command center for your restaurant</h1>
          <p>Orders, tables, reservations, customers, menu, analytics — in one clean dashboard.</p>
          <Button href="/signup">Try for Free</Button>
        </Reveal>
        <Reveal className="hero-visual" delay={0.15} y={36}>
          <DashboardMockup compact title="The Burger House" />
        </Reveal>
      </section>

      <SplitSection
        eyebrow="Kitchen Display"
        title="Live orders from every table"
        body="Kitchen staff see new orders instantly with sound alerts, table context, and one-click status tracking."
        visual={<KitchenPanel />}
        reverse
        bullets={["Real-time updates", "Status tracking", "Table context"]}
      />

      <SplitSection
        eyebrow="Reservations"
        title="Never miss a booking"
        body="Digital reservation logs, guest history, automated confirmations, and waiting-list management keep the floor under control."
        visual={<ReservationPanel />}
        bullets={[
          "Digital reservation log",
          "Automated SMS confirmations",
          "Guest history and allergy tracking",
          "Google and social booking links"
        ]}
      />

      <section className="section section-gray table-section">
        <SectionHeader eyebrow="Table Map" title="Full visibility at a glance" align="left" />
        <TableMap />
      </section>

      <SplitSection
        eyebrow="Menu Builder"
        title="Update anything, anytime"
        body="Instant updates across QR and tablets, categories, photo-rich items, spicy tags, and dietary markers."
        visual={<MenuBuilder />}
        bullets={[
          "Manage seasonal availability",
          "Daily special highlights and tags",
          "Photo-rich menu descriptions",
          "Price adjustments by time of day"
        ]}
      />

      <section className="section section-gray analytics-section">
        <SectionHeader eyebrow="Analytics" title="Data that drives decisions" align="left" />
        <AnalyticsPanel />
      </section>

      <FinalCta
        title="Start managing your restaurant smarter"
        body="Join thousands of restaurant owners using ZAD to streamline their operations and increase revenue."
      />
      <Footer />
    </PageShell>
  );
}
