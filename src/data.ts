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

export type CardContent = readonly [LucideIcon, string, string];

export const navItems = [
  { label: "Product", href: "/product" },
  { label: "Features", href: "/features" },
  { label: "QR Ordering", href: "/qr-ordering" },
  { label: "Pricing", href: "/pricing" },
  { label: "Impact", href: "/impact" },
  { label: "About", href: "/about" }
];

export const problemCards: readonly CardContent[] = [
  [FileText, "Paper Menus Outdated", "Reprinting costs and long wait times for updates."],
  [Clock3, "Orders Are Slow", "Errors in transcription between table and kitchen."],
  [Users, "Waiters Overloaded", "Staff spending time on data entry instead of service."],
  [Calendar, "Reservations Chaotic", "Lost notebooks and double-bookings ruin experiences."],
  [Database, "Customer Data Lost", "No way to recognize or reward your frequent regulars."],
  [Receipt, "Receipt Waste", "Environmental impact and endless thermal paper rolls."],
  [BarChart3, "No Analytics", "Running your business on gut feeling instead of real data."]
];

export const featureCards: readonly CardContent[] = [
  [QrCode, "QR Menu", "Instantly update dishes and prices without printing."],
  [ShoppingCart, "Table Ordering", "Customers order from their phone directly to the kitchen."],
  [LayoutDashboard, "Order Management", "Consolidate all dine-in and pickup orders in one screen."],
  [Calendar, "Reservations", "Smart booking system that optimizes table turnover."],
  [Monitor, "Table Management", "Live table states for occupancy and service zones."],
  [Users, "Customer CRM", "Track preferences and repeat behavior across multiple visits."],
  [Gift, "Loyalty Engine", "Automated points and rewards to drive retention."],
  [Receipt, "Digital Receipts", "Send receipts via WhatsApp or email instantly."],
  [TrendingUp, "Real-time Analytics", "Know your bestsellers and peak hours instantly."],
  [BookOpen, "Menu Builder", "Drag-and-drop menu creation with multiple categories."],
  [UserCheck, "Staff Permissions", "Role-based access for waiters, kitchen, and admins."],
  [Puzzle, "Mini Games", "Keep customers engaged while they wait for their food."]
];

export const solutionItems = [
  "QR Menu",
  "Table Ordering",
  "Waiter Call",
  "Live Orders",
  "Reservations",
  "Table Management",
  "Customer Profiles",
  "Digital Receipts",
  "Loyalty",
  "Analytics"
];

export const journeySteps: readonly [string, string, string][] = [
  ["01", "Scan QR", "Unique code for every table."],
  ["02", "Choose Language", "Supports Arabic & English."],
  ["03", "Enter Details", "Build your customer database."],
  ["04", "Browse Menu", "High-res photos and descriptions."],
  ["05", "Add to Cart", "Customize with add-ons and notes."],
  ["06", "Confirm Order", "Sends instantly to the kitchen."],
  ["07", "Request Service", "Call waiter or ask for the bill."],
  ["08", "Digital Receipt", "Eco-friendly and easy to save."],
  ["09", "Mini Games", "Wait for food with fun puzzles."]
];

export const testimonials: readonly [string, string, string][] = [
  ["Sarah M.", "Cafe Owner", "ZAD helped us reduce menu friction from day one. Our customers love the speed."],
  ["Khalid A.", "Restaurant Mgr", "Orders are more accurate and staff less stressed. The live dashboard is a game changer."],
  ["Nour T.", "Lounge Owner", "Digital receipts saved hours of paperwork and improved our brand image."]
];

export const faqs: readonly [string, string][] = [
  [
    "Is ZAD truly free?",
    "Yes. The Free Forever plan includes QR menus, table ordering, reservations, and digital receipts with no time limit and no credit card."
  ],
  [
    "Do customers need an app?",
    "No. Customers scan the QR code on their table and the full menu opens in their phone browser. Nothing to download, nothing to install."
  ],
  [
    "How long to set up?",
    "Most restaurants go live in about 10 minutes: create an account, upload your menu, and print the auto-generated QR codes."
  ],
  [
    "Arabic support included?",
    "Yes. ZAD is bilingual by design — customers choose Arabic or English when they scan, and your dashboard supports both."
  ],
  [
    "Table ordering secure?",
    "Every table has a unique code and orders are sent over an encrypted connection straight to your kitchen display."
  ],
  [
    "Replace paper receipts?",
    "Yes. Guests get a digital receipt they can view on their phone, send via WhatsApp, or download as a PDF."
  ],
  [
    "Works for small cafes?",
    "Absolutely. ZAD was designed to be simple enough for a single-counter cafe and powerful enough for multi-branch chains."
  ],
  [
    "Request custom features?",
    "Yes — the Custom System plan covers custom dashboards, branding, integrations, and dedicated development for your workflow."
  ]
];

export const setupSteps: readonly [string, string, string][] = [
  ["01", "Create Account", "Just 30 seconds to join ZAD."],
  ["02", "Upload Menu", "Drag and drop your PDF or CSV."],
  ["03", "Print QR Codes", "Auto-generated for every table."],
  ["04", "Kitchen Display", "Orders arrive on any tablet."],
  ["05", "Go Live", "Start accepting digital orders."]
];

export const pricingFeatures = [
  "QR Digital Menu",
  "Table Ordering",
  "Menu Management",
  "Order Dashboard",
  "Reservations",
  "Table Management",
  "Digital Receipts",
  "Basic Analytics",
  "Customer Profiles",
  "Loyalty Basics"
];

export const customFeatures = [
  "Everything in Free Forever",
  "Custom Dashboard",
  "Custom Branding",
  "Multi-Branch",
  "POS Integrations",
  "Advanced Analytics",
  "Dedicated Support",
  "Custom Development"
];

export const footerColumns: readonly {
  title: string;
  links: readonly { label: string; href: string }[];
}[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "QR Ordering", href: "/qr-ordering" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Impact", href: "/impact" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Get Started",
    links: [
      { label: "Start for Free", href: "/signup" },
      { label: "Login", href: "/login" },
      { label: "Book a Demo", href: "/contact" }
    ]
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" }
    ]
  }
];
