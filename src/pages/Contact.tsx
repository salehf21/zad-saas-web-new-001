import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Footer, PageShell } from "../components/layout";
import { EASE, Reveal } from "../components/motion";
import { FinalCta } from "../components/sections";
import { Badge, Button, FormErrorBanner, Input } from "../components/ui";
import { ApiError, postJson } from "../lib/api";
import type { FieldErrors } from "../lib/api";

type FormState = "idle" | "sending" | "sent";

export function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("sending");
    setError(null);
    setFieldErrors({});
    try {
      await postJson("/api/contact", {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        restaurant: data.get("restaurant"),
        message: data.get("message")
      });
      setState("sent");
    } catch (err) {
      setState("idle");
      if (err instanceof ApiError) {
        setError(err.message);
        setFieldErrors(err.fieldErrors ?? {});
      } else {
        setError("Something went wrong — please try again.");
      }
    }
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
            {state === "sent" ? (
              <motion.div
                className="contact-form form-success"
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <motion.span
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.1 }}
                >
                  <CheckCircle2 size={48} />
                </motion.span>
                <h2>Message sent</h2>
                <p>Thanks — our team will contact you soon.</p>
                <Button onClick={() => setState("idle")} tone="white">
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
                {error ? <FormErrorBanner message={error} /> : null}
                <Input label="Full name" placeholder="Your name" name="name" required error={fieldErrors.name} />
                <Input
                  label="Restaurant name"
                  placeholder="Restaurant or cafe"
                  name="restaurant"
                  required
                  error={fieldErrors.restaurant}
                />
                <Input
                  label="Email address"
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                  required
                  error={fieldErrors.email}
                />
                <Input
                  label="Phone (optional)"
                  placeholder="+962 7 0000 0000"
                  type="tel"
                  name="phone"
                  error={fieldErrors.phone}
                />
                <label>
                  Message
                  <textarea placeholder="Tell us about your restaurant" name="message" required />
                  {fieldErrors.message ? <small className="input-error">{fieldErrors.message}</small> : null}
                </label>
                <Button type="submit" size="lg" disabled={state === "sending"}>
                  {state === "sending" ? (
                    <>
                      <Loader2 size={18} className="spin" /> Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
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
