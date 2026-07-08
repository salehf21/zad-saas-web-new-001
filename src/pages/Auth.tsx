import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Globe2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { EASE } from "../components/motion";
import { Button, FormErrorBanner, Input, Logo } from "../components/ui";
import { useI18n } from "../i18n";
import { ApiError, bannerMessage, fieldMessage, postJson } from "../lib/api";
import { Link, useRouter } from "../router";

export function AuthPage({ mode }: { mode: "login" | "signup" | "forgot" }) {
  const { navigate } = useRouter();
  const { m } = useI18n();
  const [sending, setSending] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [apiError, setApiError] = useState<ApiError | null>(null);
  const timer = useRef<number>();
  const isSignup = mode === "signup";
  const isForgot = mode === "forgot";

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Signup stores a real account request via the API, then continues into
  // onboarding. Login and password reset stay frontend-only demos — there is
  // no authentication system yet.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setApiError(null);
    setSending(true);

    if (isSignup) {
      try {
        const email = String(data.get("email") ?? "");
        await postJson("/api/signup", {
          name: data.get("name"),
          email,
          restaurant: data.get("restaurant")
        });
        window.sessionStorage.setItem("zad-signup-email", email);
        navigate("/onboarding");
      } catch (err) {
        setSending(false);
        setApiError(err instanceof ApiError ? err : new ApiError("generic"));
      }
      return;
    }

    timer.current = window.setTimeout(() => {
      if (isForgot) {
        setSending(false);
        setResetSent(true);
      } else {
        navigate("/onboarding");
      }
    }, 900);
  };

  return (
    <main className="auth-page">
      <section className="auth-mobile-brand">
        <Logo />
        <span>{isSignup ? m.auth.brandFree : m.auth.brandOs}</span>
      </section>
      <motion.article
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Logo />
        <div className="auth-title">
          <h1>{isSignup ? m.auth.signupTitle : isForgot ? m.auth.forgotTitle : m.auth.loginTitle}</h1>
          <p>{isSignup ? m.auth.signupSub : isForgot ? m.auth.forgotSub : m.auth.loginSub}</p>
        </div>
        {isForgot && resetSent ? (
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
            <h2>{m.auth.resetSentTitle}</h2>
            <p>{m.auth.resetSentBody}</p>
          </motion.div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            {apiError ? <FormErrorBanner message={bannerMessage(apiError, m)} /> : null}
            {isSignup ? (
              <Input
                label={m.auth.fullNameLabel}
                placeholder={m.auth.fullNamePlaceholder}
                name="name"
                required
                error={fieldMessage("name", apiError, m)}
              />
            ) : null}
            <Input
              label={m.auth.emailLabel}
              placeholder={m.auth.emailPlaceholder}
              type="email"
              name="email"
              required
              error={fieldMessage("email", apiError, m)}
            />
            {isSignup ? (
              <Input
                label={m.auth.restaurantLabel}
                placeholder={m.auth.restaurantPlaceholder}
                name="restaurant"
                required
                error={fieldMessage("restaurant", apiError, m)}
              />
            ) : null}
            {!isSignup && !isForgot ? (
              <Input
                label={m.auth.passwordLabel}
                placeholder={m.auth.passwordPlaceholder}
                type="password"
                name="password"
                required
              />
            ) : null}
            {!isSignup && !isForgot ? (
              <div className="auth-options">
                <label>
                  <input type="checkbox" /> {m.auth.rememberMe}
                </label>
                <Link href="/forgot-password">{m.auth.forgotPassword}</Link>
              </div>
            ) : null}
            {isSignup ? (
              <label className="terms">
                <input type="checkbox" required /> {m.auth.terms}
              </label>
            ) : null}
            <Button type="submit" size="lg" disabled={sending}>
              {sending ? (
                <>
                  <Loader2 size={18} className="spin" /> {m.common.pleaseWait}
                </>
              ) : isSignup ? (
                m.auth.createAccount
              ) : isForgot ? (
                m.auth.sendResetLink
              ) : (
                m.auth.signIn
              )}
            </Button>
          </form>
        )}
        {!isForgot ? (
          <>
            <div className="divider">
              <span />
              {m.auth.or}
              <span />
            </div>
            <Button href="/onboarding" tone="white" size="lg">
              <Globe2 size={20} /> {m.auth.google}
            </Button>
          </>
        ) : (
          <Link className="back-link" href="/login">
            <ArrowLeft size={16} /> {m.auth.backToSignIn}
          </Link>
        )}
        <p className="auth-footer">
          {isSignup ? m.auth.haveAccount : m.auth.noAccount}
          <Link href={isSignup ? "/login" : "/signup"}>
            {isSignup ? m.auth.signIn : m.common.startForFree}
          </Link>
        </p>
      </motion.article>
    </main>
  );
}
