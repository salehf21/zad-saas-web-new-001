import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { EASE } from "../components/motion";
import { Button, FormErrorBanner, Logo } from "../components/ui";
import { useI18n } from "../i18n";
import { ApiError, bannerMessage, postJson } from "../lib/api";

type MenuSize = "small" | "medium" | "large";

interface Answers {
  restaurantName: string;
  menuSize: MenuSize | null;
  tableCount: string;
  hasKitchenDisplay: boolean | null;
}

export function OnboardingPage() {
  const { m } = useI18n();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    restaurantName: "",
    menuSize: null,
    tableCount: "10",
    hasKitchenDisplay: null
  });
  const [sending, setSending] = useState(false);
  const [finished, setFinished] = useState(false);
  const [apiError, setApiError] = useState<ApiError | null>(null);

  const menuSizes: readonly [MenuSize, string][] = [
    ["small", m.onboarding.menuSmall],
    ["medium", m.onboarding.menuMedium],
    ["large", m.onboarding.menuLarge]
  ];
  const menuWord: Record<MenuSize, string> = {
    small: m.onboarding.menuWordSmall,
    medium: m.onboarding.menuWordMedium,
    large: m.onboarding.menuWordLarge
  };

  const lastStep = m.setup.steps.length - 1;
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
    setApiError(null);
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
      setApiError(err instanceof ApiError ? err : new ApiError("generic"));
    } finally {
      setSending(false);
    }
  };

  const stepInput = (index: number) => {
    switch (index) {
      case 0:
        return (
          <label className="input-field">
            {m.onboarding.q1Label}
            <span>
              <input
                type="text"
                placeholder={m.onboarding.q1Placeholder}
                value={answers.restaurantName}
                onChange={(event) => setAnswers({ ...answers, restaurantName: event.target.value })}
              />
            </span>
          </label>
        );
      case 1:
        return (
          <div className="chip-row" role="radiogroup" aria-label={m.onboarding.menuSizeAria}>
            {menuSizes.map(([value, label]) => (
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
            {m.onboarding.q3Label}
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
          <div className="chip-row" role="radiogroup" aria-label={m.onboarding.kitchenAria}>
            {[
              [true, m.onboarding.kitchenYes],
              [false, m.onboarding.kitchenNo]
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
              <strong>{answers.restaurantName.trim()}</strong> ·{" "}
              {answers.menuSize ? menuWord[answers.menuSize] : ""} · {answers.tableCount}{" "}
              {m.onboarding.tablesWord} · {m.onboarding.kitchenLabel}:{" "}
              {answers.hasKitchenDisplay ? m.onboarding.yes : m.onboarding.notYet}
            </span>
          </div>
        );
    }
  };

  return (
    <main className="onboarding-page">
      <aside className="onboarding-side">
        <Logo dark />
        <h1>{m.onboarding.sideTitle}</h1>
        <p>{m.onboarding.sideSub}</p>
        <div
          className="progress-dots"
          role="progressbar"
          aria-label={m.onboarding.progressLabel}
          aria-valuemin={1}
          aria-valuemax={5}
          aria-valuenow={current + 1}
        >
          {m.setup.steps.map((step, index) => (
            <motion.span
              className={index <= current ? "active" : ""}
              key={step.title}
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
            <h2>{m.onboarding.doneTitle}</h2>
            <p>
              {m.onboarding.doneBodyBefore}
              <strong>{answers.restaurantName.trim()}</strong>
              {m.onboarding.doneBodyAfter}
            </p>
            <Button href="/" size="lg">
              {m.onboarding.backToZad}
            </Button>
          </motion.div>
        ) : (
          <>
            <div className="setup-list">
              {m.setup.steps.map((step, index) => (
                <motion.article
                  key={step.title}
                  className={index === current ? "setup-active" : index < current ? "setup-done" : ""}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: index <= current ? 1 : 0.45, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: EASE }}
                >
                  <span>{index < current ? <Check size={18} /> : String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
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
            {apiError ? <FormErrorBanner message={bannerMessage(apiError, m)} /> : null}
            <div className="onboarding-actions">
              {current > 0 ? (
                <Button tone="white" size="lg" onClick={() => setCurrent((step) => step - 1)}>
                  {m.common.back}
                </Button>
              ) : null}
              {current < lastStep ? (
                <Button size="lg" disabled={!stepValid} onClick={() => setCurrent((step) => step + 1)}>
                  {m.onboarding.continueSetup}
                </Button>
              ) : (
                <Button size="lg" disabled={sending} onClick={finish}>
                  {sending ? (
                    <>
                      <Loader2 size={18} className="spin" /> {m.common.saving}
                    </>
                  ) : (
                    m.onboarding.finishSetup
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
