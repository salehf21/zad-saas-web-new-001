import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Globe2 } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { EASE } from "../components/motion";
import { Button, Input, Logo } from "../components/ui";
import { Link, useRouter } from "../router";

export function AuthPage({ mode }: { mode: "login" | "signup" | "forgot" }) {
  const { navigate } = useRouter();
  const [resetSent, setResetSent] = useState(false);
  const isSignup = mode === "signup";
  const isForgot = mode === "forgot";

  // TODO: connect to a real authentication backend when one is available.
  // For now the demo flow continues into the visual onboarding.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isForgot) {
      setResetSent(true);
    } else {
      navigate("/onboarding");
    }
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
              ? "Start your free restaurant workspace."
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
            <CheckCircle2 size={48} />
            <h2>Check your inbox</h2>
            <p>If an account exists for that email, reset instructions are on the way.</p>
          </motion.div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            {isSignup ? <Input label="Full Name" placeholder="Your full name" name="name" required /> : null}
            <Input label="Email address" placeholder="Email address" type="email" name="email" required />
            {!isForgot ? (
              <Input label="Password" placeholder="Password" type="password" name="password" required />
            ) : null}
            {isSignup ? (
              <Input
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                name="confirm"
                required
              />
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
            <Button type="submit" size="lg">
              {isSignup ? "Create Account" : isForgot ? "Send Reset Link" : "Sign In"}
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
