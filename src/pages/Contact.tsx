import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Footer, PageShell } from "../components/layout";
import { EASE, Reveal } from "../components/motion";
import { FinalCta } from "../components/sections";
import { Badge, Button, FormErrorBanner, Input } from "../components/ui";
import { useI18n } from "../i18n";
import { ApiError, bannerMessage, fieldMessage, postJson } from "../lib/api";

type FormState = "idle" | "sending" | "sent";

export function ContactPage() {
  const { m } = useI18n();
  const [state, setState] = useState<FormState>("idle");
  const [apiError, setApiError] = useState<ApiError | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setState("sending");
    setApiError(null);
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
      setApiError(err instanceof ApiError ? err : new ApiError("generic"));
    }
  };

  return (
    <PageShell>
      <section className="contact-page">
        <Reveal className="contact-copy">
          <Badge>{m.contact.badge}</Badge>
          <h1>{m.contact.title}</h1>
          <p>{m.contact.sub}</p>
          <div className="contact-cards">
            <span>
              <Mail size={18} /> hello@zad-os.com
            </span>
            <span>
              <Phone size={18} /> +962 6 000 0000
            </span>
            <span>
              <MapPin size={18} /> {m.contact.location}
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
                <h2>{m.contact.successTitle}</h2>
                <p>{m.contact.successBody}</p>
                <Button onClick={() => setState("idle")} tone="white">
                  {m.contact.sendAnother}
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
                {apiError ? <FormErrorBanner message={bannerMessage(apiError, m)} /> : null}
                <Input
                  label={m.contact.nameLabel}
                  placeholder={m.contact.namePlaceholder}
                  name="name"
                  required
                  error={fieldMessage("name", apiError, m)}
                />
                <Input
                  label={m.contact.restaurantLabel}
                  placeholder={m.contact.restaurantPlaceholder}
                  name="restaurant"
                  required
                  error={fieldMessage("restaurant", apiError, m)}
                />
                <Input
                  label={m.contact.emailLabel}
                  placeholder={m.contact.emailPlaceholder}
                  type="email"
                  name="email"
                  required
                  error={fieldMessage("email", apiError, m)}
                />
                <Input
                  label={m.contact.phoneLabel}
                  placeholder={m.contact.phonePlaceholder}
                  type="tel"
                  name="phone"
                  error={fieldMessage("phone", apiError, m)}
                />
                <label>
                  {m.contact.messageLabel}
                  <textarea placeholder={m.contact.messagePlaceholder} name="message" required />
                  {fieldMessage("message", apiError, m) ? (
                    <small className="input-error">{fieldMessage("message", apiError, m)}</small>
                  ) : null}
                </label>
                <Button type="submit" size="lg" disabled={state === "sending"}>
                  {state === "sending" ? (
                    <>
                      <Loader2 size={18} className="spin" /> {m.common.sending}
                    </>
                  ) : (
                    m.contact.send
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </section>
      <section className="section section-gray pricing-faq">
        <div className="pricing-faq-grid">
          {m.contact.faqs.map((faq) => (
            <article key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCta title={m.contact.ctaTitle} body={m.contact.ctaBody} />
      <Footer compact />
    </PageShell>
  );
}
