import {
  ArrowLeft,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  ChefHat,
  ClipboardList,
  Clock3,
  CreditCard,
  Database,
  Download,
  Eye,
  FileText,
  Gamepad2,
  Gift,
  Globe2,
  Layout,
  LayoutDashboard,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Phone,
  Puzzle,
  QrCode,
  Receipt,
  Search,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Utensils,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactElement, ReactNode } from "react";

type Tone = "red" | "dark" | "white" | "outline" | "ghost";
type LogoVariant = "english" | "arabic" | "combined";

const navItems = [
  { label: "Product", href: "/product" },
  { label: "Features", href: "/features" },
  { label: "QR Ordering", href: "/qr-ordering" },
  { label: "Pricing", href: "/pricing" },
  { label: "Impact", href: "/impact" },
  { label: "About", href: "/about" }
];

const problemCards = [
  [FileText, "Paper Menus Outdated", "Reprinting costs and long wait times for updates."],
  [Clock3, "Orders Are Slow", "Errors in transcription between table and kitchen."],
  [Users, "Waiters Overloaded", "Staff spending time on data entry instead of service."],
  [Calendar, "Reservations Chaotic", "Lost notebooks and double-bookings ruin experiences."],
  [Database, "Customer Data Lost", "No way to recognize or reward your frequent regulars."],
  [Receipt, "Receipt Waste", "Environmental impact and endless thermal paper rolls."],
  [BarChart3, "No Analytics", "Running your business on gut feeling instead of real data."]
] as const;

const featureCards = [
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
] as const;

