import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Globe2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { EASE } from "../components/motion";
import { Button, FormErrorBanner, Input, Logo } from "../components/ui";
import { ApiError, postJson } from "../lib/api";
import type { FieldErrors } from "../lib/api";
import { Link, useRouter } from "../router";

export function AuthPage({ mode }: { mode: "login" | "signup" | "forgot" }) {
  const { navigate } = useRouter();
  const [sending, setSending] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
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
    setError(null);
    setFieldErrors({});
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
        if (err instanceof ApiError) {
          setError(err.message);
          setFieldErrors(err.fieldErrors ?? {});
        } else {
          setError("Something went wrong — please try again.");
        }
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
        <span>{isSignup ? "Free Forever" : "Restaurant OS"}</span>
      </section>
      <motion.article
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Logo />
        <div className="auth-title">
          <h1>{isSignup ? "Create your account." : isForgot ? "Reset password." : "Welcome back."}</h1>
          <p>
            {isSignup
              ? "Request your free restaurant workspace — our team activates it right away."
              : isForgot
                ? "We will send reset instructions."
                : "Sign in to your dashboard."}
          </p>
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
            <h2>Check your inbox</h2>
            <p>If an account exists for that email, reset instructions are on the way.</p>
          </motion.div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            {error ? <FormErrorBanner message={error} /> : null}
            {isSignup ? (
              <Input label="Full Name" placeholder="Your full name" name="name" required error={fieldErrors.name} />
            ) : null}
            <Input
              label="Email address"
              placeholder="Email address"
              type="email"
              name="email"
              required
              error={fieldErrors.email}
            />
            {isSignup ? (
              <Input
                label="Restaurant name"
                placeholder="Restaurant or cafe"
                name="restaurant"
                required
                error={fieldErrors.restaurant}
              />
            ) : null}
            {!isSignup && !isForgot ? (
              <Input label="Password" placeholder="Password" type="password" name="password" required />
            ) : null}
            {!isSignup && !isForgot ? (
              <div className="auth-options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link href="/forgot-password">Forgot password?</Link>
              </div>
            ) : null}
            {isSignup ? (
              <label className="terms">
                <input type="checkbox" required /> I agree to Terms and Privacy Policy
              </label>
            ) : null}
            <Button type="submit" size="lg" disabled={sending}>
              {sending ? (
                <>
                  <Loader2 size={18} className="spin" /> Please wait…
                </>
              ) : isSignup ? (
                "Create Account"
              ) : isForgot ? (
                "Send Reset Link"
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        )}
        {!isForgot ? (
          <>
            <div className="divider">
              <span />
              or
              <span />
            </div>
            <Button href="/onboarding" tone="white" size="lg">
              <Globe2 size={20} /> Continue with Google
            </Button>
          </>
        ) : (
          <Link className="back-link" href="/login">
            <ArrowLeft size={16} /> Back to Sign In
          </Link>
        )}
        <p className="auth-footer">
          {isSignup ? "Already have an account? " : "No account? "}
          <Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Sign In" : "Start for Free"}</Link>
        </p>
      </motion.article>
    </main>
  );
}
