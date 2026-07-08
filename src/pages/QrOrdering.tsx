import { Check, Gamepad2 } from "lucide-react";
import { Footer, PageShell } from "../components/layout";
import { PhoneMockup, ReceiptTransition } from "../components/mockups";
import { Floating, Reveal, Stagger, StaggerItem } from "../components/motion";
import { BenefitList, FinalCta, SplitSection } from "../components/sections";
import { Badge, Button, SectionHeader } from "../components/ui";
import { useI18n } from "../i18n";

export function QrOrderingPage() {
  const { m } = useI18n();
  return (
    <PageShell>
      <section className="qr-hero">
        <Reveal className="qr-hero-copy">
          <Badge>{m.qr.badge}</Badge>
          <h1>{m.qr.title}</h1>
          <p>{m.qr.sub}</p>
          <div className="hero-actions">
            <Button href="#journey">{m.qr.seeHow}</Button>
            <Button tone="white" href="/product">
              {m.qr.watchDemo}
            </Button>
          </div>
          <div className="hero-proof">
            {m.qr.proof.map((item) => (
              <span key={item}>
                <Check size={14} /> {item}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="phone-cluster" delay={0.15} y={36}>
          <Floating distance={8} duration={6}>
            <PhoneMockup variant="scan" />
          </Floating>
          <Floating distance={10} duration={7} delay={0.6}>
            <PhoneMockup variant="receipt" tilted />
          </Floating>
        </Reveal>
      </section>
      <section className="red-band">
        <Reveal>
          <h2>{m.qr.bandTitle}</h2>
          <p>{m.qr.bandBody}</p>
        </Reveal>
      </section>
      <section className="section section-gray" id="journey">
        <SectionHeader title={m.qr.journeyTitle} />
        <Stagger className="journey-cards">
          {m.qr.journeyCards.map((card, index) => (
            <StaggerItem className="journey-card" key={card.title}>
              <span>{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <SplitSection
        eyebrow={m.qr.waiter.eyebrow}
        title={m.qr.waiter.title}
        body={m.qr.waiter.body}
        visual={<PhoneMockup variant="waiter" />}
        bullets={m.qr.waiter.bullets}
        reverse
      />
      <section className="section section-gray receipt-section">
        <SectionHeader eyebrow={m.qr.receiptEyebrow} title={m.qr.receiptTitle} />
        <div className="receipt-layout">
          <Stagger className="receipt-actions">
            {m.qr.receiptActions.map((action) => (
              <StaggerItem key={action.title}>
                <button type="button">
                  {action.title}
                  <span>{action.body}</span>
                </button>
              </StaggerItem>
            ))}
          </Stagger>
          <ReceiptTransition />
        </div>
      </section>
      <section className="section">
        <SectionHeader title={m.qr.gamesTitle} body={m.qr.gamesBody} />
        <Stagger className="mini-game-grid">
          {m.qr.gameCards.map((card) => (
            <StaggerItem className="game-card" key={card.title}>
              <Gamepad2 size={48} />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <section className="benefit-split">
        <div>
          <BenefitList title={m.qr.forRestaurantsTitle} items={m.qr.forRestaurants} />
        </div>
        <div>
          <BenefitList title={m.qr.forCustomersTitle} items={m.qr.forCustomers} />
        </div>
      </section>
      <FinalCta title={m.qr.ctaTitle} body={m.qr.ctaBody} />
      <Footer compact />
    </PageShell>
  );
}
