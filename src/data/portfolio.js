export const caseStudies = [
  {
    id: 1,
    name: "Luxe Commerce Relaunch",
    client: "Luxe Fashion Co.",
    industry: "Luxury E-commerce",
    category: "Shopify",
    tagline: "Rebuilt from the ground up for premium buyer journeys.",
    resultLabel: "Conversion Rate",
    resultValue: "↑ 48%",
    resultTrend: "up",
    heroColor: "from-sky-50 via-white to-slate-50",
    accentColor: "text-sky-600",
    iconBg: "bg-sky-100",
    featured: true,
    tags: ["Shopify Plus", "Custom Theme", "Checkout Optimization", "CRO"],
    overview: `A luxury fashion retailer with over 12,000 SKUs needed a Shopify Plus overhaul to match the brand's high-end positioning and eliminate conversion friction.`,
    challenge:
      "The legacy storefront had a 2.1% conversion rate and a 74% cart abandonment rate. The UX was misaligned with the premium brand, and page speeds averaged 4.8s on mobile.",
    solution:
      "We architected a fully custom Shopify Plus theme with optimized LCP, a 1-click checkout experience, AI-powered product recommendations, and full brand storytelling integration throughout the purchase funnel.",
    stack: [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Klaviyo",
      "Recharge",
      "Google Cloud CDN",
    ],
    metrics: [
      { label: "Conversion Rate", value: "↑ 48%", trend: "up" },
      { label: "Cart Abandonment", value: "↓ 31%", trend: "down" },
      { label: "Page Load Speed", value: "↓ 68%", trend: "down" },
      { label: "AOV", value: "↑ ₹94", trend: "up" },
    ],
    testimonial: {
      quote:
        "The transformation was remarkable. Our store finally feels like the brand we built—and our revenue shows it.",
      author: "Sarah Chen",
      role: "CEO, Luxe Fashion Co.",
    },
  },
  {
    id: 2,
    name: "TechScale SaaS Platform",
    client: "TechScale Solutions",
    industry: "B2B SaaS",
    category: "Custom Software",
    tagline: "Enterprise-grade rebuild that tripled user engagement.",
    resultLabel: "User Engagement",
    resultValue: "↑ 3.2×",
    resultTrend: "up",
    heroColor: "from-slate-50 via-white to-sky-50",
    accentColor: "text-sky-600",
    iconBg: "bg-slate-100",
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "Microservices"],
    overview:
      "A B2B SaaS platform serving 4,000+ enterprise clients needed a complete platform overhaul to handle scale, reduce churn, and modernise UX.",
    challenge:
      "The platform ran on a 7-year-old monolithic stack with 2.4-second average response times. Feature velocity had slowed to a halt and NPS had dropped to 22.",
    solution:
      "We decomposed the monolith into event-driven microservices, re-architected the data layer, and rebuilt the frontend with React and a custom design system. Deployed with zero downtime.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS ECS",
      "Terraform",
    ],
    metrics: [
      { label: "User Engagement", value: "↑ 3.2×", trend: "up" },
      { label: "API Response Time", value: "↓ 78%", trend: "down" },
      { label: "Feature Velocity", value: "↑ 4×", trend: "up" },
      { label: "NPS Score", value: "↑ 61pts", trend: "up" },
    ],
    testimonial: {
      quote:
        "They understood our constraints instantly and delivered a platform that genuinely scales. The ROI was evident within 90 days.",
      author: "Michael Rodriguez",
      role: "CTO, TechScale Solutions",
    },
  },
  {
    id: 3,
    name: "LogiChain Ops Automation",
    client: "LogiChain Global",
    industry: "Logistics & Supply Chain",
    category: "Automation",
    tagline: "End-to-end automation that eliminated 65% of manual work.",
    resultLabel: "Manual Work",
    resultValue: "↓ 65%",
    resultTrend: "down",
    heroColor: "from-sky-50 via-white to-white",
    accentColor: "text-sky-600",
    iconBg: "bg-sky-50",
    tags: ["Python", "Zapier", "ERP Integration", "Webhooks", "Reporting"],
    overview:
      "A 3PL logistics provider processing 15,000+ shipments monthly was drowning in manual data entry, reconciliation errors, and siloed reporting.",
    challenge:
      "Teams spent 340+ hours per month on repetitive data work across 6 disconnected systems. Error rate in order processing was 8.2%, causing downstream operational failures.",
    solution:
      "We built a centralised automation hub integrating all 6 systems via APIs and webhooks, with intelligent exception handling, real-time dashboards, and automated reporting pipelines.",
    stack: [
      "Python",
      "FastAPI",
      "Zapier",
      "PostgreSQL",
      "Looker Studio",
      "REST APIs",
      "Slack API",
    ],
    metrics: [
      { label: "Manual Work Hours", value: "↓ 65%", trend: "down" },
      { label: "Processing Errors", value: "↓ 91%", trend: "down" },
      { label: "Monthly Hours Saved", value: "220 hrs", trend: "up" },
      { label: "ROI (Year 1)", value: "↑ 8.4×", trend: "up" },
    ],
    testimonial: {
      quote:
        "Our team now focuses on strategic work instead of spreadsheets. The automation paid for itself within 6 weeks.",
      author: "David Park",
      role: "Operations Director, LogiChain Global",
    },
  },
  {
    id: 4,
    name: "FinFlow Mobile App",
    client: "FinFlow Inc.",
    industry: "FinTech",
    category: "Mobile Apps",
    tagline: "A 4.9★ mobile banking experience built for trust and speed.",
    resultLabel: "App Store Rating",
    resultValue: "↑ 4.9★",
    resultTrend: "up",
    heroColor: "from-white via-sky-50 to-white",
    accentColor: "text-sky-600",
    iconBg: "bg-sky-100",
    tags: ["React Native", "iOS", "Android", "Biometric Auth", "PCI DSS"],
    overview:
      "A regulated FinTech startup needed a high-security, high-performance mobile banking app ready for 250,000+ active users at launch.",
    challenge:
      "Strict PCI DSS and GDPR compliance requirements, biometric authentication, real-time transaction processing, and a 12-week delivery window.",
    solution:
      "We built a cross-platform React Native application with end-to-end encryption, biometric authentication, real-time push notifications, and a modular architecture ready for future feature expansion.",
    stack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Stripe",
      "Firebase",
      "AWS KMS",
      "Plaid",
    ],
    metrics: [
      { label: "App Store Rating", value: "4.9★", trend: "up" },
      { label: "Day-1 Active Users", value: "87%", trend: "up" },
      { label: "Transaction Success", value: "99.97%", trend: "up" },
      { label: "Delivered On Time", value: "100%", trend: "up" },
    ],
    testimonial: {
      quote:
        "Finally a dev partner who understands compliance. The app exceeded our user experience expectations and passed our security audit first time.",
      author: "Jennifer White",
      role: "VP of Product, FinFlow Inc.",
    },
  },
  {
    id: 5,
    name: "ConnectMarket Marketplace",
    client: "ConnectMarket",
    industry: "Multi-Vendor E-commerce",
    category: "Custom Software",
    tagline: "₹2.4M monthly GMV flowing through a system we engineered.",
    resultLabel: "Monthly GMV Growth",
    resultValue: "↑ ₹2.4M",
    resultTrend: "up",
    heroColor: "from-slate-50 via-white to-sky-50",
    accentColor: "text-sky-600",
    iconBg: "bg-slate-100",
    tags: ["Next.js", "PostgreSQL", "Stripe Connect", "Elasticsearch", "Redis"],
    overview:
      "A marketplace startup connecting 800+ vendors with B2C buyers needed a robust, scalable platform built for high transaction volume and complex commission logic.",
    challenge: `Off-the-shelf marketplace solutions couldn't handle the complex payout logic, custom taxonomy requirements, or the scale they were projecting within 18 months.`,
    solution:
      "We engineered a fully custom marketplace with Stripe Connect for split payments, Elasticsearch for real-time search, AI recommendation engine, and a vendor management portal.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe Connect",
      "Elasticsearch",
      "Redis",
      "Vercel",
    ],
    metrics: [
      { label: "Monthly GMV", value: "₹2.4M", trend: "up" },
      { label: "Vendor Onboarding", value: "↓ 40% time", trend: "down" },
      { label: "Search Accuracy", value: "↑ 94%", trend: "up" },
      { label: "Uptime SLA", value: "99.99%", trend: "up" },
    ],
  },
  {
    id: 6,
    name: "HealthBridge Patient Portal",
    client: "HealthBridge Systems",
    industry: "Healthcare",
    category: "Custom Software",
    tagline: "HIPAA-compliant care management with 95% provider satisfaction.",
    resultLabel: "Provider Satisfaction",
    resultValue: "↑ 95%",
    resultTrend: "up",
    heroColor: "from-sky-50 via-white to-slate-50",
    accentColor: "text-sky-600",
    iconBg: "bg-sky-50",
    tags: ["React", "HIPAA", "FHIR", "Node.js", "PostgreSQL"],
    overview:
      "A healthcare network serving 40,000+ patients needed a unified patient management portal replacing 3 fragmented legacy systems.",
    challenge:
      "HIPAA compliance, FHIR data standards, EHR integrations, and legacy data migrations — all within a hard regulatory deadline.",
    solution:
      "We built a HIPAA-compliant patient portal with HL7 FHIR APIs, secure messaging, appointment scheduling, telehealth integration, and full audit logging — migrating 40,000+ patient records with zero data loss.",
    stack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "FHIR R4",
      "AWS HealthLake",
      "Twilio",
      "Auth0",
    ],
    metrics: [
      { label: "Provider Satisfaction", value: "95%", trend: "up" },
      { label: "Admin Time Saved", value: "↓ 58%", trend: "down" },
      { label: "Data Migration", value: "100% clean", trend: "up" },
      { label: "Compliance Audit", value: "Passed", trend: "up" },
    ],
    testimonial: {
      quote:
        "Security and compliance were non-negotiable. The team delivered exactly that, plus a UX our clinicians actually enjoy using.",
      author: "Dr. James Morrison",
      role: "Chief Medical Officer, HealthBridge Systems",
    },
  },
  {
    id: 7,
    name: "Artisan Shopify Plus Scale",
    client: "Artisan & Co.",
    industry: "DTC E-commerce",
    category: "Shopify",
    tagline: "Scaled DTC revenue from ₹800K to ₹3.2M annually.",
    resultLabel: "Annual Revenue Growth",
    resultValue: "↑ 3.2×",
    resultTrend: "up",
    heroColor: "from-white via-sky-50 to-slate-50",
    accentColor: "text-sky-600",
    iconBg: "bg-sky-100",
    tags: [
      "Shopify Plus",
      "Subscription",
      "Klaviyo",
      "Headless Commerce",
      "B2B",
    ],
    overview:
      "A DTC artisan goods brand plateauing at ₹800K ARR needed Shopify Plus infrastructure and a subscription model to break through to 8-figure territory.",
    challenge:
      "Their existing Shopify setup had no subscription capability, poor mobile UX, zero B2B functionality, and email flows generating 3% revenue share instead of the industry-standard 30%.",
    solution:
      "We migrated to Shopify Plus with a custom headless storefront, Recharge-powered subscriptions, a full B2B portal, and rebuilt their entire Klaviyo automation stack from scratch.",
    stack: [
      "Shopify Plus",
      "Hydrogen",
      "Recharge",
      "Klaviyo",
      "GetRelated AI",
      "Gorgias",
    ],
    metrics: [
      { label: "Annual Revenue", value: "↑ 3.2×", trend: "up" },
      { label: "Email Revenue Share", value: "↑ 28%", trend: "up" },
      { label: "Subscription LTV", value: "↑ 2.7×", trend: "up" },
      { label: "B2B Orders (New)", value: "340/mo", trend: "up" },
    ],
  },
  {
    id: 8,
    name: "FleetOps Mobile Platform",
    client: "FleetOps Technologies",
    industry: "Fleet & Field Services",
    category: "Mobile Apps",
    tagline:
      "Cut dispatch time by 40% with a field-ready mobile command centre.",
    resultLabel: "Dispatch Time",
    resultValue: "↓ 40%",
    resultTrend: "down",
    heroColor: "from-slate-50 via-white to-sky-50",
    accentColor: "text-sky-600",
    iconBg: "bg-slate-100",
    tags: [
      "React Native",
      "Real-time GPS",
      "Offline Mode",
      "Push Notifications",
      "REST API",
    ],
    overview:
      "A fleet management company operating 500+ vehicles needed a mobile-first dispatch and tracking platform to replace paper-based field operations.",
    challenge:
      "Field agents operated in low-connectivity environments. Dispatchers had no real-time visibility. Customer ETAs were consistently missed, driving 22% churn in their SMB segment.",
    solution:
      "We built a React Native app with offline-first architecture, real-time GPS tracking, intelligent dispatch routing, and a dispatcher web dashboard — all syncing seamlessly when connectivity resumes.",
    stack: [
      "React Native",
      "Expo",
      "Node.js",
      "Socket.io",
      "Google Maps API",
      "SQLite",
      "Redis",
    ],
    metrics: [
      { label: "Dispatch Time", value: "↓ 40%", trend: "down" },
      { label: "ETA Accuracy", value: "↑ 91%", trend: "up" },
      { label: "SMB Churn", value: "↓ 18%", trend: "down" },
      { label: "Field Productivity", value: "↑ 34%", trend: "up" },
    ],
  },
];

export const categories = [
  "All",
  "Shopify",
  "Custom Software",
  "Mobile Apps",
  "Automation",
];

export const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "94%", label: "Client Retention Rate" },
  { value: "₹50M+", label: "Revenue Generated" },
  { value: "65+", label: "Systems Automated" },
];

export const testimonials = [
  {
    quote:
      "Working with Easesmith was the clearest business decision we made last year. They think in outcomes, not hours.",
    author: "Amanda Foster",
    role: "Founder & CEO",
    company: "ConnectMarket",
  },
  {
    quote: `The level of technical rigour combined with genuine strategic thinking is rare. They're the only agency I refer to peers.`,
    author: "Michael Rodriguez",
    role: "CTO",
    company: "TechScale Solutions",
  },
  {
    quote: `ROI was visible within weeks. Their work isn't just functional — it's a competitive advantage.`,
    author: "Sarah Chen",
    role: "CEO",
    company: "Luxe Fashion Co.",
  },
];