import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  ChefHat,
  ClipboardList,
  LayoutDashboard,
  QrCode,
  Receipt,
  Search,
  Settings,
  ShoppingCart,
  Star,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EASE, CountUp, Stagger, StaggerItem } from "./motion";
import { Logo } from "./ui";

const sidebarItems: readonly [LucideIcon, string, boolean][] = [
  [LayoutDashboard, "Dashboard", true],
  [ClipboardList, "Orders", false],
  [Users, "Customers", false],
  [Star, "Loyalty", false],
  [BarChart3, "Analytics", false],
  [Settings, "Settings", false]
];

export function DashboardMockup({
  compact = false,
  title = "Dashboard Overview"
}: {
  compact?: boolean;
  title?: string;
}) {
  const rows = [
    ["#0048", "Saleh Al-Omari", "NEW", "18.50"],
    ["#0047", "Lina Haddad", "PREPARING", "18.50"],
    ["#0046", "Ahmad Zaid", "READY", "18.50"]
  ];

  return (
    <div className={`dashboard-mockup ${compact ? "dashboard-compact" : ""}`}>
      <aside className="dashboard-sidebar">
        <Logo variant="english" compact dark />
        <nav>
          {sidebarItems.map(([Icon, item, active]) => (
            <span className={active ? "active" : ""} key={item}>
              <Icon size={18} /> {item}
            </span>
          ))}
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
          <Stagger className="metric-row">
            <Metric label="Orders Today" value={compact ? "247" : "128"} color="red" animated />
            <Metric label="Active Tables" value={compact ? "12" : "14"} color="blue" animated />
            <Metric label="Reservations" value="8" color="violet" animated />
            <Metric label="Revenue" value={compact ? "$3,420" : "$4,240"} color="green" animated />
          </Stagger>
          <div className="orders-table">
            <div className="table-head">
              <span>Order #</span>
              <span>Customer</span>
              <span>Status</span>
              <span>Total</span>
            </div>
            {rows.map(([id, name, status, total], index) => (
              <motion.div
                className="table-row"
                key={id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: EASE }}
              >
                <strong>{id}</strong>
                <span>{name}</span>
                <em className={`status status-${status.toLowerCase()}`}>{status}</em>
                <strong>{total}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroNotifications() {
  const chips: readonly [LucideIcon, string, string, number][] = [
    [ShoppingCart, "New order", "Table 12 · 3 items", 0.9],
    [Bell, "Waiter call", "Table 04 needs service", 1.4]
  ];
  return (
    <div className="hero-notifications" aria-hidden="true">
      {chips.map(([Icon, title, body, delay], index) => (
        <motion.div
          className={`notification-chip notification-chip-${index + 1}`}
          key={title}
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay, ease: EASE }}
        >
          <span className="notification-icon">
            <Icon size={16} />
          </span>
          <div>
            <strong>{title}</strong>
            <small>{body}</small>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Metric({
  label,
  value,
  color,
  animated = false
}: {
  label: string;
  value: string;
  color: string;
  animated?: boolean;
}) {
  const content = (
    <>
      <span>{label}</span>
      <strong className={`metric-${color}`}>
        {animated ? <CountUp value={value} /> : value}
      </strong>
    </>
  );
  return animated ? (
    <StaggerItem className="metric">{content}</StaggerItem>
  ) : (
    <article className="metric">{content}</article>
  );
}

export function KitchenPanel() {
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

export function ReservationPanel() {
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
          <em className={status === "PENDING" ? "status status-preparing" : "status status-ready"}>
            {status}
          </em>
        </div>
      ))}
    </div>
  );
}

export function TableMap() {
  const states = [
    "available",
    "occupied",
    "reserved",
    "available",
    "unavailable",
    "available",
    "occupied",
    "occupied",
    "available",
    "reserved",
    "available",
    "available"
  ];
  return (
    <Stagger className="table-map">
      {states.map((state, index) => (
        <StaggerItem className={`table-cell ${state}`} key={`${state}-${index}`}>
          <strong>{index + 1}</strong>
          <small>{state}</small>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function MenuBuilder() {
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

export function AnalyticsPanel() {
  return (
    <div className="analytics-panel">
      <Stagger className="metric-row">
        <Metric label="Revenue" value="$28,400" color="dark" animated />
        <Metric label="Orders" value="1,247" color="dark" animated />
        <Metric label="Avg Check" value="$22.80" color="dark" animated />
        <Metric label="New Customers" value="89" color="dark" animated />
      </Stagger>
      <div className="chart-and-list">
        <div className="chart-box">
          <strong>Weekly Revenue</strong>
          <div className="bar-chart">
            {[46, 64, 56, 82, 92, 70, 84].map((height, index) => (
              <motion.span
                key={index}
                initial={{ height: "8%" }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true, margin: "-48px 0px" }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
              />
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

export function PhoneMockup({
  variant,
  tilted = false
}: {
  variant: "scan" | "receipt" | "waiter";
  tilted?: boolean;
}) {
  return (
    <div className={`phone-mockup ${tilted ? "phone-tilted" : ""}`}>
      <div className="phone-notch" />
      {variant === "scan" ? (
        <div className="scan-screen">
          <strong>Ready To Order?</strong>
          <button type="button">Scan QR</button>
          <span className="qr-frame">
            <QrCode size={78} />
            <motion.span
              className="scan-line"
              aria-hidden="true"
              animate={{ top: ["8%", "88%", "8%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </div>
      ) : variant === "receipt" ? (
        <div className="receipt-screen">
          <Logo variant="english" compact />
          <h3>Digital Receipt</h3>
          {["Burger", "Dish Bowl", "Latte", "Subtotal"].map((item, index) => (
            <span key={item}>
              {item}
              <em>{["$8.50", "$6.00", "$3.75", "$18.25"][index]}</em>
            </span>
          ))}
          <strong>$17.50</strong>
          <button type="button">Send via WhatsApp</button>
        </div>
      ) : (
        <div className="waiter-screen">
          <div className="tabs">
            <span>Appetizers</span>
            <span>Main</span>
            <span>Drinks</span>
          </div>
          <p>Need help at Table 09?</p>
          <button type="button">Call Waiter</button>
        </div>
      )}
    </div>
  );
}

export function MissionGraphic() {
  return (
    <div className="mission-graphic">
      {[QrCode, ShoppingCart, ChefHat, Receipt, BarChart3].map((Icon, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
        >
          <Icon size={32} />
        </motion.span>
      ))}
    </div>
  );
}
