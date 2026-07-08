import { Check } from "lucide-react";
import { Footer, PageShell } from "../components/layout";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import { ComparisonTable, FinalCta, PricingCard } from "../components/sections";
import { Badge, SectionHeader } from "../components/ui";
import { useI18n } from "../i18n";

export function PricingPage() {
  const { m } = useI18n();
  return (
    <PageShell>
      <section className="hero pricing-hero">
        <Reveal className="hero-copy">
          <Badge>{m.pricing.badge}</Badge>
          <h1>{m.pricing.title}</h1>
          <p>{m.pricing.sub}</p>
          <div className="hero-proof">
            {m.pricing.proof.map((item) => (
              <span key={item}>
                <Check size={14} /> {item}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section section-gray pricing-cards-section">
        <Stagger className="pricing-cards">
          <StaggerItem>
            <PricingCard type="free" />
          </StaggerItem>
          <StaggerItem>
            <PricingCard type="custom" />
          </StaggerItem>
        </Stagger>
      </section>
      <section className="section compare-section">
        <SectionHeader title={m.pricing.compareTitle} />
        <ComparisonTable />
      </section>
      <section className="section section-gray pricing-faq">
        <SectionHeader title={m.pricing.faqTitle} />
        <Stagger className="pricing-faq-grid">
          {m.pricing.faqs.map((faq) => (
            <StaggerItem key={faq.q}>
              <article>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <FinalCta title={m.pricing.ctaTitle} body={m.pricing.ctaBody} secondary={m.common.contactSales} />
      <Footer />
    </PageShell>
  );
}
