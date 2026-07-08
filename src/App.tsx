import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import type { ReactElement } from "react";
import { LanguagePopup } from "./components/LanguagePopup";
import { Navbar } from "./components/layout";
import { EASE } from "./components/motion";
import { LocaleProvider } from "./i18n";
import { AboutPage } from "./pages/About";
import { AuthPage } from "./pages/Auth";
import { ContactPage } from "./pages/Contact";
import { FeaturesPage } from "./pages/Features";
import { HomePage } from "./pages/Home";
import { ImpactPage } from "./pages/Impact";
import { NotFoundPage } from "./pages/NotFound";
import { OnboardingPage } from "./pages/Onboarding";
import { PricingPage } from "./pages/Pricing";
import { ProductPage } from "./pages/Product";
import { QrOrderingPage } from "./pages/QrOrdering";
import { RouterProvider, useRouter } from "./router";

const standaloneRoutes: Record<string, ReactElement> = {
  "/login": <AuthPage mode="login" key="login" />,
  "/signup": <AuthPage mode="signup" key="signup" />,
  "/forgot-password": <AuthPage mode="forgot" key="forgot" />,
  "/onboarding": <OnboardingPage />
};

const marketingRoutes: Record<string, ReactElement> = {
  "/": <HomePage />,
  "/product": <ProductPage />,
  "/features": <FeaturesPage />,
  "/qr-ordering": <QrOrderingPage />,
  "/pricing": <PricingPage />,
  "/impact": <ImpactPage />,
  "/about": <AboutPage />,
  "/contact": <ContactPage />
};

function Routes() {
  const { path } = useRouter();

  const standalone = standaloneRoutes[path];
  if (standalone) {
    return standalone;
  }

  const page = marketingRoutes[path] ?? <NotFoundPage />;

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={path}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          {page}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LocaleProvider>
        <RouterProvider>
          <LanguagePopup />
          <Routes />
        </RouterProvider>
      </LocaleProvider>
    </MotionConfig>
  );
}

export default App;
