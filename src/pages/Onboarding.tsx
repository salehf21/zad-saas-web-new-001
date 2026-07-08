import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { EASE } from "../components/motion";
import { Button, FormErrorBanner, Logo } from "../components/ui";
import { setupSteps } from "../data";
import { ApiError, postJson } from "../lib/api";

type MenuSize = "small" | "medium" | "large";

interface Answers {
  restaurantName: string;
  menuSize: MenuSize | null;
  tableCount: string;
  hasKitchenDisplay: boolean | null;
}

const MENU_SIZES: readonly [MenuSize, string][] = [
  ["small", "Small · under 20 items"],
  ["medium", "Medium · 20–60 items"],
  ["large", "Large · 60+ items"]
];

export function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    restaurantName: "",
    menuSize: null,
    tableCount: "10",
    hasKitchenDisplay: null
  });
  const [sending, setSending] = useState(false);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lastStep = setupSteps.length - 1;
  const tableCount = Number(answers.tableCount);

  const stepValid = [
    answers.restaurantName.trim().length > 0,
    answers.menuSize !== null,
    Number.isInteger(tableCount) && tableCount >= 1 && tableCount <= 500,
    answers.hasKitchenDisplay !== null,
    true
  ][current];

  const finish = async () => {
    setSending(true);
    setError(null);
    try {
      await postJson("/api/onboarding", {
        email: window.sessionStorage.getItem("zad-signup-email") || undefined,
        restaurantName: answers.restaurantName.trim(),
        menuSize: answers.menuSize,
        tableCount,
        hasKitchenDisplay: answers.hasKitchenDisplay
      });
      setFinished(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong — please try again.");
    } finally {
      setSending(false);
    }
  };

  const stepInput = (index: number) => {
    switch (index) {
      case 0:
        return (
          <label className="input-field">
            What's your restaurant called?
            <span>
              <input
                type="text"
                placeholder="e.g. The Burger House"
                value={answers.restaurantName}
                onChange={(event) => setAnswers({ ...answers, restaurantName: event.target.value })}
              />
            </span>
          </label>
        );
      case 1:
        return (
          <div className="chip-row" role="radiogroup" aria-label="Menu size">
            {MENU_SIZES.map(([value, label]) => (
              <button
                type="button"
                role="radio"
                aria-checked={answers.menuSize === value}
                className={`chip ${answers.menuSize === value ? "chip-active" : ""}`}
                key={value}
                onClick={() => setAnswers({ ...answers, menuSize: value })}
              >
                {label}
              </button>
            ))}
          </div>
        );
      case 2:
        return (
          <label className="input-field">
            How many tables do you have?
            <span>
              <input
                type="number"
                min={1}
                max={500}
                value={answers.tableCount}
                onChange={(event) => setAnswers({ ...answers, tableCount: event.target.value })}
              />
            </span>
          </label>
        );
      case 3:
        return (
          <div className="chip-row" role="radiogroup" aria-label="Kitchen display availability">
            {[
              [true, "Yes, we have a tablet"],
              [false, "Not yet"]
            ].map(([value, label]) => (
              <button
                type="button"
                role="radio"
                aria-checked={answers.hasKitchenDisplay === value}
                className={`chip ${answers.hasKitchenDisplay === value ? "chip-active" : ""}`}
                key={String(value)}
                onClick={() => setAnswers({ ...answers, hasKitchenDisplay: value as boolean })}
              >
                {label as string}
              </button>
            ))}
          </div>
        );
      default:
        return (
          <div className="onboarding-summary">
            <span>
              <strong>{answers.restaurantName.trim()}</strong> · {answers.menuSize} menu ·{" "}
              {answers.tableCount} tables · kitchen display: {answers.hasKitchenDisplay ? "yes" : "not yet"}
            </span>
          </div>
        );
    }
  };

  return (
    <main className="onboarding-page">
      <aside className="onboarding-side">
        <Logo dark />
        <h1>Set up your restaurant</h1>
        <p>Five short steps to go from account to live QR ordering.</p>
        <div
          className="progress-dots"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={5}
          aria-valuenow={current + 1}
        >
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
        {finished ? (
          <motion.div
            className="form-success"
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
            <h2>You're all set</h2>
            <p>
              We saved your setup for <strong>{answers.restaurantName.trim()}</strong>. Our team will
              reach out to get you live.
            </p>
            <Button href="/" size="lg">
              Back to ZAD
            </Button>
          </motion.div>
        ) : (
          <>
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
                    <AnimatePresence initial={false}>
                      {index === current ? (
                        <motion.div
                          className="step-input"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                        >
                          {stepInput(index)}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.article>
              ))}
            </div>
            {error ? <FormErrorBanner message={error} /> : null}
            <div className="onboarding-actions">
              {current > 0 ? (
                <Button tone="white" size="lg" onClick={() => setCurrent((step) => step - 1)}>
                  Back
                </Button>
              ) : null}
              {current < lastStep ? (
                <Button size="lg" disabled={!stepValid} onClick={() => setCurrent((step) => step + 1)}>
                  Continue Setup
                </Button>
              ) : (
                <Button size="lg" disabled={sending} onClick={finish}>
                  {sending ? (
                    <>
                      <Loader2 size={18} className="spin" /> Saving…
                    </>
                  ) : (
                    "Finish Setup"
                  )}
                </Button>
              )}
            </div>
          </>
        )}
      </motion.section>
    </main>
  );
}
