import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Footer, PageShell } from "../components/layout";
import { EASE, Reveal } from "../components/motion";
import { FinalCta } from "../components/sections";
import { Badge, Button, Input } from "../components/ui";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: wire to a real backend / email service when one is available.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell>
      <section className="contact-page">
        <Reveal className="contact-copy">
          <Badge>Contact</Badge>
          <h1>Let us help you set up your restaurant</h1>
          <p>
            Tell us what you need and the ZAD team will help you launch your digital restaurant
            workflow.
          </p>
          <div className="contact-cards">
            <span>
              <Mail size={18} /> hello@zad-os.com
            </span>
            <span>
              <Phone size={18} /> +962 6 000 0000
            </span>
            <span>
              <MapPin size={18} /> Amman, Jordan
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1} y={32}>
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                className="contact-form form-success"
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <CheckCircle2 size={48} />
                <h2>Message sent</h2>
                <p>Thanks for reaching out — the ZAD team will get back to you within one business day.</p>
                <Button onClick={() => setSubmitted(false)} tone="white">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                className="contact-form"
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <Input label="Full name" placeholder="Your name" name="name" required />
                <Input label="Restaurant name" placeholder="Restaurant or cafe" name="restaurant" required />
                <Input label="Email address" placeholder="you@example.com" type="email" name="email" required />
                <label>
                  Message
                  <textarea placeholder="Tell us about your restaurant" name="message" required />
                </label>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </section>
      <section className="section section-gray pricing-faq">
        <div className="pricing-faq-grid">
          {[
            ["How fast can we start?", "You can register your account and build your digital menu in under 10 minutes."],
            ["Is there a setup fee?", "Absolutely none. Getting started with ZAD Restaurant OS is completely free."]
          ].map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCta
        title="Start free or talk to our team"
        body="Transform your physical restaurant into a fully automated digital enterprise starting today."
      />
      <Footer compact />
    </PageShell>
  );
}
