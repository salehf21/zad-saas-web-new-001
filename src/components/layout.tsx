import { AnimatePresence, motion } from "framer-motion";
import { Globe2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { footerColumns, navItems, socialLinks } from "../data";
import { LOCALES, useI18n } from "../i18n";
import { Link, useRouter } from "../router";
import { EASE } from "./motion";
import { Button, Logo } from "./ui";

export function Navbar() {
  const { path } = useRouter();
  const { m } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <Logo />
      <nav className="nav-links" aria-label={m.nav.primaryNav}>
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={path === item.href ? "nav-link-active" : ""}
            aria-current={path === item.href ? "page" : undefined}
          >
            {m.nav[item.key]}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <Button href="/login" tone="ghost" size="sm">
          {m.common.login}
        </Button>
        <Button href="/signup" size="sm">
          {m.common.startForFree}
        </Button>
      </div>
      <button
        className="mobile-menu"
        aria-label={menuOpen ? m.nav.closeMenu : m.nav.openMenu}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            className="mobile-nav"
            aria-label={m.nav.mobileNav}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: EASE }}
          >
            <motion.div
              className="mobile-nav-links"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } }
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } }
                  }}
                >
                  <Link href={item.href} className={path === item.href ? "nav-link-active" : ""}>
                    {m.nav[item.key]}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="mobile-nav-actions">
              <Button href="/login" tone="white" size="lg">
                {m.common.login}
              </Button>
              <Button href="/signup" size="lg">
                {m.common.startForFree}
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function LanguageSwitcher() {
  const { m, locale, setLocale } = useI18n();
  return (
    <div className="footer-lang" role="group" aria-label={m.footer.language}>
      <span className="footer-lang-label">
        <Globe2 size={16} /> {m.footer.language}
      </span>
      <div className="footer-lang-options">
        {LOCALES.map((entry) => (
          <button
            type="button"
            key={entry.code}
            lang={entry.code}
            className={`footer-lang-pill ${entry.code === locale ? "footer-lang-active" : ""}`}
            aria-pressed={entry.code === locale}
            onClick={() => setLocale(entry.code)}
          >
            {entry.nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Footer({ compact = false }: { compact?: boolean }) {
  const { m } = useI18n();
  return (
    <footer className={`footer ${compact ? "footer-compact" : ""}`}>
      <div className="footer-main">
        <div className="footer-brand">
          <Logo variant="combined" dark />
          <p>{m.footer.blurb}</p>
        </div>
        <div className="footer-links">
          {footerColumns.map((column) => (
            <div className="footer-col" key={column.titleKey}>
              <strong>{m.footer[column.titleKey]}</strong>
              {column.links.map((link) => (
                <Link href={link.href} key={link.labelKey}>
                  {m.footer[link.labelKey]}
                </Link>
              ))}
            </div>
          ))}
          <div className="footer-col">
            <strong>{m.footer.colSocial}</strong>
            {socialLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <LanguageSwitcher />
      <div className="footer-bottom">
        <span>{m.footer.copyright}</span>
        <span>{m.footer.builtIn}</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
