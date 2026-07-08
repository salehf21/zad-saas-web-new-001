import {
  BarChart3,
  BookOpen,
  Calendar,
  Clock3,
  Database,
  FileText,
  Gift,
  LayoutDashboard,
  Monitor,
  Puzzle,
  QrCode,
  Receipt,
  ShoppingCart,
  TrendingUp,
  UserCheck,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Messages } from "./i18n/locales/en";

// Copy lives in src/i18n/locales/*; this module only holds icons and routes,
// zipped with the translated arrays by index.

export const navItems: readonly { key: keyof Messages["nav"]; href: string }[] = [
  { key: "product", href: "/product" },
  { key: "features", href: "/features" },
  { key: "qrOrdering", href: "/qr-ordering" },
  { key: "pricing", href: "/pricing" },
  { key: "impact", href: "/impact" },
  { key: "about", href: "/about" }
];

export const problemIcons: readonly LucideIcon[] = [
  FileText,
  Clock3,
  Users,
  Calendar,
  Database,
  Receipt,
  BarChart3
];

export const featureIcons: readonly LucideIcon[] = [
  QrCode,
  ShoppingCart,
  LayoutDashboard,
  Calendar,
  Monitor,
  Users,
  Gift,
  Receipt,
  TrendingUp,
  BookOpen,
  UserCheck,
  Puzzle
];

export const footerColumns: readonly {
  titleKey: keyof Messages["footer"];
  links: readonly { labelKey: keyof Messages["footer"]; href: string }[];
}[] = [
  {
    titleKey: "colProduct",
    links: [
      { labelKey: "linkFeatures", href: "/features" },
      { labelKey: "linkQrOrdering", href: "/qr-ordering" },
      { labelKey: "linkPricing", href: "/pricing" }
    ]
  },
  {
    titleKey: "colCompany",
    links: [
      { labelKey: "linkAbout", href: "/about" },
      { labelKey: "linkImpact", href: "/impact" },
      { labelKey: "linkContact", href: "/contact" }
    ]
  },
  {
    titleKey: "colGetStarted",
    links: [
      { labelKey: "linkStartForFree", href: "/signup" },
      { labelKey: "linkLogin", href: "/login" },
      { labelKey: "linkBookDemo", href: "/contact" }
    ]
  }
];

// Brand names stay untranslated.
export const socialLinks: readonly { label: string; href: string }[] = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" }
];