const solutionItems = [
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

const journeySteps = [
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

const testimonials = [
  ["Sarah M.", "Cafe Owner", "ZAD helped us reduce menu friction from day one. Our customers love the speed."],
  ["Khalid A.", "Restaurant Mgr", "Orders are more accurate and staff less stressed. The live dashboard is a game changer."],
  ["Nour T.", "Lounge Owner", "Digital receipts saved hours of paperwork and improved our brand image."]
];

const faqs = [
  "Is ZAD truly free?",
  "Do customers need an app?",
  "How long to set up?",
  "Arabic support included?",
  "Table ordering secure?",
  "Replace paper receipts?",
  "Works for small cafes?",
  "Request custom features?"
];

const setupSteps = [
  ["01", "Create Account", "Just 30 seconds to join ZAD."],
  ["02", "Upload Menu", "Drag and drop your PDF or CSV."],
  ["03", "Print QR Codes", "Auto-generated for every table."],
  ["04", "Kitchen Display", "Orders arrive on any tablet."],
  ["05", "Go Live", "Start accepting digital orders."]
];

const pricingFeatures = [
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

const customFeatures = [
  "Everything in Free Forever",
  "Custom Dashboard",
  "Custom Branding",
  "Multi-Branch",
  "POS Integrations",
  "Advanced Analytics",
  "Dedicated Support",
  "Custom Development"
];

function App() {
  const path = window.location.pathname;

  if (path === "/login") return <AuthPage mode="login" />;
  if (path === "/signup") return <AuthPage mode="signup" />;
  if (path === "/forgot-password") return <AuthPage mode="forgot" />;
  if (path === "/onboarding") return <OnboardingPage />;

  const routes: Record<string, ReactElement> = {
    "/": <HomePage />,
    "/product": <ProductPage />,
    "/features": <FeaturesPage />,
    "/qr-ordering": <QrOrderingPage />,
    "/pricing": <PricingPage />,
    "/impact": <ImpactPage />,
    "/about": <AboutPage />,
    "/contact": <ContactPage />
  };

  return routes[path] ?? <HomePage />;
}

function Logo({ variant = "english", dark = false, compact = false }: { variant?: LogoVariant; dark?: boolean; compact?: boolean }) {
  const text =
    variant === "arabic" ? "زاد" : variant === "combined" ? "ZAD | زاد" : "ZAD";

  return (
    <a className={`logo ${compact ? "logo-compact" : ""}`} href="/" aria-label="ZAD home">
      <span className="logo-mark">Z</span>
      <span className={`logo-text ${dark ? "logo-text-dark" : ""}`}>{text}</span>
    </a>
  );
}

function Button({
  children,
  href = "#",
  tone = "red",
  size = "md"
}: {
  children: ReactNode;
  href?: string;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <a className={`btn btn-${tone} btn-${size}`} href={href}>
      {children}
    </a>
  );
}

function Badge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`badge ${dark ? "badge-dark" : ""}`}>{children}</span>;
}

function SectionHeader({
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
    <div className={`section-header section-header-${align} ${dark ? "section-header-dark" : ""}`}>
      {eyebrow ? <Badge dark={dark}>{eyebrow}</Badge> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <Logo />
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
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
      <button className="mobile-menu" aria-label="Open menu">
        <Menu size={22} />
      </button>
    </header>
  );
}

function Footer({ compact = false }: { compact?: boolean }) {
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
          <FooterColumn title="Product" links={["Features", "Pricing", "Integrations"]} />
          <FooterColumn title="Company" links={["About", "Impact", "Careers"]} />
          <FooterColumn title="Legal" links={["Privacy", "Terms", "Security"]} />
          <FooterColumn title="Social" links={["Twitter", "Instagram", "LinkedIn"]} />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ZAD. All rights reserved.</span>
        <span>Built in Amman, Jordan</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="footer-col">
      <strong>{title}</strong>
      {links.map((link) => (
        <a href="#" key={link}>
          {link}
        </a>
      ))}
    </div>
  );
}

function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

function HomePage() {
  return (
    <PageShell>
      <section className="hero home-hero">
        <div className="hero-copy">
          <Badge>Restaurant Operating System</Badge>
          <h1 className="desktop-title">Run your restaurant from one digital operating system</h1>
          <h1 className="mobile-title">The Restaurant Operating System</h1>
          <p className="desktop-title">QR ordering, menus, reservations, tables, loyalty, and analytics — all in one place.</p>
          <p className="mobile-title">QR ordering, tables, loyalty, and receipts — all in ZAD.</p>
          <div className="hero-actions">
            <Button href="/signup" size="lg">
              Start for Free
            </Button>
            <Button href="/product" tone="white" size="lg">
              View Dashboard
            </Button>
          </div>
          <p className="mobile-setup-line">Download. Set up. Start.</p>
          <div className="hero-proof">
            {["No app required", "Free forever", "Built for restaurants & cafes"].map((item) => (
              <span key={item}>
                <Check size={14} /> {item}
              </span>
            ))}
          </div>
        </div>
        <DashboardMockup />
      </section>

      <MobileSetupSection />

      <section className="section section-gray problem-section">
        <SectionHeader eyebrow="The Problem" title="Running a restaurant is harder than it should be" />
        <div className="problem-grid">
          {problemCards.map(([Icon, title, text]) => (
            <InfoCard icon={Icon} title={title} text={text} key={title} />
          ))}
        </div>
      </section>

      <section className="section solution-section">
        <h2>ZAD solves all of this</h2>
        <div className="solution-list">
          {solutionItems.map((item) => (
            <span key={item}>
              <Check size={16} /> {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section section-gray">
        <SectionHeader title="Everything a modern restaurant needs" />
        <FeatureGrid items={featureCards} />
      </section>

      <MobilePricingSection />

      <section className="section journey-section">
        <SectionHeader title="The customer journey in 9 steps" body="No app needed — just scan and enjoy a seamless experience." />
        <JourneyGrid />
      </section>

      <Testimonials />
      <FaqSection />
      <FinalCta title="Start your digital restaurant experience today" body="Join hundreds of restaurants growing with ZAD." />
      <Footer />
    </PageShell>
  );
}

function MobileSetupSection() {
  return (
    <section className="mobile-only-section mobile-setup-section">
      <Badge>Setup</Badge>
      <h2>Up and running in minutes</h2>
      <div className="setup-list">
        {setupSteps.map(([num, title, body]) => (
          <article key={num}>
            <span>{num}</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MobilePricingSection() {
  return (
    <section className="mobile-only-section mobile-pricing-section">
      <h2>Simple pricing</h2>
      <div className="pricing-cards">
        <PricingCard type="free" />
        <PricingCard type="custom" />
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <article className="info-card">
      <Icon size={28} strokeWidth={1.8} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function FeatureGrid({ items }: { items: readonly (readonly [LucideIcon, string, string])[] }) {
  return (
    <div className="feature-grid">
      {items.map(([Icon, title, text]) => (
        <article className="feature-card" key={title}>
          <span className="feature-icon">
            <Icon size={24} strokeWidth={1.7} />
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function JourneyGrid() {
  return (
    <div className="journey-grid">
      {journeySteps.map(([num, title, body]) => (
        <article className="journey-step" key={num}>
          <span>{num}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <SectionHeader title="Trusted by restaurants" />
      <div className="testimonial-grid">
        {testimonials.map(([name, role, quote]) => (
          <article className="testimonial-card" key={name}>
            <div className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star size={18} fill="currentColor" key={index} />
              ))}
            </div>
            <p>"{quote}"</p>
            <strong>{name}</strong>
            <span>{role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section section-gray faq-section">
      <SectionHeader title="Frequently asked questions" />
      <div className="faq-grid">
        {faqs.map((faq) => (
          <button className="faq-item" key={faq}>
            {faq}
            <ChevronDown size={18} />
          </button>
        ))}
      </div>
    </section>
  );
}

function FinalCta({
  title,
  body,
  primary = "Start for Free",
  secondary = "Book a Demo"
}: {
  title: string;
  body: string;
  primary?: string;
  secondary?: string;
}) {
  return (
    <section className="final-cta">
      <SectionHeader title={title} body={body} dark />
      <div className="hero-actions">
        <Button href="/signup" size="lg">
          {primary}
        </Button>
        <Button href="/contact" tone="outline" size="lg">
          {secondary}
        </Button>
      </div>
    </section>
  );
}

function DashboardMockup({ compact = false, title = "Dashboard Overview" }: { compact?: boolean; title?: string }) {
  const rows = [
    ["#0048", "Saleh Al-Omari", "NEW", "18.50"],
    ["#0047", "Lina Haddad", "PREPARING", "18.50"],
    ["#0046", "Ahmad Zaid", "READY", "18.50"]
  ];

  return (
    <div className={`dashboard-mockup ${compact ? "dashboard-compact" : ""}`}>
      <aside className="dashboard-sidebar">
        <Logo compact dark />
        <nav>
          {[
            [LayoutDashboard, "Dashboard", true],
            [ClipboardList, "Orders", false],
            [Users, "Customers", false],
            [Star, "Loyalty", false],
            [BarChart3, "Analytics", false],
            [Settings, "Settings", false]
          ].map(([Icon, item, active]) => {
            const DashboardIcon = Icon as LucideIcon;
            return (
              <span className={active ? "active" : ""} key={item as string}>
                <DashboardIcon size={18} /> {item as string}
              </span>
            );
          })}
        </nav>
        <small>Powered by ZAD v1.0</small>
      </aside>
      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <strong>{title}</strong>
          <div>
            <Search size={20} />
            <Bell size={20} />
            <span className="avatar" />
          </div>
        </div>
        <div className="dashboard-content">
          <div className="metric-row">
            <Metric label="Orders Today" value={compact ? "247" : "128"} color="red" />
            <Metric label="Active Tables" value={compact ? "12" : "14"} color="blue" />
            <Metric label="Reservations" value="8" color="violet" />
            <Metric label="Revenue" value={compact ? "$3,420" : "$4,240"} color="green" />
          </div>
          <div className="orders-table">
            <div className="table-head">
              <span>Order #</span>
              <span>Customer</span>
              <span>Status</span>
              <span>Total</span>
            </div>
            {rows.map(([id, name, status, total]) => (
              <div className="table-row" key={id}>
                <strong>{id}</strong>
                <span>{name}</span>
                <em className={`status status-${status.toLowerCase()}`}>{status}</em>
                <strong>{total}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <article className="metric">
      <span>{label}</span>
      <strong className={`metric-${color}`}>{value}</strong>
    </article>
  );
}

function ProductPage() {
  return (
    <PageShell>
      <section className="hero product-hero">
        <div className="hero-copy">
          <Badge>Restaurant Dashboard</Badge>
          <h1>The command center for your restaurant</h1>
          <p>Orders, tables, reservations, customers, menu, analytics — in one clean dashboard.</p>
          <Button href="/signup">Try for Free</Button>
        </div>
        <DashboardMockup compact title="The Burger House" />
      </section>

      <SplitSection
        eyebrow="Kitchen Display"
        title="Live orders from every table"
        body="Kitchen staff see new orders instantly with sound alerts, table context, and one-click status tracking."
        visual={<KitchenPanel />}
        reverse
        bullets={["Real-time updates", "Status tracking", "Table context"]}
      />

      <SplitSection
        eyebrow="Reservations"
        title="Never miss a booking"
        body="Digital reservation logs, guest history, automated confirmations, and waiting-list management keep the floor under control."
        visual={<ReservationPanel />}
        bullets={["Digital reservation log", "Automated SMS confirmations", "Guest history and allergy tracking", "Google and social booking links"]}
      />

      <section className="section section-gray table-section">
        <SectionHeader eyebrow="Table Map" title="Full visibility at a glance" align="left" />
        <TableMap />
      </section>

      <SplitSection
        eyebrow="Menu Builder"
        title="Update anything, anytime"
        body="Instant updates across QR and tablets, categories, photo-rich items, spicy tags, and dietary markers."
        visual={<MenuBuilder />}
        bullets={["Manage seasonal availability", "Daily special highlights and tags", "Photo-rich menu descriptions", "Price adjustments by time of day"]}
      />

      <section className="section section-gray analytics-section">
        <SectionHeader eyebrow="Analytics" title="Data that drives decisions" align="left" />
        <AnalyticsPanel />
      </section>

      <FinalCta title="Start managing your restaurant smarter" body="Join thousands of restaurant owners using ZAD to streamline their operations and increase revenue." />
      <Footer />
    </PageShell>
  );
}

function SplitSection({
  eyebrow,
  title,
  body,
  visual,
  bullets,
  reverse = false
}: {
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
  bullets: string[];
  reverse?: boolean;
}) {
  return (
    <section className={`split-section ${reverse ? "split-reverse" : ""}`}>
      <div className="split-visual">{visual}</div>
      <div className="split-copy">
        <Badge>{eyebrow}</Badge>
        <h2>{title}</h2>
        <p>{body}</p>
        <ul className="check-list">
          {bullets.map((item) => (
            <li key={item}>
              <Check size={16} /> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function KitchenPanel() {
  return (
    <div className="mock-panel kitchen-panel">
      <div className="pill-tabs">
        <span>All</span>
        <span>Pending</span>
        <span className="active">Active</span>
        <span>Ready</span>
      </div>
      {["#0042", "#0041", "#0040", "#0039"].map((id, index) => (
        <div className="order-card" key={id}>
          <strong>{id}</strong>
          <span>{index + 2} items · Table T-{index + 5}</span>
          <em className={index % 2 ? "status status-preparing" : "status status-ready"}>
            {index % 2 ? "PENDING" : "ACTIVE"}
          </em>
        </div>
      ))}
    </div>
  );
}

function ReservationPanel() {
  return (
    <div className="mock-panel reservation-panel">
      <div className="panel-title">
        <strong>Tonight · Jul 6</strong>
        <span>+ New Booking</span>
      </div>
      {[
        ["7:00 PM", "Ahmed Al-Rashid", "CONFIRMED"],
        ["7:30 PM", "Sara Ibrahim", "PENDING"],
        ["8:00 PM", "Marco Rossi", "CONFIRMED"]
      ].map(([time, name, status]) => (
        <div className="booking-card" key={name}>
          <strong>{time}</strong>
          <span>{name}</span>
          <em className={status === "PENDING" ? "status status-preparing" : "status status-ready"}>{status}</em>
        </div>
      ))}
    </div>
  );
}

function TableMap() {
  const states = ["available", "occupied", "reserved", "available", "unavailable", "available", "occupied", "occupied", "available", "reserved", "available", "available"];
  return (
    <div className="table-map">
      {states.map((state, index) => (
        <span className={`table-cell ${state}`} key={`${state}-${index}`}>
          <strong>{index + 1}</strong>
          <small>{state}</small>
        </span>
      ))}
    </div>
  );
}

function MenuBuilder() {
  return (
    <div className="mock-panel menu-builder">
      <div className="menu-tabs">
        <span>Starters</span>
        <span className="active">Mains</span>
        <span>Desserts</span>
        <span>Drinks</span>
      </div>
      {["Classic Cheese Burger", "Swiss Mushroom Burger", "Spicy Zinger Meal"].map((item, index) => (
        <div className="menu-item-row" key={item}>
          <div>
            <strong>{item}</strong>
            <span>{index === 0 ? "$6.00" : index === 1 ? "$5.00" : "$7.00"}</span>
          </div>
          <button className={index === 2 ? "" : "active"} aria-label={`${item} availability`} />
        </div>
      ))}
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className="analytics-panel">
      <div className="metric-row">
        <Metric label="Revenue" value="$28,400" color="dark" />
        <Metric label="Orders" value="1,247" color="dark" />
        <Metric label="Avg Check" value="$22.80" color="dark" />
        <Metric label="New Customers" value="89" color="dark" />
      </div>
      <div className="chart-and-list">
        <div className="chart-box">
          <strong>Weekly Revenue</strong>
          <div className="bar-chart">
            {[46, 64, 56, 82, 92, 70, 84].map((height, index) => (
              <span style={{ height: `${height}%` }} key={index} />
            ))}
          </div>
        </div>
        <div className="top-items">
          <strong>Top Selling Items</strong>
          {["Chicken Shawarma", "Beef Burger", "Caesar Salad"].map((item, index) => (
            <div key={item}>
              <span>{index + 1}</span>
              <p>{item}</p>
              <em>{[142, 98, 67][index]}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QrOrderingPage() {
  return (
    <PageShell>
      <section className="qr-hero">
        <div className="qr-hero-copy">
          <Badge>No app required</Badge>
          <h1>A smoother ordering experience, straight from the table</h1>
          <p>Customers scan, browse, order, and pay — all from their phone browser. No download. No friction.</p>
          <div className="hero-actions">
            <Button href="#journey">See How It Works</Button>
            <Button tone="white" href="/product">
              Watch Demo
            </Button>
          </div>
          <div className="hero-proof">
            <span><Check size={14} /> No app</span>
            <span><Check size={14} /> Any smartphone</span>
            <span><Check size={14} /> Arabic & English</span>
          </div>
        </div>
        <div className="phone-cluster">
          <PhoneMockup variant="scan" />
          <PhoneMockup variant="receipt" tilted />
        </div>
      </section>
      <section className="red-band">
        <h2>No app download required</h2>
        <p>Customers scan once and they are in. The entire experience runs in their browser.</p>
      </section>
      <section className="section section-gray" id="journey">
        <SectionHeader title="The complete journey in 9 steps" />
        <JourneyCards />
      </section>
      <SplitSection
        eyebrow="Waiter Call"
        title="One tap to call your waiter"
        body="Empower your guests to get attention when they need it without searching for staff."
        visual={<PhoneMockup variant="waiter" />}
        bullets={["Reduces shouting and waving across the floor", "Notifies staff devices instantly with table number", "Improves guest satisfaction in busy hours"]}
        reverse
      />
      <section className="section section-gray receipt-section">
        <SectionHeader eyebrow="Digital Receipt" title="Receipts that never get lost" />
        <div className="receipt-layout">
          <div className="receipt-actions">
            {["View on phone", "Send via WhatsApp", "Download PDF"].map((item) => (
              <button key={item}>{item}<span>Instant access to current and past orders.</span></button>
            ))}
          </div>
          <PhoneMockup variant="receipt" />
        </div>
      </section>
      <section className="section">
        <SectionHeader title="Stay entertained while your food is prepared" body="Built-in mini games — a premium engagement feature that turns waiting into part of the fun." />
        <div className="mini-game-grid">
          {[
            ["Makes Waiting Shorter", "Transform dead time into an engaging experience."],
            ["Loyalty Connection", "Reward high scores with loyalty points or dessert."],
            ["Memorable Experience", "Stand out from competition with premium entertainment."]
          ].map(([title, body]) => (
            <article className="game-card" key={title}>
              <Gamepad2 size={48} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="benefit-split">
        <BenefitList title="For Restaurants" items={["Lightning fast ordering", "Reduced labor costs", "Automatic upsells", "Visual menu upsells", "Detailed analytics"]} />
        <BenefitList title="For Customers" items={["No app to download", "Arabic & English support", "Call waiter in one tap", "Digital payment options", "Built-in mini games"]} />
      </section>
      <FinalCta title="Set up QR ordering for your restaurant today" body="Takes less than 10 minutes to go live." />
      <Footer compact />
    </PageShell>
  );
}

function JourneyCards() {
  return (
    <div className="journey-cards">
      {[
        ["1", "Scan QR Code", "Located directly on the table for instant access."],
        ["2", "Choose Language", "Full support for Arabic and English localization."],
        ["3", "Enter Name & Phone", "Quick identity for personalized service."],
        ["4", "Browse the Menu", "Visual, categorized menu with high-res images."],
        ["5", "Add to Cart", "Modify items and add notes for the chef."],
        ["6", "Confirm Order", "Real-time kitchen transmission for faster prep."],
        ["7", "Pay or Request Waiter", "Digital payment or call staff with one tap."],
        ["8", "Digital Receipt", "Instant confirmation that stays on their phone."],
        ["9", "Play Mini Games", "Premium games to keep customers engaged."]
      ].map(([num, title, body]) => (
        <article className="journey-card" key={num}>
          <span>{num}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}

function PhoneMockup({ variant, tilted = false }: { variant: "scan" | "receipt" | "waiter"; tilted?: boolean }) {
  return (
    <div className={`phone-mockup ${tilted ? "phone-tilted" : ""}`}>
      <div className="phone-notch" />
      {variant === "scan" ? (
        <div className="scan-screen">
          <strong>Ready To Order?</strong>
          <button>Scan QR</button>
          <QrCode size={78} />
        </div>
      ) : variant === "receipt" ? (
        <div className="receipt-screen">
          <Logo compact />
          <h3>Digital Receipt</h3>
          {["Burger", "Dish Bowl", "Latte", "Subtotal"].map((item, index) => (
            <span key={item}>
              {item}
              <em>{["$8.50", "$6.00", "$3.75", "$18.25"][index]}</em>
            </span>
          ))}
          <strong>$17.50</strong>
          <button>Send via WhatsApp</button>
        </div>
      ) : (
        <div className="waiter-screen">
          <div className="tabs"><span>Appetizers</span><span>Main</span><span>Drinks</span></div>
          <p>Need help at Table 09?</p>
          <button>Call Waiter</button>
        </div>
      )}
    </div>
  );
}

function BenefitList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>
            <Check size={16} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingPage() {
  return (
    <PageShell>
      <section className="hero pricing-hero">
        <Badge>Pricing</Badge>
        <h1>Simple, honest pricing</h1>
        <p>Start free. No credit card. No setup fee.</p>
        <div className="hero-proof">
          <span><Check size={14} /> Free forever</span>
          <span><Check size={14} /> No hidden fees</span>
          <span><Check size={14} /> Cancel anytime</span>
        </div>
      </section>
      <section className="section section-gray pricing-cards-section">
        <div className="pricing-cards">
          <PricingCard type="free" />
          <PricingCard type="custom" />
        </div>
      </section>
      <section className="section compare-section">
        <SectionHeader title="Compare plans in detail" />
        <ComparisonTable />
      </section>
      <section className="section section-gray pricing-faq">
        <SectionHeader title="Pricing questions answered" />
        <div className="pricing-faq-grid">
          {[
            ["Is ZAD really free?", "Yes, our Free Forever plan includes basic ordering and menu features with no time limit."],
            ["No credit card required?", "No credit card is required to sign up for the free plan. Start your restaurant immediately."],
            ["Can I upgrade later?", "You can switch to a custom enterprise plan anytime your restaurant needs more advanced features."],
            ["Is there a setup fee?", "There are zero setup fees for ZAD. Our self-serve dashboard lets you go live in minutes."],
            ["Does free include QR ordering?", "Absolutely. Every ZAD user gets a high-speed QR menu and table ordering out of the box."],
            ["Support multi-branch?", "Multi-branch and central kitchen management are available on our Custom System plan."],
            ["How is Custom priced?", "Custom pricing depends on branch count, integrations, and development requirements."],
            ["What if I outgrow free?", "Contact our sales team for a quote that matches your restaurant scale and complexity."]
          ].map(([q, a]) => (
            <article key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCta title="Start your free restaurant today" body="No credit card. No setup fee. Join 20k+ global operators." secondary="Contact Sales" />
      <Footer />
    </PageShell>
  );
}

function PricingCard({ type }: { type: "free" | "custom" }) {
  const dark = type === "custom";
  const items = dark ? customFeatures : pricingFeatures;
  return (
    <article className={`pricing-card ${dark ? "pricing-card-dark" : ""}`}>
      <div className="pricing-card-head">
        <div>
          <h2>{dark ? "Custom System" : "Free Forever"}</h2>
          {dark ? <strong>Contact Us</strong> : <strong><span>$0</span>/month</strong>}
        </div>
        {!dark ? <Badge>Most Popular</Badge> : null}
      </div>
      <p>{dark ? "Enterprise solutions for multi-branch restaurants and franchise chains." : "Ideal for small restaurants and food trucks starting their digital journey."}</p>
      <ul>
        {items.map((item) => (
          <li key={item}><Check size={16} /> {item}</li>
        ))}
      </ul>
      <Button href={dark ? "/contact" : "/signup"} tone={dark ? "outline" : "red"}>
        {dark ? "Contact Us" : "Start for Free"}
      </Button>
      <small>{dark ? "Tailored to your restaurant." : "Always free. No time limit."}</small>
    </article>
  );
}

function ComparisonTable() {
  const rows = ["QR Menu", "Table Ordering", "Menu Management", "Order Dashboard", "Reservations", "Digital Receipts", "Analytics", "Custom Dashboard", "Custom Branding", "Multi-Branch", "POS Integration", "Dedicated Support"];
  return (
    <div className="comparison-table">
      <div className="comparison-head">
        <span>Feature</span>
        <span>Free Forever</span>
        <span>Custom System</span>
      </div>
      {rows.map((row, index) => (
        <div className="comparison-row" key={row}>
          <strong>{row}</strong>
          <span>{index > 6 && index !== 9 && index !== 10 ? "—" : <Check size={18} />}</span>
          <span><Check size={18} /></span>
        </div>
      ))}
    </div>
  );
}

function FeaturesPage() {
  const groups = [
    ["Customer Experience", featureCards.slice(0, 6)],
    ["Restaurant Operations", featureCards.slice(6, 10)],
    ["Analytics & Control", featureCards.slice(10)]
  ] as const;

  return (
    <PageShell>
      <section className="hero simple-hero">
        <Badge>Features</Badge>
        <h1>Everything your restaurant needs, organized clearly</h1>
        <p>Customer ordering, operations, loyalty, analytics, and sustainability tools in one ZAD workspace.</p>
        <Button href="/signup">Start for Free</Button>
      </section>
      {groups.map(([title, items], index) => (
        <section className={`section ${index % 2 ? "" : "section-gray"}`} key={title}>
          <SectionHeader title={title} body={index === 0 ? "Fast, clean experiences for guests and staff." : undefined} />
          <FeatureGrid items={items} />
        </section>
      ))}
      <FinalCta title="Bring every restaurant workflow into one place" body="A practical operating system built for repeated daily use." />
      <Footer />
    </PageShell>
  );
}

function ImpactPage() {
  return (
    <PageShell>
      <section className="hero impact-hero">
        <Badge>Impact</Badge>
        <h1>Less paper, fewer mistakes, faster service</h1>
        <p>ZAD helps restaurants reduce waste and grow with better guest data, cleaner operations, and simpler workflows.</p>
        <Button href="/signup">Start for Free</Button>
      </section>
      <section className="section section-gray stats-section">
        {[
          ["80%", "less menu printing"],
          ["10 min", "average setup time"],
          ["24/7", "digital ordering"],
          ["0", "app downloads needed"]
        ].map(([value, label]) => (
          <article className="stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>
      <SplitSection
        eyebrow="For your restaurant"
        title="Operational clarity at the exact moment you need it"
        body="Replace manual steps with live order data, automatic receipts, and customer profiles that are easy to act on."
        visual={<AnalyticsPanel />}
        bullets={["More accurate orders", "Lower paper waste", "Better repeat-customer insight", "A calmer service rhythm"]}
      />
      <FinalCta title="Make your restaurant easier to run" body="Start with the free plan and grow into the tools you need." />
      <Footer />
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <section className="hero about-hero">
        <Badge>About ZAD</Badge>
        <h1>Built for modern restaurants in the region and beyond</h1>
        <p>We believe powerful restaurant software should be simple to start, affordable to keep, and respectful of how real teams work.</p>
        <DashboardMockup compact title="ZAD Restaurant OS" />
      </section>
      <SplitSection
        eyebrow="Mission"
        title="Give every restaurant an operating system"
        body="From reservation to digital receipt, ZAD connects the customer journey with back-of-house control."
        visual={<MissionGraphic />}
        bullets={["Free to start", "Quick setup in 10 minutes", "Arabic and English by design", "Built in Amman, Jordan"]}
      />
      <FinalCta title="Start for free and grow with precision" body="Download. Set up. Start. ZAD keeps the first step simple." />
      <Footer />
    </PageShell>
  );
}

function MissionGraphic() {
  return (
    <div className="mission-graphic">
      {[QrCode, ShoppingCart, ChefHat, Receipt, BarChart3].map((Icon, index) => (
        <span key={index}>
          <Icon size={32} />
        </span>
      ))}
    </div>
  );
}

function ContactPage() {
  return (
    <PageShell>
      <section className="contact-page">
        <div className="contact-copy">
          <Badge>Contact</Badge>
          <h1>Let us help you set up your restaurant</h1>
          <p>Tell us what you need and the ZAD team will help you launch your digital restaurant workflow.</p>
          <div className="contact-cards">
            <span><Mail size={18} /> hello@zad-os.com</span>
            <span><Phone size={18} /> +962 6 000 0000</span>
            <span><MapPin size={18} /> Amman, Jordan</span>
          </div>
        </div>
        <form className="contact-form">
          <Input label="Full name" placeholder="Your name" />
          <Input label="Restaurant name" placeholder="Restaurant or cafe" />
          <Input label="Email address" placeholder="you@example.com" />
          <label>
            Message
            <textarea placeholder="Tell us about your restaurant" />
          </label>
          <Button href="#" size="lg">Send Message</Button>
        </form>
      </section>
      <section className="section section-gray pricing-faq">
        <div className="pricing-faq-grid">
          {[
            ["How fast can we start?", "You can register your account and build your digital menu in under 10 minutes."],
            ["Is there a setup fee?", "Absolutely none. Getting started with ZAD Restaurant OS is completely free."]
          ].map(([q, a]) => (
            <article key={q}><h3>{q}</h3><p>{a}</p></article>
          ))}
        </div>
      </section>
      <FinalCta title="Start free or talk to our team" body="Transform your physical restaurant into a fully automated digital enterprise starting today." />
      <Footer compact />
    </PageShell>
  );
}

function AuthPage({ mode }: { mode: "login" | "signup" | "forgot" }) {
  const isSignup = mode === "signup";
  const isForgot = mode === "forgot";
  return (
    <main className="auth-page">
      <section className="auth-mobile-brand">
        <Logo />
        <span>{isSignup ? "Free Forever" : "Restaurant OS"}</span>
      </section>
      <article className="auth-card">
        <Logo />
        <div className="auth-title">
          <h1>{isSignup ? "Create your account." : isForgot ? "Reset password." : "Welcome back."}</h1>
          <p>{isSignup ? "Start your free restaurant workspace." : isForgot ? "We will send reset instructions." : "Sign in to your dashboard."}</p>
        </div>
        <form className="auth-form">
          {isSignup ? <Input label="Full Name" placeholder="Your full name" /> : null}
          <Input label="Email address" placeholder="Email address" />
          {!isForgot ? <Input label="Password" placeholder="Password" type="password" /> : null}
          {isSignup ? <Input label="Confirm Password" placeholder="Confirm Password" type="password" /> : null}
          {!isSignup && !isForgot ? (
            <div className="auth-options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="/forgot-password">Forgot password?</a>
            </div>
          ) : null}
          {isSignup ? <label className="terms"><input type="checkbox" /> I agree to Terms and Privacy Policy</label> : null}
          <Button href={isForgot ? "/login" : "/onboarding"} size="lg">
            {isSignup ? "Create Account" : isForgot ? "Send Reset Link" : "Sign In"}
          </Button>
        </form>
        {!isForgot ? (
          <>
            <div className="divider"><span />or<span /></div>
            <Button href="#" tone="white" size="lg"><Globe2 size={20} /> Continue with Google</Button>
          </>
        ) : (
          <a className="back-link" href="/login"><ArrowLeft size={16} /> Back to Sign In</a>
        )}
        <p className="auth-footer">
          {isSignup ? "Already have an account? " : "No account? "}
          <a href={isSignup ? "/login" : "/signup"}>{isSignup ? "Sign In" : "Start for Free"}</a>
        </p>
      </article>
    </main>
  );
}

function Input({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="input-field">
      {label}
      <span>
        <input type={type} placeholder={placeholder} />
        {type === "password" ? <Eye size={20} /> : null}
      </span>
    </label>
  );
}

function OnboardingPage() {
  return (
    <main className="onboarding-page">
      <aside className="onboarding-side">
        <Logo dark />
        <h1>Set up your restaurant</h1>
        <p>Five short steps to go from account to live QR ordering.</p>
        <div className="progress-dots">
          {setupSteps.map(([num]) => <span className={num === "01" ? "active" : ""} key={num} />)}
        </div>
      </aside>
      <section className="onboarding-panel">
        <div className="setup-list">
          {setupSteps.map(([num, title, body]) => (
            <article key={num}>
              <span>{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
        <Button href="/" size="lg">Continue Setup</Button>
      </section>
    </main>
  );
}

export default App;
