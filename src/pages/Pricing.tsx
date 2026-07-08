import { Check } from "lucide-react";
import { Footer, PageShell } from "../components/layout";
import { Reveal, Stagger, StaggerItem } from "../components/motion";
import { ComparisonTable, FinalCta, PricingCard } from "../components/sections";
import { Badge, SectionHeader } from "../components/ui";

const pricingFaqs: readonly [string, string][] = [
  ["Is ZAD really free?", "Yes, our Free Forever plan includes basic ordering and menu features with no time limit."],
  ["No credit card required?", "No credit card is required to sign up for the free plan. Start your restaurant immediately."],
  ["Can I upgrade later?", "You can switch to a custom enterprise plan anytime your restaurant needs more advanced features."],
  ["Is there a setup fee?", "There are zero setup fees for ZAD. Our self-serve dashboard lets you go live in minutes."],
  ["Does free include QR ordering?", "Absolutely. Every ZAD user gets a high-speed QR menu and table ordering out of the box."],
  ["Support multi-branch?", "Multi-branch and central kitchen management are available on our Custom System plan."],
  ["How is Custom priced?", "Custom pricing depends on branch count, integrations, and development requirements."],
  ["What if I outgrow free?", "Contact our sales team for a quote that matches your restaurant scale and complexity."]
];

export function PricingPage() {
  return (
    <PageShell>
      <section className="hero pricing-hero">
        <Reveal className="hero-copy">
          <Badge>Pricing</Badge>
          <h1>Simple, honest pricing</h1>
          <p>Start free. No credit card. No setup fee.</p>
          <div className="hero-proof">
            <span>
              <Check size={14} /> Free forever
            </span>
            <span>
              <Check size={14} /> No hidden fees
            </span>
            <span>
              <Check size={14} /> Cancel anytime
            </span>
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
        <SectionHeader title="Compare plans in detail" />
        <ComparisonTable />
      </section>
      <section className="section section-gray pricing-faq">
        <SectionHeader title="Pricing questions answered" />
        <Stagger className="pricing-faq-grid">
          {pricingFaqs.map(([question, answer]) => (
            <StaggerItem key={question}>
              <article>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <FinalCta
        title="Start your free restaurant today"
        body="No credit card. No setup fee. Join 20k+ global operators."
        secondary="Contact Sales"
      />
      <Footer />
    </PageShell>
  );
}
