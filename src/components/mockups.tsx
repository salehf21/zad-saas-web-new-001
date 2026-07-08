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
import { useI18n } from "../i18n";
import { EASE, CountUp, Stagger, StaggerItem } from "./motion";
import { Logo } from "./ui";

const sidebarIcons: readonly LucideIcon[] = [LayoutDashboard, ClipboardList, Users, Star, BarChart3, Settings];

export function DashboardMockup({ compact = false, title }: { compact?: boolean; title?: string }) {
  const { m } = useI18n();
  const heading = title ?? m.mockups.dashboardOverview;
  const rows = [
    ["#0048", m.mockups.customerNames[0], m.mockups.statusNew, "new", "18.50"],
    ["#0047", m.mockups.customerNames[1], m.mockups.statusPreparing, "preparing", "18.50"],
    ["#0046", m.mockups.customerNames[2], m.mockups.statusReady, "ready", "18.50"]
  ] as const;

  return (
    <div className={`dashboard-mockup ${compact ? "dashboard-compact" : ""}`}>
      <aside className="dashboard-sidebar">
        <Logo variant="english" compact dark />
        <nav>
          {m.mockups.sidebar.map((item, index) => {
            const Icon = sidebarIcons[index];
            return (
              <span className={index === 0 ? "active" : ""} key={item}>
                <Icon size={18} /> {item}
              </span>
            );
          })}
        </nav>
        <small>{m.mockups.poweredBy}</small>
      </aside>
      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <strong>{heading}</strong>
          <div>
            <Search size={20} />
            <Bell size={20} />
            <span className="avatar" />
          </div>
        </div>
        <div className="dashboard-content">
          <Stagger className="metric-row">
            <Metric label={m.mockups.ordersToday} value={compact ? "247" : "128"} color="red" animated />
            <Metric label={m.mockups.activeTables} value={compact ? "12" : "14"} color="blue" animated />
            <Metric label={m.mockups.reservations} value="8" color="violet" animated />
            <Metric label={m.mockups.revenue} value={compact ? "$3,420" : "$4,240"} color="green" animated />
          </Stagger>
          <div className="orders-table">
            <div className="table-head">
              <span>{m.mockups.orderNo}</span>
              <span>{m.mockups.customer}</span>
              <span>{m.mockups.status}</span>
              <span>{m.mockups.total}</span>
            </div>
            {rows.map(([id, name, statusLabel, statusClass, total], index) => (
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
                <em className={`status status-${statusClass}`}>{statusLabel}</em>
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
  const { m } = useI18n();
  const chips: readonly [LucideIcon, string, string, number][] = [
    [ShoppingCart, m.mockups.notifNewOrderTitle, m.mockups.notifNewOrderBody, 0.9],
    [Bell, m.mockups.notifWaiterTitle, m.mockups.notifWaiterBody, 1.4]
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
      <strong className={`metric-${color}`}>{animated ? <CountUp value={value} /> : value}</strong>
    </>
  );
  return animated ? (
    <StaggerItem className="metric">{content}</StaggerItem>
  ) : (
    <article className="metric">{content}</article>
  );
}

export function KitchenPanel() {
  const { m } = useI18n();
  return (
    <div className="mock-panel kitchen-panel">
      <div className="pill-tabs">
        {m.mockups.kitchenTabs.map((tab, index) => (
          <span className={index === 2 ? "active" : ""} key={tab}>
            {tab}
          </span>
        ))}
      </div>
      {["#0042", "#0041", "#0040", "#0039"].map((id, index) => (
        <div className="order-card" key={id}>
          <strong>{id}</strong>
          <span>
            {index + 2} {m.mockups.itemsWord} · {m.mockups.tableWord} T-{index + 5}
          </span>
          <em className={index % 2 ? "status status-preparing" : "status status-ready"}>
            {index % 2 ? m.mockups.statusPending : m.mockups.statusActive}
          </em>
        </div>
      ))}
    </div>
  );
}

export function ReservationPanel() {
  const { m } = useI18n();
  const bookings = [
    ["7:00 PM", m.mockups.guestNames[0], true],
    ["7:30 PM", m.mockups.guestNames[1], false],
    ["8:00 PM", m.mockups.guestNames[2], true]
  ] as const;
  return (
    <div className="mock-panel reservation-panel">
      <div className="panel-title">
        <strong>{m.mockups.tonight}</strong>
        <span>{m.mockups.newBooking}</span>
      </div>
      {bookings.map(([time, name, confirmed]) => (
        <div className="booking-card" key={name}>
          <strong>{time}</strong>
          <span>{name}</span>
          <em className={confirmed ? "status status-ready" : "status status-preparing"}>
            {confirmed ? m.mockups.statusConfirmed : m.mockups.statusPending}
          </em>
        </div>
      ))}
    </div>
  );
}

export function TableMap() {
  const { m } = useI18n();
  const stateLabels = {
    available: m.mockups.tableAvailable,
    occupied: m.mockups.tableOccupied,
    reserved: m.mockups.tableReserved,
    unavailable: m.mockups.tableUnavailable
  } as const;
  const states: readonly (keyof typeof stateLabels)[] = [
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
          <small>{stateLabels[state]}</small>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function MenuBuilder() {
  const { m } = useI18n();
  return (
    <div className="mock-panel menu-builder">
      <div className="menu-tabs">
        {m.mockups.menuTabs.map((tab, index) => (
          <span className={index === 1 ? "active" : ""} key={tab}>
            {tab}
          </span>
        ))}
      </div>
      {m.mockups.menuItems.map((item, index) => (
        <div className="menu-item-row" key={item}>
          <div>
            <strong>{item}</strong>
            <span>{index === 0 ? "$6.00" : index === 1 ? "$5.00" : "$7.00"}</span>
          </div>
          <button
            className={index === 2 ? "" : "active"}
            aria-label={`${item} ${m.mockups.availabilityAria}`}
          />
        </div>
      ))}
    </div>
  );
}

export function AnalyticsPanel() {
  const { m } = useI18n();
  return (
    <div className="analytics-panel">
      <Stagger className="metric-row">
        <Metric label={m.mockups.revenue} value="$28,400" color="dark" animated />
        <Metric label={m.mockups.sidebar[1]} value="1,247" color="dark" animated />
        <Metric label={m.mockups.avgCheck} value="$22.80" color="dark" animated />
        <Metric label={m.mockups.newCustomers} value="89" color="dark" animated />
      </Stagger>
      <div className="chart-and-list">
        <div className="chart-box">
          <strong>{m.mockups.weeklyRevenue}</strong>
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
          <strong>{m.mockups.topSelling}</strong>
          {m.mockups.topItems.map((item, index) => (
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
  const { m } = useI18n();
  return (
    <div className={`phone-mockup ${tilted ? "phone-tilted" : ""}`}>
      <div className="phone-notch" />
      {variant === "scan" ? (
        <div className="scan-screen">
          <strong>{m.mockups.readyToOrder}</strong>
          <button type="button">{m.mockups.scanQr}</button>
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
          <h3>{m.mockups.digitalReceipt}</h3>
          {m.mockups.receiptItems.map((item, index) => (
            <span key={item}>
              {item}
              <em>{["$8.50", "$6.00", "$3.75", "$18.25"][index]}</em>
            </span>
          ))}
          <strong>$17.50</strong>
          <button type="button">{m.mockups.sendWhatsApp}</button>
        </div>
      ) : (
        <div className="waiter-screen">
          <div className="tabs">
            {m.mockups.waiterTabs.map((tab) => (
              <span key={tab}>{tab}</span>
            ))}
          </div>
          <p>{m.mockups.needHelp}</p>
          <button type="button">{m.mockups.callWaiter}</button>
        </div>
      )}
    </div>
  );
}

export function ReceiptTransition() {
  const { m } = useI18n();
  return (
    <div className="receipt-transition">
      <motion.div
        className="paper-receipt"
        aria-hidden="true"
        initial={{ opacity: 1, x: 26, rotate: 0 }}
        whileInView={{ opacity: 0.45, x: -58, rotate: -8 }}
        viewport={{ once: true, margin: "-96px 0px" }}
        transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
      >
        <strong>{m.mockups.paperReceipt}</strong>
        {m.mockups.receiptItems.slice(0, 3).map((item, index) => (
          <span key={item}>
            {item}
            <em>{["$8.50", "$6.00", "$3.75"][index]}</em>
          </span>
        ))}
        <small>{m.mockups.paperTotal}</small>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-96px 0px" }}
        transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
      >
        <PhoneMockup variant="receipt" />
      </motion.div>
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
