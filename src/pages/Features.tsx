import { Footer, PageShell } from "../components/layout";
import { Reveal } from "../components/motion";
import { FeatureGrid, FinalCta } from "../components/sections";
import { Badge, Button, SectionHeader } from "../components/ui";
import { featureCards } from "../data";

export function FeaturesPage() {
  const groups = [
    ["Customer Experience", featureCards.slice(0, 6)],
    ["Restaurant Operations", featureCards.slice(6, 10)],
    ["Analytics & Control", featureCards.slice(10)]
  ] as const;

  return (
    <PageShell>
      <section className="hero simple-hero">
        <Reveal className="hero-copy">
          <Badge>Features</Badge>
          <h1>Everything your restaurant needs, organized clearly</h1>
          <p>Customer ordering, operations, loyalty, analytics, and sustainability tools in one ZAD workspace.</p>
          <Button href="/signup">Start for Free</Button>
        </Reveal>
      </section>
      {groups.map(([title, items], index) => (
        <section className={`section ${index % 2 ? "" : "section-gray"}`} key={title}>
          <SectionHeader
            title={title}
            body={index === 0 ? "Fast, clean experiences for guests and staff." : undefined}
          />
          <FeatureGrid items={items} />
        </section>
      ))}
      <FinalCta
        title="Bring every restaurant workflow into one place"
        body="A practical operating system built for repeated daily use."
      />
      <Footer />
    </PageShell>
  );
}
