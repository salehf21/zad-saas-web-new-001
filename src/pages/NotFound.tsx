import { Footer, PageShell } from "../components/layout";
import { Reveal } from "../components/motion";
import { Badge, Button } from "../components/ui";
import { useI18n } from "../i18n";

export function NotFoundPage() {
  const { m } = useI18n();
  return (
    <PageShell>
      <section className="hero simple-hero not-found">
        <Reveal className="hero-copy">
          <Badge>{m.notFound.badge}</Badge>
          <h1>{m.notFound.title}</h1>
          <p>{m.notFound.sub}</p>
          <div className="hero-actions">
            <Button href="/">{m.common.backToHome}</Button>
            <Button href="/contact" tone="white">
              {m.notFound.contactUs}
            </Button>
          </div>
        </Reveal>
      </section>
      <Footer compact />
    </PageShell>
  );
}
