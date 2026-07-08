import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { LOCALES, useI18n } from "../i18n";
import { EASE } from "./motion";
import { Logo } from "./ui";

export function LanguagePopup() {
  const { m, locale, needsLanguageChoice, setLocale, confirmCurrentLocale } = useI18n();

  return (
    <AnimatePresence>
      {needsLanguageChoice ? (
        <motion.div
          className="lang-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={confirmCurrentLocale}
        >
          <motion.div
            className="lang-modal"
            role="dialog"
            aria-modal="true"
            aria-label={m.langPopup.title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lang-close"
              aria-label={m.langPopup.continueLabel}
              onClick={confirmCurrentLocale}
            >
              <X size={18} />
            </button>
            <Logo />
            <h2>{m.langPopup.title}</h2>
            <p>{m.langPopup.sub}</p>
            <motion.div
              className="lang-grid"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } }
              }}
            >
              {LOCALES.map((entry) => {
                const suggested = entry.code === locale;
                return (
                  <motion.button
                    type="button"
                    key={entry.code}
                    lang={entry.code}
                    className={`lang-option ${suggested ? "lang-option-suggested" : ""}`}
                    onClick={() => setLocale(entry.code)}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } }
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="lang-native">{entry.nativeName}</span>
                    <span className="lang-english">{entry.englishName}</span>
                    {suggested ? (
                      <span className="lang-suggested">
                        <Check size={12} /> {m.langPopup.suggested}
                      </span>
                    ) : null}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
