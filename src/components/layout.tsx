import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { footerColumns, navItems } from "../data";
import { Link, useRouter } from "../router";
import { EASE } from "./motion";
import { Button, Logo } from "./ui";

export function Navbar() {
  const { path } = useRouter();
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
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={path === item.href ? "nav-link-active" : ""}
            aria-current={path === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <Button href="/login" tone="ghost" size="sm">
          Login
        </Button>
        <Button href="/signup" size="sm">
          Start for Free
        </Button>
      </div>
      <button
        className="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
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
                  <Link
                    href={item.href}
                    className={path === item.href ? "nav-link-active" : ""}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="mobile-nav-actions">
              <Button href="/login" tone="white" size="lg">
                Login
              </Button>
              <Button href="/signup" size="lg">
                Start for Free
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={`footer ${compact ? "footer-compact" : ""}`}>
      <div className="footer-main">
        <div className="footer-brand">
          <Logo variant="combined" dark />
          <p>
            The complete digital operating system for modern restaurants, cafes, and lounges.
          </p>
        </div>
        <div className="footer-links">
          {footerColumns.map((column) => (
            <div className="footer-col" key={column.title}>
              <strong>{column.title}</strong>
              {column.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ZAD. All rights reserved.</span>
        <span>Built in Amman, Jordan</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
