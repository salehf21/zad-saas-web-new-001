import { Check, Gamepad2 } from "lucide-react";
import { Footer, PageShell } from "../components/layout";
import { PhoneMockup, ReceiptTransition } from "../components/mockups";
import { Floating, Reveal, Stagger, StaggerItem } from "../components/motion";
import { BenefitList, FinalCta, SplitSection } from "../components/sections";
import { Badge, Button, SectionHeader } from "../components/ui";

const journeyCards: readonly [string, string, string][] = [
  ["1", "Scan QR Code", "Located directly on the table for instant access."],
  ["2", "Choose Language", "Full support for Arabic and English localization."],
  ["3", "Enter Name & Phone", "Quick identity for personalized service."],
  ["4", "Browse the Menu", "Visual, categorized menu with high-res images."],
  ["5", "Add to Cart", "Modify items and add notes for the chef."],
  ["6", "Confirm Order", "Real-time kitchen transmission for faster prep."],
  ["7", "Pay or Request Waiter", "Digital payment or call staff with one tap."],
  ["8", "Digital Receipt", "Instant confirmation that stays on their phone."],
  ["9", "Play Mini Games", "Premium games to keep customers engaged."]
];

export function QrOrderingPage() {
  return (
    <PageShell>
      <section className="qr-hero">
        <Reveal className="qr-hero-copy">
          <Badge>No app required</Badge>
          <h1>A smoother ordering experience, straight from the table</h1>
          <p>
            Customers scan, browse, order, and pay — all from their phone browser. No download. No
            friction.
          </p>
          <div className="hero-actions">
            <Button href="#journey">See How It Works</Button>
            <Button tone="white" href="/product">
              Watch Demo
            </Button>
          </div>
          <div className="hero-proof">
            <span>
              <Check size={14} /> No app
            </span>
            <span>
              <Check size={14} /> Any smartphone
            </span>
            <span>
              <Check size={14} /> Arabic & English
            </span>
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
          <h2>No app download required</h2>
          <p>
            Customers scan once and they are in. The entire experience runs in their browser — on
            any smartphone, in Arabic or English.
          </p>
        </Reveal>
      </section>
      <section className="section section-gray" id="journey">
        <SectionHeader title="The complete journey in 9 steps" />
        <Stagger className="journey-cards">
          {journeyCards.map(([num, title, body]) => (
            <StaggerItem className="journey-card" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <SplitSection
        eyebrow="Waiter Call"
        title="One tap to call your waiter"
        body="Empower your guests to get attention when they need it without searching for staff."
        visual={<PhoneMockup variant="waiter" />}
        bullets={[
          "Reduces shouting and waving across the floor",
          "Notifies staff devices instantly with table number",
          "Improves guest satisfaction in busy hours"
        ]}
        reverse
      />
      <section className="section section-gray receipt-section">
        <SectionHeader eyebrow="Digital Receipt" title="Receipts that never get lost" />
        <div className="receipt-layout">
          <Stagger className="receipt-actions">
            {["View on phone", "Send via WhatsApp", "Download PDF"].map((item) => (
              <StaggerItem key={item}>
                <button type="button">
                  {item}
                  <span>Instant access to current and past orders.</span>
                </button>
              </StaggerItem>
            ))}
          </Stagger>
          <ReceiptTransition />
        </div>
      </section>
      <section className="section">
        <SectionHeader
          title="Stay entertained while your food is prepared"
          body="Built-in mini games — a premium engagement feature that turns waiting into part of the fun."
        />
        <Stagger className="mini-game-grid">
          {[
            ["Makes Waiting Shorter", "Transform dead time into an engaging experience."],
            ["Loyalty Connection", "Reward high scores with loyalty points or dessert."],
            ["Memorable Experience", "Stand out from competition with premium entertainment."]
          ].map(([title, body]) => (
            <StaggerItem className="game-card" key={title}>
              <Gamepad2 size={48} />
              <h3>{title}</h3>
              <p>{body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <section className="benefit-split">
        <div>
          <BenefitList
            title="For Restaurants"
            items={[
              "Lightning fast ordering",
              "Reduced labor costs",
              "Automatic upsells",
              "Visual menu upsells",
              "Detailed analytics"
            ]}
          />
        </div>
        <div>
          <BenefitList
            title="For Customers"
            items={[
              "No app to download",
              "Arabic & English support",
              "Call waiter in one tap",
              "Digital payment options",
              "Built-in mini games"
            ]}
          />
        </div>
      </section>
      <FinalCta
        title="Set up QR ordering for your restaurant today"
        body="Takes less than 10 minutes to go live."
      />
      <Footer compact />
    </PageShell>
  );
}
