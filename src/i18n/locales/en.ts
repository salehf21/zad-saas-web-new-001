// English is the source-of-truth dictionary. Every other locale file must
// satisfy `Messages` (= typeof en), so TypeScript enforces full coverage.

export const en = {
  common: {
    startForFree: "Start for Free",
    login: "Login",
    bookADemo: "Book a Demo",
    contactUs: "Contact Us",
    contactSales: "Contact Sales",
    viewDashboard: "View Dashboard",
    tryForFree: "Try for Free",
    backToHome: "Back to Home",
    sending: "Sending…",
    pleaseWait: "Please wait…",
    saving: "Saving…",
    back: "Back",
    zadHome: "ZAD home"
  },

  nav: {
    product: "Product",
    features: "Features",
    qrOrdering: "QR Ordering",
    pricing: "Pricing",
    impact: "Impact",
    about: "About",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  },

  footer: {
    blurb: "The complete digital operating system for modern restaurants, cafes, and lounges.",
    colProduct: "Product",
    colCompany: "Company",
    colGetStarted: "Get Started",
    colSocial: "Social",
    linkFeatures: "Features",
    linkQrOrdering: "QR Ordering",
    linkPricing: "Pricing",
    linkAbout: "About",
    linkImpact: "Impact",
    linkContact: "Contact",
    linkStartForFree: "Start for Free",
    linkLogin: "Login",
    linkBookDemo: "Book a Demo",
    copyright: "© 2026 ZAD. All rights reserved.",
    builtIn: "Built in Amman, Jordan",
    language: "Language"
  },

  langPopup: {
    title: "Choose your language",
    sub: "ZAD speaks your language. You can change it anytime from the footer.",
    suggested: "Suggested",
    continueLabel: "Continue"
  },

  home: {
    badge: "Restaurant Operating System",
    titleDesktop: "Run your restaurant from one digital operating system",
    titleMobile: "The Restaurant Operating System",
    subDesktop: "QR ordering, menus, reservations, tables, loyalty, and analytics — all in one place.",
    subMobile: "QR ordering, tables, loyalty, and receipts — all in ZAD.",
    setupLine: "Download. Set up. Start.",
    proof: ["No app required", "Free forever", "Built for restaurants & cafes"],
    problemEyebrow: "The Problem",
    problemTitle: "Running a restaurant is harder than it should be",
    problems: [
      { title: "Paper Menus Outdated", body: "Reprinting costs and long wait times for updates." },
      { title: "Orders Are Slow", body: "Errors in transcription between table and kitchen." },
      { title: "Waiters Overloaded", body: "Staff spending time on data entry instead of service." },
      { title: "Reservations Chaotic", body: "Lost notebooks and double-bookings ruin experiences." },
      { title: "Customer Data Lost", body: "No way to recognize or reward your frequent regulars." },
      { title: "Receipt Waste", body: "Environmental impact and endless thermal paper rolls." },
      { title: "No Analytics", body: "Running your business on gut feeling instead of real data." }
    ],
    solutionTitle: "ZAD solves all of this",
    solutionItems: [
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
    ],
    featuresTitle: "Everything a modern restaurant needs",
    featuresBody: "Not just a QR menu — a full operating system for orders, tables, guests, and growth.",
    features: [
      { title: "QR Menu", body: "Instantly update dishes and prices without printing." },
      { title: "Table Ordering", body: "Customers order from their phone directly to the kitchen." },
      { title: "Order Management", body: "Consolidate all dine-in and pickup orders in one screen." },
      { title: "Reservations", body: "Smart booking system that optimizes table turnover." },
      { title: "Table Management", body: "Live table states for occupancy and service zones." },
      { title: "Customer CRM", body: "Track preferences and repeat behavior across multiple visits." },
      { title: "Loyalty Engine", body: "Automated points and rewards to drive retention." },
      { title: "Digital Receipts", body: "Send receipts via WhatsApp or email instantly." },
      { title: "Real-time Analytics", body: "Know your bestsellers and peak hours instantly." },
      { title: "Menu Builder", body: "Drag-and-drop menu creation with multiple categories." },
      { title: "Staff Permissions", body: "Role-based access for waiters, kitchen, and admins." },
      { title: "Mini Games", body: "Keep customers engaged while they wait for their food." }
    ],
    simplePricing: "Simple pricing",
    journeyTitle: "The customer journey in 9 steps",
    journeyBody: "No app needed — just scan and enjoy a seamless experience.",
    journeySteps: [
      { title: "Scan QR", body: "Unique code for every table." },
      { title: "Choose Language", body: "Supports Arabic & English." },
      { title: "Enter Details", body: "Build your customer database." },
      { title: "Browse Menu", body: "High-res photos and descriptions." },
      { title: "Add to Cart", body: "Customize with add-ons and notes." },
      { title: "Confirm Order", body: "Sends instantly to the kitchen." },
      { title: "Request Service", body: "Call waiter or ask for the bill." },
      { title: "Digital Receipt", body: "Eco-friendly and easy to save." },
      { title: "Mini Games", body: "Wait for food with fun puzzles." }
    ],
    testimonialsTitle: "Trusted by restaurants",
    testimonials: [
      { name: "Sarah M.", role: "Cafe Owner", quote: "ZAD helped us reduce menu friction from day one. Our customers love the speed." },
      { name: "Khalid A.", role: "Restaurant Manager", quote: "Orders are more accurate and staff less stressed. The live dashboard is a game changer." },
      { name: "Nour T.", role: "Lounge Owner", quote: "Digital receipts saved hours of paperwork and improved our brand image." }
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Is ZAD truly free?",
        a: "Yes. The Free Forever plan includes QR menus, table ordering, reservations, and digital receipts with no time limit and no credit card."
      },
      {
        q: "Do customers need an app?",
        a: "No. Customers scan the QR code on their table and the full menu opens in their phone browser. Nothing to download, nothing to install."
      },
      {
        q: "How long to set up?",
        a: "Most restaurants go live in about 10 minutes: create an account, upload your menu, and print the auto-generated QR codes."
      },
      {
        q: "Arabic support included?",
        a: "Yes. ZAD is bilingual by design — customers choose Arabic or English when they scan, and your dashboard supports both."
      },
      {
        q: "Table ordering secure?",
        a: "Every table has a unique code and orders are sent over an encrypted connection straight to your kitchen display."
      },
      {
        q: "Replace paper receipts?",
        a: "Yes. Guests get a digital receipt they can view on their phone, send via WhatsApp, or download as a PDF."
      },
      {
        q: "Works for small cafes?",
        a: "Absolutely. ZAD was designed to be simple enough for a single-counter cafe and powerful enough for multi-branch chains."
      },
      {
        q: "Request custom features?",
        a: "Yes — the Custom System plan covers custom dashboards, branding, integrations, and dedicated development for your workflow."
      }
    ],
    ctaTitle: "Start your digital restaurant experience today",
    ctaBody: "Join hundreds of restaurants growing with ZAD."
  },

  setup: {
    eyebrow: "Easy Setup",
    title: "Download. Set up. Start.",
    body: "No hardware, no consultants, no waiting. Go from signup to live QR ordering in about 10 minutes.",
    steps: [
      { title: "Create Account", body: "Just 30 seconds to join ZAD." },
      { title: "Upload Menu", body: "Drag and drop your PDF or CSV." },
      { title: "Print QR Codes", body: "Auto-generated for every table." },
      { title: "Kitchen Display", body: "Orders arrive on any tablet." },
      { title: "Go Live", body: "Start accepting digital orders." }
    ],
    cta: "Set Up Your Restaurant",
    ctaNote: "Free forever · No credit card · No app for your customers"
  },

  product: {
    badge: "Restaurant Dashboard",
    title: "The command center for your restaurant",
    sub: "Orders, tables, reservations, customers, menu, analytics — in one clean dashboard.",
    kitchen: {
      eyebrow: "Kitchen Display",
      title: "Live orders from every table",
      body: "Kitchen staff see new orders instantly with sound alerts, table context, and one-click status tracking.",
      bullets: ["Real-time updates", "Status tracking", "Table context"]
    },
    reservations: {
      eyebrow: "Reservations",
      title: "Never miss a booking",
      body: "Digital reservation logs, guest history, automated confirmations, and waiting-list management keep the floor under control.",
      bullets: [
        "Digital reservation log",
        "Automated SMS confirmations",
        "Guest history and allergy tracking",
        "Google and social booking links"
      ]
    },
    tableMapEyebrow: "Table Map",
    tableMapTitle: "Full visibility at a glance",
    menuBuilder: {
      eyebrow: "Menu Builder",
      title: "Update anything, anytime",
      body: "Instant updates across QR and tablets, categories, photo-rich items, spicy tags, and dietary markers.",
      bullets: [
        "Manage seasonal availability",
        "Daily special highlights and tags",
        "Photo-rich menu descriptions",
        "Price adjustments by time of day"
      ]
    },
    analyticsEyebrow: "Analytics",
    analyticsTitle: "Data that drives decisions",
    ctaTitle: "Start managing your restaurant smarter",
    ctaBody: "Join thousands of restaurant owners using ZAD to streamline their operations and increase revenue."
  },

  features: {
    badge: "Features",
    title: "Everything your restaurant needs, organized clearly",
    sub: "Customer ordering, operations, loyalty, analytics, and sustainability tools in one ZAD workspace.",
    groupCustomer: "Customer Experience",
    groupCustomerBody: "Fast, clean experiences for guests and staff.",
    groupOperations: "Restaurant Operations",
    groupAnalytics: "Analytics & Control",
    ctaTitle: "Bring every restaurant workflow into one place",
    ctaBody: "A practical operating system built for repeated daily use."
  },

  qr: {
    badge: "No app required",
    title: "A smoother ordering experience, straight from the table",
    sub: "Customers scan, browse, order, and pay — all from their phone browser. No download. No friction.",
    seeHow: "See How It Works",
    watchDemo: "Watch Demo",
    proof: ["No app", "Any smartphone", "Arabic & English"],
    bandTitle: "No app download required",
    bandBody: "Customers scan once and they are in. The entire experience runs in their browser — on any smartphone, in Arabic or English.",
    journeyTitle: "The complete journey in 9 steps",
    journeyCards: [
      { title: "Scan QR Code", body: "Located directly on the table for instant access." },
      { title: "Choose Language", body: "Full support for Arabic and English localization." },
      { title: "Enter Name & Phone", body: "Quick identity for personalized service." },
      { title: "Browse the Menu", body: "Visual, categorized menu with high-res images." },
      { title: "Add to Cart", body: "Modify items and add notes for the chef." },
      { title: "Confirm Order", body: "Real-time kitchen transmission for faster prep." },
      { title: "Pay or Request Waiter", body: "Digital payment or call staff with one tap." },
      { title: "Digital Receipt", body: "Instant confirmation that stays on their phone." },
      { title: "Play Mini Games", body: "Premium games to keep customers engaged." }
    ],
    waiter: {
      eyebrow: "Waiter Call",
      title: "One tap to call your waiter",
      body: "Empower your guests to get attention when they need it without searching for staff.",
      bullets: [
        "Reduces shouting and waving across the floor",
        "Notifies staff devices instantly with table number",
        "Improves guest satisfaction in busy hours"
      ]
    },
    receiptEyebrow: "Digital Receipt",
    receiptTitle: "Receipts that never get lost",
    receiptActions: [
      { title: "View on phone", body: "Instant access to current and past orders." },
      { title: "Send via WhatsApp", body: "Instant access to current and past orders." },
      { title: "Download PDF", body: "Instant access to current and past orders." }
    ],
    gamesTitle: "Stay entertained while your food is prepared",
    gamesBody: "Built-in mini games — a premium engagement feature that turns waiting into part of the fun.",
    gameCards: [
      { title: "Makes Waiting Shorter", body: "Transform dead time into an engaging experience." },
      { title: "Loyalty Connection", body: "Reward high scores with loyalty points or dessert." },
      { title: "Memorable Experience", body: "Stand out from competition with premium entertainment." }
    ],
    forRestaurantsTitle: "For Restaurants",
    forRestaurants: [
      "Lightning fast ordering",
      "Reduced labor costs",
      "Automatic upsells",
      "Visual menu upsells",
      "Detailed analytics"
    ],
    forCustomersTitle: "For Customers",
    forCustomers: [
      "No app to download",
      "Arabic & English support",
      "Call waiter in one tap",
      "Digital payment options",
      "Built-in mini games"
    ],
    ctaTitle: "Set up QR ordering for your restaurant today",
    ctaBody: "Takes less than 10 minutes to go live."
  },

  pricing: {
    badge: "Pricing",
    title: "Simple, honest pricing",
    sub: "Start free. No credit card. No setup fee.",
    proof: ["Free forever", "No hidden fees", "Cancel anytime"],
    freeName: "Free Forever",
    freePerMonth: "/month",
    freeDesc: "Ideal for small restaurants and food trucks starting their digital journey.",
    freeFeatures: [
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
    ],
    freeNote: "Always free. No time limit.",
    mostPopular: "Most Popular",
    customName: "Custom System",
    customPrice: "Contact Us",
    customDesc: "Enterprise solutions for multi-branch restaurants and franchise chains.",
    customFeatures: [
      "Everything in Free Forever",
      "Custom Dashboard",
      "Custom Branding",
      "Multi-Branch",
      "POS Integrations",
      "Advanced Analytics",
      "Dedicated Support",
      "Custom Development"
    ],
    customNote: "Tailored to your restaurant.",
    enterprise: "Enterprise",
    compareTitle: "Compare plans in detail",
    compareFeature: "Feature",
    compareRows: [
      "QR Menu",
      "Table Ordering",
      "Menu Management",
      "Order Dashboard",
      "Reservations",
      "Digital Receipts",
      "Analytics",
      "Custom Dashboard",
      "Custom Branding",
      "Multi-Branch",
      "POS Integration",
      "Dedicated Support"
    ],
    included: "Included",
    notIncluded: "Not included",
    faqTitle: "Pricing questions answered",
    faqs: [
      { q: "Is ZAD really free?", a: "Yes, our Free Forever plan includes basic ordering and menu features with no time limit." },
      { q: "No credit card required?", a: "No credit card is required to sign up for the free plan. Start your restaurant immediately." },
      { q: "Can I upgrade later?", a: "You can switch to a custom enterprise plan anytime your restaurant needs more advanced features." },
      { q: "Is there a setup fee?", a: "There are zero setup fees for ZAD. Our self-serve dashboard lets you go live in minutes." },
      { q: "Does free include QR ordering?", a: "Absolutely. Every ZAD user gets a high-speed QR menu and table ordering out of the box." },
      { q: "Support multi-branch?", a: "Multi-branch and central kitchen management are available on our Custom System plan." },
      { q: "How is Custom priced?", a: "Custom pricing depends on branch count, integrations, and development requirements." },
      { q: "What if I outgrow free?", a: "Contact our sales team for a quote that matches your restaurant scale and complexity." }
    ],
    ctaTitle: "Start your free restaurant today",
    ctaBody: "No credit card. No setup fee. Join 20k+ global operators."
  },

  impact: {
    badge: "Impact",
    title: "Less paper, fewer mistakes, faster service",
    sub: "ZAD helps restaurants reduce waste and grow with better guest data, cleaner operations, and simpler workflows.",
    stats: [
      { value: "80%", label: "less menu printing" },
      { value: "10 min", label: "average setup time" },
      { value: "24/7", label: "digital ordering" },
      { value: "0", label: "app downloads needed" }
    ],
    split: {
      eyebrow: "For your restaurant",
      title: "Operational clarity at the exact moment you need it",
      body: "Replace manual steps with live order data, automatic receipts, and customer profiles that are easy to act on.",
      bullets: [
        "More accurate orders",
        "Lower paper waste",
        "Better repeat-customer insight",
        "A calmer service rhythm"
      ]
    },
    ctaTitle: "Make your restaurant easier to run",
    ctaBody: "Start with the free plan and grow into the tools you need."
  },

  about: {
    badge: "About ZAD",
    title: "Built for modern restaurants in the region and beyond",
    sub: "We believe powerful restaurant software should be simple to start, affordable to keep, and respectful of how real teams work.",
    mission: {
      eyebrow: "Mission",
      title: "Give every restaurant an operating system",
      body: "From reservation to digital receipt, ZAD connects the customer journey with back-of-house control.",
      bullets: [
        "Free to start",
        "Quick setup in 10 minutes",
        "Arabic and English by design",
        "Built in Amman, Jordan"
      ]
    },
    ctaTitle: "Start for free and grow with precision",
    ctaBody: "Download. Set up. Start. ZAD keeps the first step simple."
  },

  contact: {
    badge: "Contact",
    title: "Let us help you set up your restaurant",
    sub: "Tell us what you need and the ZAD team will help you launch your digital restaurant workflow.",
    location: "Amman, Jordan",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    restaurantLabel: "Restaurant name",
    restaurantPlaceholder: "Restaurant or cafe",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "+962 7 0000 0000",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your restaurant",
    send: "Send Message",
    successTitle: "Message sent",
    successBody: "Thanks — our team will contact you soon.",
    sendAnother: "Send another message",
    faqs: [
      { q: "How fast can we start?", a: "You can register your account and build your digital menu in under 10 minutes." },
      { q: "Is there a setup fee?", a: "Absolutely none. Getting started with ZAD Restaurant OS is completely free." }
    ],
    ctaTitle: "Start free or talk to our team",
    ctaBody: "Transform your physical restaurant into a fully automated digital enterprise starting today."
  },

  auth: {
    brandFree: "Free Forever",
    brandOs: "Restaurant OS",
    loginTitle: "Welcome back.",
    loginSub: "Sign in to your dashboard.",
    signupTitle: "Create your account.",
    signupSub: "Request your free restaurant workspace — our team activates it right away.",
    forgotTitle: "Reset password.",
    forgotSub: "We will send reset instructions.",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Your full name",
    emailLabel: "Email address",
    emailPlaceholder: "Email address",
    restaurantLabel: "Restaurant name",
    restaurantPlaceholder: "Restaurant or cafe",
    passwordLabel: "Password",
    passwordPlaceholder: "Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    terms: "I agree to Terms and Privacy Policy",
    createAccount: "Create Account",
    signIn: "Sign In",
    sendResetLink: "Send Reset Link",
    or: "or",
    google: "Continue with Google",
    haveAccount: "Already have an account? ",
    noAccount: "No account? ",
    backToSignIn: "Back to Sign In",
    resetSentTitle: "Check your inbox",
    resetSentBody: "If an account exists for that email, reset instructions are on the way.",
    showPassword: "Show password",
    hidePassword: "Hide password"
  },

  onboarding: {
    sideTitle: "Set up your restaurant",
    sideSub: "Five short steps to go from account to live QR ordering.",
    progressLabel: "Setup progress",
    q1Label: "What's your restaurant called?",
    q1Placeholder: "e.g. The Burger House",
    menuSmall: "Small · under 20 items",
    menuMedium: "Medium · 20–60 items",
    menuLarge: "Large · 60+ items",
    menuSizeAria: "Menu size",
    menuWordSmall: "small menu",
    menuWordMedium: "medium menu",
    menuWordLarge: "large menu",
    q3Label: "How many tables do you have?",
    kitchenAria: "Kitchen display availability",
    kitchenYes: "Yes, we have a tablet",
    kitchenNo: "Not yet",
    tablesWord: "tables",
    kitchenLabel: "kitchen display",
    yes: "yes",
    notYet: "not yet",
    continueSetup: "Continue Setup",
    finishSetup: "Finish Setup",
    doneTitle: "You're all set",
    doneBodyBefore: "We saved your setup for ",
    doneBodyAfter: ". Our team will reach out to get you live.",
    backToZad: "Back to ZAD"
  },

  notFound: {
    badge: "404",
    title: "This page is off the menu",
    sub: "The page you're looking for doesn't exist or has moved.",
    contactUs: "Contact Us"
  },

  errors: {
    network: "We couldn't reach the server — please check your connection and try again.",
    generic: "Something went wrong — please try again.",
    validation: "Please fix the highlighted fields and try again.",
    rateLimited: "Too many requests — please try again in a minute.",
    required: "This field is required.",
    tooLong: "This value is too long.",
    invalidEmail: "Enter a valid email address.",
    invalidPhone: "Enter a valid phone number.",
    invalidValue: "Enter a valid value.",
    tableRange: "Table count must be between 1 and 500.",
    chooseOption: "Choose one of the options."
  },

  mockups: {
    dashboardOverview: "Dashboard Overview",
    burgerHouse: "The Burger House",
    zadRestaurantOs: "ZAD Restaurant OS",
    sidebar: ["Dashboard", "Orders", "Customers", "Loyalty", "Analytics", "Settings"],
    poweredBy: "Powered by ZAD v1.0",
    ordersToday: "Orders Today",
    activeTables: "Active Tables",
    reservations: "Reservations",
    revenue: "Revenue",
    orderNo: "Order #",
    customer: "Customer",
    status: "Status",
    total: "Total",
    statusNew: "NEW",
    statusPreparing: "PREPARING",
    statusReady: "READY",
    statusPending: "PENDING",
    statusActive: "ACTIVE",
    statusConfirmed: "CONFIRMED",
    customerNames: ["Saleh Al-Omari", "Lina Haddad", "Ahmad Zaid"],
    notifNewOrderTitle: "New order",
    notifNewOrderBody: "Table 12 · 3 items",
    notifWaiterTitle: "Waiter call",
    notifWaiterBody: "Table 04 needs service",
    kitchenTabs: ["All", "Pending", "Active", "Ready"],
    itemsWord: "items",
    tableWord: "Table",
    tonight: "Tonight · Jul 6",
    newBooking: "+ New Booking",
    guestNames: ["Ahmed Al-Rashid", "Sara Ibrahim", "Marco Rossi"],
    tableAvailable: "available",
    tableOccupied: "occupied",
    tableReserved: "reserved",
    tableUnavailable: "unavailable",
    menuTabs: ["Starters", "Mains", "Desserts", "Drinks"],
    menuItems: ["Classic Cheese Burger", "Swiss Mushroom Burger", "Spicy Zinger Meal"],
    availabilityAria: "availability",
    avgCheck: "Avg Check",
    newCustomers: "New Customers",
    weeklyRevenue: "Weekly Revenue",
    topSelling: "Top Selling Items",
    topItems: ["Chicken Shawarma", "Beef Burger", "Caesar Salad"],
    readyToOrder: "Ready To Order?",
    scanQr: "Scan QR",
    digitalReceipt: "Digital Receipt",
    receiptItems: ["Burger", "Dish Bowl", "Latte", "Subtotal"],
    sendWhatsApp: "Send via WhatsApp",
    waiterTabs: ["Appetizers", "Main", "Drinks"],
    needHelp: "Need help at Table 09?",
    callWaiter: "Call Waiter",
    paperReceipt: "PAPER RECEIPT",
    paperTotal: "Total · $17.50"
  }
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer U)[]
      ? U extends string
        ? readonly string[]
        : readonly DeepStringify<U>[]
      : DeepStringify<T[K]>;
};

// Widened shape: locale files provide the same structure with their own strings.
export type Messages = DeepStringify<typeof en>;
