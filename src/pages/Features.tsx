import { Footer, PageShell } from "../components/layout";
import { Reveal } from "../components/motion";
import { FeatureGrid, FinalCta } from "../components/sections";
import { Badge, Button, SectionHeader } from "../components/ui";
import { useI18n } from "../i18n";

export function FeaturesPage() {
  const { m } = useI18n();
  const groups: readonly { title: string; body?: string; range: [number, number] }[] = [
    { title: m.features.groupCustomer, body: m.features.groupCustomerBody, range: [0, 6] },
    { title: m.features.groupOperations, range: [6, 10] },
    { title: m.features.groupAnalytics, range: [10, 12] }
  ];

  return (
    <PageShell>
      <section className="hero simple-hero">
        <Reveal className="hero-copy">
          <Badge>{m.features.badge}</Badge>
          <h1>{m.features.title}</h1>
          <p>{m.features.sub}</p>
          <Button href="/signup">{m.common.startForFree}</Button>
        </Reveal>
      </section>
      {groups.map((group, index) => (
        <section className={`section ${index % 2 ? "" : "section-gray"}`} key={group.title}>
          <SectionHeader title={group.title} body={group.body} />
          <FeatureGrid range={group.range} />
        </section>
      ))}
      <FinalCta title={m.features.ctaTitle} body={m.features.ctaBody} />
      <Footer />
    </PageShell>
  );
}
