import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { useRouter } from "../router";
import { Reveal } from "./motion";

export type Tone = "red" | "dark" | "white" | "outline" | "ghost";
export type LogoVariant = "english" | "arabic" | "combined";

export function Logo({
  variant = "combined",
  dark = false,
  compact = false
}: {
  variant?: LogoVariant;
  dark?: boolean;
  compact?: boolean;
}) {
  const { navigate } = useRouter();
  return (
    <a
      className={`logo ${compact ? "logo-compact" : ""}`}
      href="/"
      aria-label="ZAD home"
      onClick={(event) => {
        event.preventDefault();
        navigate("/");
      }}
    >
      <span className="logo-mark">Z</span>
      <span className={`logo-text ${dark ? "logo-text-dark" : ""}`}>
        {variant === "arabic" ? (
          <span className="logo-arabic" lang="ar">زاد</span>
        ) : variant === "combined" ? (
          <>
            ZAD
            <span className="logo-divider" aria-hidden="true">|</span>
            <span className="logo-arabic" lang="ar">زاد</span>
          </>
        ) : (
          "ZAD"
        )}
      </span>
    </a>
  );
}

export function Button({
  children,
  href,
  tone = "red",
  size = "md",
  type = "button",
  onClick,
  disabled = false
}: {
  children: ReactNode;
  href?: string;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const { navigate } = useRouter();
  const className = `btn btn-${tone} btn-${size}`;
  const interactions = {
    whileHover: disabled ? undefined : { y: -2 },
    whileTap: disabled ? undefined : { scale: 0.96 },
    transition: { type: "spring" as const, stiffness: 420, damping: 22 }
  };

  if (href !== undefined) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.();
      if (
        href.startsWith("/") &&
        event.button === 0 &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        !event.altKey
      ) {
        event.preventDefault();
        navigate(href);
      }
    };
    return (
      <motion.a className={className} href={href} onClick={handleClick} {...interactions}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...interactions}
    >
      {children}
    </motion.button>
  );
}

export function Badge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`badge ${dark ? "badge-dark" : ""}`}>{children}</span>;
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "center",
  dark = false
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <Reveal className={`section-header section-header-${align} ${dark ? "section-header-dark" : ""}`}>
      {eyebrow ? <Badge dark={dark}>{eyebrow}</Badge> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </Reveal>
  );
}

export function Input({
  label,
  placeholder,
  type = "text",
  name,
  required = false,
  error
}: {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  required?: boolean;
  error?: string;
}) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword && visible ? "text" : type;

  return (
    <label className={`input-field ${error ? "input-field-error" : ""}`}>
      {label}
      <span>
        <input
          type={resolvedType}
          placeholder={placeholder}
          name={name}
          required={required}
          aria-invalid={error ? true : undefined}
        />
        {isPassword ? (
          <button
            type="button"
            className="input-toggle"
            aria-label={visible ? "Hide password" : "Show password"}
            onClick={() => setVisible((current) => !current)}
          >
            {visible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        ) : null}
      </span>
      {error ? <small className="input-error">{error}</small> : null}
    </label>
  );
}

export function FormErrorBanner({ message }: { message: string }) {
  return (
    <motion.p
      className="form-error"
      role="alert"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {message}
    </motion.p>
  );
}
