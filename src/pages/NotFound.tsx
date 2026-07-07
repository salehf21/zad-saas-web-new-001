import { Footer, PageShell } from "../components/layout";
import { Reveal } from "../components/motion";
import { Badge, Button } from "../components/ui";

export function NotFoundPage() {
  return (
    <PageShell>
      <section className="hero simple-hero not-found">
        <Reveal className="hero-copy">
          <Badge>404</Badge>
          <h1>This page is off the menu</h1>
          <p>The page you're looking for doesn't exist or has moved.</p>
          <div className="hero-actions">
            <Button href="/">Back to Home</Button>
            <Button href="/contact" tone="white">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </section>
      <Footer compact />
    </PageShell>
  );
}
