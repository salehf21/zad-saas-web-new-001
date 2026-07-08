// German locale. Structure mirrors `en` and is type-checked against `Messages`.

import type { Messages } from "./en";

export const de: Messages = {
  common: {
    startForFree: "Kostenlos starten",
    login: "Anmelden",
    bookADemo: "Demo buchen",
    contactUs: "Kontakt aufnehmen",
    contactSales: "Vertrieb kontaktieren",
    viewDashboard: "Dashboard ansehen",
    tryForFree: "Kostenlos testen",
    backToHome: "Zurück zur Startseite",
    sending: "Wird gesendet…",
    pleaseWait: "Bitte warten…",
    saving: "Wird gespeichert…",
    back: "Zurück",
    zadHome: "ZAD Startseite"
  },

  nav: {
    product: "Produkt",
    features: "Funktionen",
    qrOrdering: "QR-Bestellung",
    pricing: "Preise",
    impact: "Wirkung",
    about: "Über uns",
    environment: "Umwelt",
    primaryNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen"
  },

  footer: {
    blurb: "Das komplette digitale Betriebssystem für moderne Restaurants, Cafés und Lounges.",
    colProduct: "Produkt",
    colCompany: "Unternehmen",
    colGetStarted: "Loslegen",
    colSocial: "Social Media",
    linkFeatures: "Funktionen",
    linkQrOrdering: "QR-Bestellung",
    linkPricing: "Preise",
    linkAbout: "Über uns",
    linkImpact: "Wirkung",
    linkContact: "Kontakt",
    linkEnvironment: "ZAD & die Umwelt",
    linkStartForFree: "Kostenlos starten",
    linkLogin: "Anmelden",
    linkBookDemo: "Demo buchen",
    copyright: "© 2026 ZAD. Alle Rechte vorbehalten.",
    builtIn: "Entwickelt in Amman, Jordanien",
    language: "Sprache"
  },

  langPopup: {
    title: "Wählen Sie Ihre Sprache",
    sub: "ZAD spricht Ihre Sprache. Sie können sie jederzeit im Footer ändern.",
    suggested: "Empfohlen",
    continueLabel: "Weiter"
  },

  home: {
    badge: "Restaurant-Betriebssystem",
    titleDesktop: "Führen Sie Ihr Restaurant mit einem digitalen Betriebssystem",
    titleMobile: "Das Restaurant-Betriebssystem",
    subDesktop: "QR-Bestellung, Speisekarten, Reservierungen, Tische, Treueprogramm und Analysen — alles an einem Ort.",
    subMobile: "QR-Bestellung, Tische, Treueprogramm und Belege — alles in ZAD.",
    setupLine: "Herunterladen. Einrichten. Loslegen.",
    proof: ["Keine App erforderlich", "Dauerhaft kostenlos", "Entwickelt für Restaurants & Cafés"],
    problemEyebrow: "Das Problem",
    problemTitle: "Ein Restaurant zu führen ist schwieriger, als es sein müsste",
    problems: [
      { title: "Veraltete Papier-Speisekarten", body: "Hohe Druckkosten und lange Wartezeiten bei jeder Änderung." },
      { title: "Langsame Bestellprozesse", body: "Übertragungsfehler zwischen Tisch und Küche." },
      { title: "Überlastetes Servicepersonal", body: "Mitarbeiter verbringen Zeit mit Dateneingabe statt mit Gästen." },
      { title: "Chaotische Reservierungen", body: "Verlorene Notizbücher und Doppelbuchungen ruinieren das Gästeerlebnis." },
      { title: "Verlorene Kundendaten", body: "Keine Möglichkeit, Ihre Stammgäste zu erkennen und zu belohnen." },
      { title: "Belegverschwendung", body: "Umweltbelastung und endlose Thermopapierrollen." },
      { title: "Keine Analysen", body: "Sie steuern Ihr Geschäft nach Bauchgefühl statt nach echten Daten." }
    ],
    solutionTitle: "ZAD löst all das",
    solutionItems: [
      "QR-Speisekarte",
      "Tischbestellung",
      "Kellnerruf",
      "Live-Bestellungen",
      "Reservierungen",
      "Tischverwaltung",
      "Kundenprofile",
      "Digitale Belege",
      "Treueprogramm",
      "Analysen"
    ],
    featuresTitle: "Alles, was ein modernes Restaurant braucht",
    featuresBody: "Nicht nur eine QR-Speisekarte — ein komplettes Betriebssystem für Bestellungen, Tische, Gäste und Wachstum.",
    features: [
      { title: "QR-Speisekarte", body: "Gerichte und Preise sofort aktualisieren — ganz ohne Druck." },
      { title: "Tischbestellung", body: "Gäste bestellen per Smartphone direkt in die Küche." },
      { title: "Bestellverwaltung", body: "Alle Bestellungen vor Ort und zum Abholen auf einem Bildschirm." },
      { title: "Reservierungen", body: "Intelligentes Buchungssystem für optimale Tischauslastung." },
      { title: "Tischverwaltung", body: "Tischstatus in Echtzeit für Belegung und Servicebereiche." },
      { title: "Kunden-CRM", body: "Vorlieben und Wiederkehrverhalten über mehrere Besuche hinweg erfassen." },
      { title: "Treueprogramm", body: "Automatisierte Punkte und Prämien für mehr Kundenbindung." },
      { title: "Digitale Belege", body: "Belege sofort per WhatsApp oder E-Mail versenden." },
      { title: "Echtzeit-Analysen", body: "Bestseller und Stoßzeiten auf einen Blick erkennen." },
      { title: "Speisekarten-Editor", body: "Speisekarten per Drag-and-drop mit mehreren Kategorien erstellen." },
      { title: "Mitarbeiterrechte", body: "Rollenbasierter Zugriff für Service, Küche und Administration." },
      { title: "Minispiele", body: "Unterhalten Sie Ihre Gäste, während sie auf ihr Essen warten." }
    ],
    simplePricing: "Einfache Preise",
    journeyTitle: "Die Customer Journey in 9 Schritten",
    journeyBody: "Keine App nötig — einfach scannen und ein nahtloses Erlebnis genießen.",
    journeySteps: [
      { title: "QR scannen", body: "Ein eindeutiger Code für jeden Tisch." },
      { title: "Sprache wählen", body: "Unterstützt Arabisch & Englisch." },
      { title: "Daten eingeben", body: "Bauen Sie Ihre Kundendatenbank auf." },
      { title: "Speisekarte durchstöbern", body: "Hochauflösende Fotos und Beschreibungen." },
      { title: "In den Warenkorb", body: "Mit Extras und Anmerkungen individualisieren." },
      { title: "Bestellung bestätigen", body: "Wird sofort an die Küche gesendet." },
      { title: "Service anfordern", body: "Kellner rufen oder die Rechnung verlangen." },
      { title: "Digitaler Beleg", body: "Umweltfreundlich und leicht zu speichern." },
      { title: "Minispiele", body: "Die Wartezeit mit unterhaltsamen Rätseln verkürzen." }
    ],
    testimonialsTitle: "Restaurants vertrauen uns",
    testimonials: [
      { name: "Sarah M.", role: "Café-Inhaberin", quote: "ZAD hat uns vom ersten Tag an das Speisekarten-Handling erleichtert. Unsere Gäste lieben das Tempo." },
      { name: "Khalid A.", role: "Restaurantleiter", quote: "Bestellungen sind präziser und das Team entspannter. Das Live-Dashboard ist ein echter Gamechanger." },
      { name: "Nour T.", role: "Lounge-Inhaberin", quote: "Digitale Belege haben uns Stunden an Papierkram erspart und unser Markenimage gestärkt." }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Ist ZAD wirklich kostenlos?",
        a: "Ja. Der Dauerhaft-kostenlos-Tarif umfasst QR-Speisekarten, Tischbestellung, Reservierungen und digitale Belege — ohne Zeitlimit und ohne Kreditkarte."
      },
      {
        q: "Brauchen Gäste eine App?",
        a: "Nein. Gäste scannen den QR-Code am Tisch und die komplette Speisekarte öffnet sich im Browser ihres Smartphones. Nichts herunterladen, nichts installieren."
      },
      {
        q: "Wie lange dauert die Einrichtung?",
        a: "Die meisten Restaurants sind in etwa 10 Minuten startklar: Konto erstellen, Speisekarte hochladen und die automatisch generierten QR-Codes ausdrucken."
      },
      {
        q: "Ist Arabisch enthalten?",
        a: "Ja. ZAD ist von Grund auf zweisprachig — Gäste wählen beim Scannen Arabisch oder Englisch, und Ihr Dashboard unterstützt beides."
      },
      {
        q: "Ist die Tischbestellung sicher?",
        a: "Jeder Tisch hat einen eindeutigen Code, und Bestellungen werden über eine verschlüsselte Verbindung direkt an Ihr Küchendisplay übertragen."
      },
      {
        q: "Ersetzt ZAD Papierbelege?",
        a: "Ja. Gäste erhalten einen digitalen Beleg, den sie auf dem Smartphone ansehen, per WhatsApp versenden oder als PDF herunterladen können."
      },
      {
        q: "Funktioniert es für kleine Cafés?",
        a: "Absolut. ZAD ist einfach genug für ein kleines Café mit einer Theke und leistungsstark genug für Ketten mit mehreren Standorten."
      },
      {
        q: "Sind individuelle Funktionen möglich?",
        a: "Ja — der Individuallösungs-Tarif umfasst maßgeschneiderte Dashboards, Branding, Integrationen und dedizierte Entwicklung für Ihre Abläufe."
      }
    ],
    ctaTitle: "Starten Sie noch heute Ihr digitales Restauranterlebnis",
    ctaBody: "Schließen Sie sich Hunderten Restaurants an, die mit ZAD wachsen."
  },

  setup: {
    eyebrow: "Einfache Einrichtung",
    title: "Herunterladen. Einrichten. Loslegen.",
    body: "Keine Hardware, keine Berater, keine Wartezeit. Von der Registrierung zur aktiven QR-Bestellung in rund 10 Minuten.",
    steps: [
      { title: "Konto erstellen", body: "In nur 30 Sekunden bei ZAD dabei." },
      { title: "Speisekarte hochladen", body: "Einfach Ihre PDF- oder CSV-Datei ablegen." },
      { title: "QR-Codes drucken", body: "Automatisch für jeden Tisch generiert." },
      { title: "Küchendisplay", body: "Bestellungen erscheinen auf jedem Tablet." },
      { title: "Live gehen", body: "Digitale Bestellungen entgegennehmen." }
    ],
    cta: "Restaurant einrichten",
    ctaNote: "Dauerhaft kostenlos · Keine Kreditkarte · Keine App für Ihre Gäste"
  },

  product: {
    badge: "Restaurant-Dashboard",
    title: "Die Kommandozentrale für Ihr Restaurant",
    sub: "Bestellungen, Tische, Reservierungen, Kunden, Speisekarte, Analysen — in einem übersichtlichen Dashboard.",
    kitchen: {
      eyebrow: "Küchendisplay",
      title: "Live-Bestellungen von jedem Tisch",
      body: "Das Küchenteam sieht neue Bestellungen sofort — mit Tonsignal, Tischkontext und Statusverfolgung per Klick.",
      bullets: ["Echtzeit-Updates", "Statusverfolgung", "Tischkontext"]
    },
    reservations: {
      eyebrow: "Reservierungen",
      title: "Keine Buchung mehr verpassen",
      body: "Digitales Reservierungsbuch, Gästehistorie, automatische Bestätigungen und Wartelistenverwaltung halten den Betrieb unter Kontrolle.",
      bullets: [
        "Digitales Reservierungsbuch",
        "Automatische SMS-Bestätigungen",
        "Gästehistorie und Allergie-Hinweise",
        "Buchungslinks für Google und Social Media"
      ]
    },
    tableMapEyebrow: "Tischplan",
    tableMapTitle: "Volle Übersicht auf einen Blick",
    menuBuilder: {
      eyebrow: "Speisekarten-Editor",
      title: "Alles aktualisieren, jederzeit",
      body: "Sofortige Updates auf QR und Tablets, Kategorien, bildstarke Gerichte, Schärfe-Kennzeichnungen und Ernährungshinweise.",
      bullets: [
        "Saisonale Verfügbarkeit verwalten",
        "Tagesangebote hervorheben und taggen",
        "Bildstarke Gerichtbeschreibungen",
        "Preisanpassungen nach Tageszeit"
      ]
    },
    analyticsEyebrow: "Analysen",
    analyticsTitle: "Daten, die Entscheidungen vorantreiben",
    ctaTitle: "Führen Sie Ihr Restaurant ab jetzt smarter",
    ctaBody: "Schließen Sie sich Tausenden Gastronomen an, die mit ZAD ihre Abläufe optimieren und ihren Umsatz steigern."
  },

  features: {
    badge: "Funktionen",
    title: "Alles, was Ihr Restaurant braucht — klar strukturiert",
    sub: "Gästebestellung, Betriebsabläufe, Treueprogramm, Analysen und Nachhaltigkeits-Tools in einem ZAD-Arbeitsbereich.",
    groupCustomer: "Gästeerlebnis",
    groupCustomerBody: "Schnelle, reibungslose Abläufe für Gäste und Team.",
    groupOperations: "Restaurantbetrieb",
    groupAnalytics: "Analysen & Kontrolle",
    ctaTitle: "Bündeln Sie alle Restaurant-Workflows an einem Ort",
    ctaBody: "Ein praxisnahes Betriebssystem für den täglichen Einsatz."
  },

  qr: {
    badge: "Keine App erforderlich",
    title: "Ein reibungsloseres Bestellerlebnis, direkt vom Tisch",
    sub: "Gäste scannen, stöbern, bestellen und bezahlen — alles im Smartphone-Browser. Kein Download. Keine Hürden.",
    seeHow: "So funktioniert es",
    watchDemo: "Demo ansehen",
    proof: ["Keine App", "Jedes Smartphone", "Arabisch & Englisch"],
    bandTitle: "Kein App-Download erforderlich",
    bandBody: "Gäste scannen einmal und sind sofort dabei. Das gesamte Erlebnis läuft im Browser — auf jedem Smartphone, auf Arabisch oder Englisch.",
    journeyTitle: "Der komplette Ablauf in 9 Schritten",
    journeyCards: [
      { title: "QR-Code scannen", body: "Direkt am Tisch für sofortigen Zugriff." },
      { title: "Sprache wählen", body: "Vollständige Lokalisierung auf Arabisch und Englisch." },
      { title: "Name & Telefon eingeben", body: "Schnelle Identifikation für persönlichen Service." },
      { title: "Speisekarte durchstöbern", body: "Visuelle, kategorisierte Speisekarte mit hochauflösenden Bildern." },
      { title: "In den Warenkorb", body: "Gerichte anpassen und Hinweise für die Küche hinterlassen." },
      { title: "Bestellung bestätigen", body: "Echtzeit-Übertragung an die Küche für schnellere Zubereitung." },
      { title: "Bezahlen oder Kellner rufen", body: "Digitale Zahlung oder Personal mit einem Tipp rufen." },
      { title: "Digitaler Beleg", body: "Sofortige Bestätigung, die auf dem Smartphone bleibt." },
      { title: "Minispiele spielen", body: "Hochwertige Spiele, die Gäste unterhalten." }
    ],
    waiter: {
      eyebrow: "Kellnerruf",
      title: "Ein Tipp genügt, um den Kellner zu rufen",
      body: "Ihre Gäste erhalten Aufmerksamkeit genau dann, wenn sie sie brauchen — ohne nach Personal suchen zu müssen.",
      bullets: [
        "Weniger Rufen und Winken im Gastraum",
        "Benachrichtigt Mitarbeitergeräte sofort mit Tischnummer",
        "Höhere Gästezufriedenheit in Stoßzeiten"
      ]
    },
    receiptEyebrow: "Digitaler Beleg",
    receiptTitle: "Belege, die nie verloren gehen",
    receiptActions: [
      { title: "Auf dem Smartphone ansehen", body: "Sofortiger Zugriff auf aktuelle und frühere Bestellungen." },
      { title: "Per WhatsApp senden", body: "Sofortiger Zugriff auf aktuelle und frühere Bestellungen." },
      { title: "Als PDF herunterladen", body: "Sofortiger Zugriff auf aktuelle und frühere Bestellungen." }
    ],
    gamesTitle: "Beste Unterhaltung, während das Essen zubereitet wird",
    gamesBody: "Integrierte Minispiele — ein Premium-Feature, das die Wartezeit zum Teil des Erlebnisses macht.",
    gameCards: [
      { title: "Verkürzt die Wartezeit", body: "Verwandeln Sie Leerlauf in ein unterhaltsames Erlebnis." },
      { title: "Verknüpft mit dem Treueprogramm", body: "Belohnen Sie Highscores mit Treuepunkten oder einem Dessert." },
      { title: "Unvergessliches Erlebnis", body: "Heben Sie sich mit Premium-Unterhaltung vom Wettbewerb ab." }
    ],
    forRestaurantsTitle: "Für Restaurants",
    forRestaurants: [
      "Blitzschnelle Bestellungen",
      "Geringere Personalkosten",
      "Automatische Zusatzverkäufe",
      "Visuelle Verkaufsanreize in der Speisekarte",
      "Detaillierte Analysen"
    ],
    forCustomersTitle: "Für Gäste",
    forCustomers: [
      "Keine App zum Herunterladen",
      "Unterstützung für Arabisch & Englisch",
      "Kellnerruf mit einem Tipp",
      "Digitale Zahlungsoptionen",
      "Integrierte Minispiele"
    ],
    ctaTitle: "Richten Sie noch heute QR-Bestellung für Ihr Restaurant ein",
    ctaBody: "In weniger als 10 Minuten startklar."
  },

  pricing: {
    badge: "Preise",
    title: "Einfache, faire Preise",
    sub: "Kostenlos starten. Keine Kreditkarte. Keine Einrichtungsgebühr.",
    proof: ["Dauerhaft kostenlos", "Keine versteckten Kosten", "Jederzeit kündbar"],
    freeName: "Dauerhaft kostenlos",
    freePerMonth: "/Monat",
    freeDesc: "Ideal für kleine Restaurants und Foodtrucks am Anfang ihrer digitalen Reise.",
    freeFeatures: [
      "Digitale QR-Speisekarte",
      "Tischbestellung",
      "Speisekartenverwaltung",
      "Bestell-Dashboard",
      "Reservierungen",
      "Tischverwaltung",
      "Digitale Belege",
      "Basis-Analysen",
      "Kundenprofile",
      "Treueprogramm-Basis"
    ],
    freeNote: "Immer kostenlos. Ohne Zeitlimit.",
    mostPopular: "Am beliebtesten",
    customName: "Individuallösung",
    customPrice: "Kontakt aufnehmen",
    customDesc: "Enterprise-Lösungen für Restaurants mit mehreren Standorten und Franchise-Ketten.",
    customFeatures: [
      "Alles aus Dauerhaft kostenlos",
      "Individuelles Dashboard",
      "Individuelles Branding",
      "Mehrere Standorte",
      "POS-Integrationen",
      "Erweiterte Analysen",
      "Dedizierter Support",
      "Individuelle Entwicklung"
    ],
    customNote: "Maßgeschneidert für Ihr Restaurant.",
    enterprise: "Enterprise",
    compareTitle: "Tarife im Detail vergleichen",
    compareFeature: "Funktion",
    compareRows: [
      "QR-Speisekarte",
      "Tischbestellung",
      "Speisekartenverwaltung",
      "Bestell-Dashboard",
      "Reservierungen",
      "Digitale Belege",
      "Analysen",
      "Individuelles Dashboard",
      "Individuelles Branding",
      "Mehrere Standorte",
      "POS-Integration",
      "Dedizierter Support"
    ],
    included: "Enthalten",
    notIncluded: "Nicht enthalten",
    faqTitle: "Antworten auf Ihre Preisfragen",
    faqs: [
      { q: "Ist ZAD wirklich kostenlos?", a: "Ja, unser Dauerhaft-kostenlos-Tarif umfasst grundlegende Bestell- und Speisekartenfunktionen ohne Zeitlimit." },
      { q: "Keine Kreditkarte erforderlich?", a: "Für den kostenlosen Tarif ist keine Kreditkarte nötig. Starten Sie sofort mit Ihrem Restaurant." },
      { q: "Kann ich später upgraden?", a: "Sie können jederzeit auf einen individuellen Enterprise-Tarif wechseln, sobald Ihr Restaurant mehr Funktionen benötigt." },
      { q: "Gibt es eine Einrichtungsgebühr?", a: "Bei ZAD fallen keinerlei Einrichtungsgebühren an. Mit unserem Self-Service-Dashboard sind Sie in Minuten startklar." },
      { q: "Enthält der kostenlose Tarif QR-Bestellung?", a: "Absolut. Jeder ZAD-Nutzer erhält eine schnelle QR-Speisekarte und Tischbestellung direkt ab Start." },
      { q: "Werden mehrere Standorte unterstützt?", a: "Mehrere Standorte und zentrale Küchenverwaltung sind im Individuallösungs-Tarif verfügbar." },
      { q: "Wie wird die Individuallösung berechnet?", a: "Der Preis richtet sich nach Standortanzahl, Integrationen und Entwicklungsanforderungen." },
      { q: "Was, wenn der kostenlose Tarif nicht mehr reicht?", a: "Kontaktieren Sie unser Vertriebsteam für ein Angebot, das zu Größe und Komplexität Ihres Restaurants passt." }
    ],
    ctaTitle: "Starten Sie noch heute kostenlos mit Ihrem Restaurant",
    ctaBody: "Keine Kreditkarte. Keine Einrichtungsgebühr. Über 20.000 Betriebe weltweit vertrauen uns."
  },

  impact: {
    badge: "Wirkung",
    title: "Weniger Papier, weniger Fehler, schnellerer Service",
    sub: "ZAD hilft Restaurants, Abfall zu reduzieren und mit besseren Gästedaten, klareren Abläufen und einfacheren Workflows zu wachsen.",
    stats: [
      { value: "80%", label: "weniger Speisekartendruck" },
      { value: "10 Min.", label: "durchschnittliche Einrichtungszeit" },
      { value: "24/7", label: "digitale Bestellungen" },
      { value: "0", label: "App-Downloads erforderlich" }
    ],
    split: {
      eyebrow: "Für Ihr Restaurant",
      title: "Operative Klarheit genau dann, wenn Sie sie brauchen",
      body: "Ersetzen Sie manuelle Schritte durch Live-Bestelldaten, automatische Belege und Kundenprofile, mit denen Sie sofort arbeiten können.",
      bullets: [
        "Präzisere Bestellungen",
        "Weniger Papierabfall",
        "Bessere Einblicke in Stammgäste",
        "Ein ruhigerer Servicerhythmus"
      ]
    },
    ctaTitle: "Machen Sie Ihr Restaurant einfacher zu führen",
    ctaBody: "Starten Sie mit dem kostenlosen Tarif und wachsen Sie in die Tools hinein, die Sie brauchen."
  },

  about: {
    badge: "Über ZAD",
    title: "Entwickelt für moderne Restaurants in der Region und darüber hinaus",
    sub: "Wir sind überzeugt: Leistungsstarke Restaurant-Software sollte einfach zu starten, bezahlbar zu behalten und auf echte Teams zugeschnitten sein.",
    mission: {
      eyebrow: "Mission",
      title: "Jedem Restaurant ein Betriebssystem geben",
      body: "Von der Reservierung bis zum digitalen Beleg verbindet ZAD die Customer Journey mit der Kontrolle im Hintergrund.",
      bullets: [
        "Kostenloser Start",
        "Schnelle Einrichtung in 10 Minuten",
        "Arabisch und Englisch von Grund auf",
        "Entwickelt in Amman, Jordanien"
      ]
    },
    ctaTitle: "Kostenlos starten und präzise wachsen",
    ctaBody: "Herunterladen. Einrichten. Loslegen. Mit ZAD bleibt der erste Schritt einfach."
  },

  contact: {
    badge: "Kontakt",
    title: "Wir helfen Ihnen bei der Einrichtung Ihres Restaurants",
    sub: "Sagen Sie uns, was Sie brauchen — das ZAD-Team unterstützt Sie beim Start Ihres digitalen Restaurant-Workflows.",
    location: "Amman, Jordanien",
    nameLabel: "Vollständiger Name",
    namePlaceholder: "Ihr Name",
    restaurantLabel: "Name des Restaurants",
    restaurantPlaceholder: "Restaurant oder Café",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "sie@beispiel.de",
    phoneLabel: "Telefon (optional)",
    phonePlaceholder: "+962 7 0000 0000",
    messageLabel: "Nachricht",
    messagePlaceholder: "Erzählen Sie uns von Ihrem Restaurant",
    send: "Nachricht senden",
    successTitle: "Nachricht gesendet",
    successBody: "Vielen Dank — unser Team meldet sich in Kürze bei Ihnen.",
    sendAnother: "Weitere Nachricht senden",
    faqs: [
      { q: "Wie schnell können wir starten?", a: "Sie können Ihr Konto registrieren und Ihre digitale Speisekarte in unter 10 Minuten erstellen." },
      { q: "Gibt es eine Einrichtungsgebühr?", a: "Nein, keinerlei. Der Start mit dem ZAD Restaurant OS ist vollständig kostenlos." }
    ],
    ctaTitle: "Kostenlos starten oder mit unserem Team sprechen",
    ctaBody: "Verwandeln Sie Ihr Restaurant noch heute in einen vollständig automatisierten digitalen Betrieb."
  },

  auth: {
    brandFree: "Dauerhaft kostenlos",
    brandOs: "Restaurant OS",
    loginTitle: "Willkommen zurück.",
    loginSub: "Melden Sie sich in Ihrem Dashboard an.",
    signupTitle: "Erstellen Sie Ihr Konto.",
    signupSub: "Fordern Sie Ihren kostenlosen Restaurant-Arbeitsbereich an — unser Team schaltet ihn umgehend frei.",
    forgotTitle: "Passwort zurücksetzen.",
    forgotSub: "Wir senden Ihnen eine Anleitung zum Zurücksetzen.",
    fullNameLabel: "Vollständiger Name",
    fullNamePlaceholder: "Ihr vollständiger Name",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "E-Mail-Adresse",
    restaurantLabel: "Name des Restaurants",
    restaurantPlaceholder: "Restaurant oder Café",
    passwordLabel: "Passwort",
    passwordPlaceholder: "Passwort",
    rememberMe: "Angemeldet bleiben",
    forgotPassword: "Passwort vergessen?",
    terms: "Ich stimme den Nutzungsbedingungen und der Datenschutzerklärung zu",
    createAccount: "Konto erstellen",
    signIn: "Anmelden",
    sendResetLink: "Link zum Zurücksetzen senden",
    or: "oder",
    google: "Mit Google fortfahren",
    haveAccount: "Sie haben bereits ein Konto? ",
    noAccount: "Noch kein Konto? ",
    backToSignIn: "Zurück zur Anmeldung",
    resetSentTitle: "Prüfen Sie Ihren Posteingang",
    resetSentBody: "Falls ein Konto mit dieser E-Mail-Adresse existiert, ist die Anleitung zum Zurücksetzen unterwegs.",
    showPassword: "Passwort anzeigen",
    hidePassword: "Passwort verbergen"
  },

  onboarding: {
    sideTitle: "Richten Sie Ihr Restaurant ein",
    sideSub: "Fünf kurze Schritte vom Konto zur aktiven QR-Bestellung.",
    progressLabel: "Einrichtungsfortschritt",
    q1Label: "Wie heißt Ihr Restaurant?",
    q1Placeholder: "z. B. The Burger House",
    menuSmall: "Klein · unter 20 Gerichte",
    menuMedium: "Mittel · 20–60 Gerichte",
    menuLarge: "Groß · über 60 Gerichte",
    menuSizeAria: "Größe der Speisekarte",
    menuWordSmall: "kleine Speisekarte",
    menuWordMedium: "mittlere Speisekarte",
    menuWordLarge: "große Speisekarte",
    q3Label: "Wie viele Tische haben Sie?",
    kitchenAria: "Verfügbarkeit eines Küchendisplays",
    kitchenYes: "Ja, wir haben ein Tablet",
    kitchenNo: "Noch nicht",
    tablesWord: "Tische",
    kitchenLabel: "Küchendisplay",
    yes: "ja",
    notYet: "noch nicht",
    continueSetup: "Einrichtung fortsetzen",
    finishSetup: "Einrichtung abschließen",
    doneTitle: "Alles bereit",
    doneBodyBefore: "Wir haben Ihre Einrichtung gespeichert für ",
    doneBodyAfter: ". Unser Team meldet sich, um Sie live zu bringen.",
    backToZad: "Zurück zu ZAD"
  },

  notFound: {
    badge: "404",
    title: "Diese Seite steht nicht auf der Karte",
    sub: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    contactUs: "Kontakt aufnehmen"
  },

  environment: {
    badge: "ZAD & die Umwelt",
    title: "Weniger Papier. Smartere Restaurants.",
    sub: "ZAD ersetzt papierintensive Restaurantabläufe — Speisekarten, Belege, Bestellzettel und Berichte — durch schlanke digitale Prozesse.",
    problemEyebrow: "Das Papierproblem",
    problemTitle: "Restaurants drucken mehr, als ihnen bewusst ist",
    problemBody: "Ein einzelnes Restaurant druckt täglich Speisekarten, Belege, Bestellzettel und Berichte. Kleine, wiederkehrende Verschwendung summiert sich über Monate und Jahre zu großen Mengen.",
    problems: [
      { title: "Gedruckte Speisekarten", body: "Neu gedruckt bei jeder Preisänderung, jedem Saisongericht oder beschädigten Exemplar." },
      { title: "Papierbelege", body: "Thermopapier, gedruckt für jeden Gast — ob gewünscht oder nicht." },
      { title: "Bestellzettel", body: "Handgeschriebene oder gedruckte Bons, die zwischen Servicebereich und Küche hin- und hergereicht werden." },
      { title: "Papierberichte", body: "Tagesabschlüsse werden gedruckt, abgeheftet und irgendwann entsorgt." }
    ],
    helpEyebrow: "So hilft ZAD",
    helpTitle: "Digitale Prozesse statt täglichem Drucken",
    helps: [
      { title: "Digitale QR-Speisekarten", body: "Ein QR-Code pro Tisch ersetzt gedruckte Speisekarten vollständig." },
      { title: "Digitale Belege", body: "Gäste sehen Belege auf ihrem Smartphone, erhalten sie per WhatsApp oder laden sie als PDF herunter." },
      { title: "Weniger Bestellzettel", body: "Bestellungen gelangen vom Tisch direkt auf das Küchendisplay." },
      { title: "Eine zentrale Betriebszentrale", body: "Bestellungen, Tische, Reservierungen und Berichte — alles in einem Dashboard." },
      { title: "Digitale Gästenotizen", body: "Kundenprofile und digitale Kommunikation ersetzen Papiernotizen und Karteikarten." },
      { title: "Sofortige Menü-Updates", body: "Preise und Gerichte in Sekunden ändern — ganz ohne Neudruck." }
    ],
    metricsTitle: "Wirkung, die sich ehrlich messen lässt",
    metricsBody: "Wir versprechen nicht, den Planeten zu retten. Wir ersetzen konkrete, alltägliche Papierprozesse — und die Einsparungen wachsen mit jeder Bestellung.",
    metrics: [
      { value: "100%", label: "der Belege lassen sich digitalisieren" },
      { value: "0", label: "Neudrucke nach einer Menü-Aktualisierung" },
      { value: "4", label: "tägliche Papierprozesse ersetzt" },
      { value: "1", label: "QR-Code ersetzt die gedruckten Speisekarten eines Tisches" }
    ],
    benefitsTitle: "Gut für den Betrieb — nicht nur für die Umwelt",
    benefits: [
      "Geringere Druckkosten",
      "Schnellere Menü-Updates",
      "Ein hochwertigeres Gästeerlebnis",
      "Stärkere Markenwahrnehmung",
      "Einfacheres digitales Reporting",
      "Abläufe, die ohne mehr Papier skalieren"
    ],
    statementEyebrow: "Unser Engagement",
    statement: "ZAD ist mehr als ein Betriebssystem für Restaurants. Es ist ein Schritt hin zu saubereren, smarteren und ressourcenschonenderen Restaurantabläufen in Jordanien und der Region.",
    ctaTitle: "Führen Sie Ihr Restaurant sauberer — mit ZAD",
    ctaBody: "Starten Sie kostenlos oder buchen Sie eine Demo — der Umstieg auf digital dauert etwa 10 Minuten."
  },

  errors: {
    network: "Der Server ist derzeit nicht erreichbar — bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
    generic: "Etwas ist schiefgelaufen — bitte versuchen Sie es erneut.",
    validation: "Bitte korrigieren Sie die markierten Felder und versuchen Sie es erneut.",
    rateLimited: "Zu viele Anfragen — bitte versuchen Sie es in einer Minute erneut.",
    required: "Dieses Feld ist erforderlich.",
    tooLong: "Dieser Wert ist zu lang.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    invalidPhone: "Bitte geben Sie eine gültige Telefonnummer ein.",
    invalidValue: "Bitte geben Sie einen gültigen Wert ein.",
    tableRange: "Die Tischanzahl muss zwischen 1 und 500 liegen.",
    chooseOption: "Bitte wählen Sie eine der Optionen."
  },

  mockups: {
    dashboardOverview: "Dashboard-Übersicht",
    burgerHouse: "The Burger House",
    zadRestaurantOs: "ZAD Restaurant OS",
    sidebar: ["Dashboard", "Bestellungen", "Kunden", "Treueprogramm", "Analysen", "Einstellungen"],
    poweredBy: "Powered by ZAD v1.0",
    ordersToday: "Bestellungen heute",
    activeTables: "Aktive Tische",
    reservations: "Reservierungen",
    revenue: "Umsatz",
    orderNo: "Bestellung #",
    customer: "Kunde",
    status: "Status",
    total: "Gesamt",
    statusNew: "NEU",
    statusPreparing: "IN ARBEIT",
    statusReady: "FERTIG",
    statusPending: "AUSSTEHEND",
    statusActive: "AKTIV",
    statusConfirmed: "BESTÄTIGT",
    customerNames: ["Saleh Al-Omari", "Lina Haddad", "Ahmad Zaid"],
    notifNewOrderTitle: "Neue Bestellung",
    notifNewOrderBody: "Tisch 12 · 3 Artikel",
    notifWaiterTitle: "Kellnerruf",
    notifWaiterBody: "Tisch 04 benötigt Service",
    kitchenTabs: ["Alle", "Ausstehend", "Aktiv", "Fertig"],
    itemsWord: "Artikel",
    tableWord: "Tisch",
    tonight: "Heute Abend · 6. Juli",
    newBooking: "+ Neue Reservierung",
    guestNames: ["Ahmed Al-Rashid", "Sara Ibrahim", "Marco Rossi"],
    tableAvailable: "frei",
    tableOccupied: "besetzt",
    tableReserved: "reserviert",
    tableUnavailable: "nicht verfügbar",
    menuTabs: ["Vorspeisen", "Hauptgerichte", "Desserts", "Getränke"],
    menuItems: ["Klassischer Cheeseburger", "Swiss-Mushroom-Burger", "Spicy-Zinger-Menü"],
    availabilityAria: "Verfügbarkeit",
    avgCheck: "Ø Bonwert",
    newCustomers: "Neue Kunden",
    weeklyRevenue: "Wochenumsatz",
    topSelling: "Meistverkaufte Gerichte",
    topItems: ["Hähnchen-Shawarma", "Beef Burger", "Caesar Salad"],
    readyToOrder: "Bereit zu bestellen?",
    scanQr: "QR scannen",
    digitalReceipt: "Digitaler Beleg",
    receiptItems: ["Burger", "Bowl", "Latte", "Zwischensumme"],
    sendWhatsApp: "Per WhatsApp senden",
    waiterTabs: ["Vorspeisen", "Hauptgerichte", "Getränke"],
    needHelp: "Hilfe an Tisch 09 benötigt?",
    callWaiter: "Kellner rufen",
    paperReceipt: "PAPIERBELEG",
    paperTotal: "Gesamt · $17.50"
  }
};
