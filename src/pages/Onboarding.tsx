import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { EASE } from "../components/motion";
import { Button, Logo } from "../components/ui";
import { setupSteps } from "../data";

export function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const done = current >= setupSteps.length - 1;

  return (
    <main className="onboarding-page">
      <aside className="onboarding-side">
        <Logo dark />
        <h1>Set up your restaurant</h1>
        <p>Five short steps to go from account to live QR ordering.</p>
        <div className="progress-dots" role="progressbar" aria-valuemin={1} aria-valuemax={5} aria-valuenow={current + 1}>
          {setupSteps.map(([num], index) => (
            <motion.span
              className={index <= current ? "active" : ""}
              key={num}
              animate={{ width: index === current ? 34 : 10 }}
              transition={{ duration: 0.3, ease: EASE }}
            />
          ))}
        </div>
      </aside>
      <motion.section
        className="onboarding-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="setup-list">
          {setupSteps.map(([num, title, body], index) => (
            <motion.article
              key={num}
              className={index === current ? "setup-active" : index < current ? "setup-done" : ""}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: index <= current ? 1 : 0.45, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: EASE }}
            >
              <span>{index < current ? <Check size={18} /> : num}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <Button href="/" size="lg">
                You're live — back to ZAD
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="continue"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <Button onClick={() => setCurrent((step) => step + 1)} size="lg">
                Continue Setup
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}
