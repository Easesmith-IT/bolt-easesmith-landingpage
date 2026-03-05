import { ShoppingBag, Code2, Smartphone, Zap, Monitor } from "lucide-react";

// ─── Shopify Development ─────────────────────────────────────────────────────

const shopifyService = {
  slug: "shopify-development",
  icon: ShoppingBag,
  title: "Shopify & Shopify Plus Development",
  tagline: "E-commerce Engineering",
  heroHeadline: "Shopify Stores That Print Revenue, Not Just Look Pretty",
  heroSubheadline:
    "We engineer Shopify and Shopify Plus storefronts built around one metric: revenue. Faster load times, frictionless checkout, and conversion-first UX — delivered at an enterprise standard.",
  heroMockupLabel: "Luxe Commerce Dashboard",
  trustBadges: [
    "Shopify Plus Partners",
    "200+ Stores Launched",
    "↑ 48% Avg Conversion Lift",
    "98% Client Retention",
  ],

  painHeadline: "Most Shopify Stores Fail to Convert — Here's Why",
  painPoints: [
    {
      icon: "📉",
      title: "Abysmal Conversion Rates",
      description:
        "The industry average Shopify CVR is 1–2%. Most stores leave 98% of traffic unconverted because UX decisions were made by designers, not revenue engineers.",
    },
    {
      icon: "🐌",
      title: "Slow & Bloated Storefronts",
      description:
        "A 1-second delay in page load reduces conversion by 7%. Cheap themes and unoptimised apps silently destroy your paid traffic ROI every single day.",
    },
    {
      icon: "📱",
      title: "Mobile Experience Is Broken",
      description:
        "72% of e-commerce traffic is mobile, yet most Shopify stores are desktop-first afterthoughts. Every friction point on mobile is lost revenue.",
    },
    {
      icon: "🛒",
      title: "Checkout Abandonment Is Your Biggest Leak",
      description:
        "The average cart abandonment rate is 70%. Complex checkout flows, surprise costs, and slow payment loading are your silent revenue killers.",
    },
    {
      icon: "⚙️",
      title: "Zero Backend Automation",
      description:
        "Manual inventory sync, fragmented fulfillment, and disconnected tools drain your ops team's time and introduce costly errors at scale.",
    },
  ],

  solutionHeadline: "How We Build High-Conversion Shopify Machines",
  solutionSubheadline:
    "Every engagement follows our proven 5-phase engineering framework — designed to deliver measurable revenue impact, not just a pretty storefront.",
  steps: [
    {
      number: "01",
      title: "Conversion-Focused UX Strategy",
      description:
        "We audit your funnel, benchmark competitors, and design a data-driven UX architecture optimised for your specific buyer persona and AOV goals.",
    },
    {
      number: "02",
      title: "Custom Shopify Design & Theme",
      description:
        "Every pixel is engineered for conversion — not aesthetics. We build fully custom themes in Liquid or Hydrogen, aligned to your brand at a premium standard.",
    },
    {
      number: "03",
      title: "Performance & Core Web Vitals",
      description:
        "We obsess over LCP, CLS, and FID scores. Our builds consistently score 90+ on PageSpeed — directly improving your Ad Quality Score and organic ranking.",
    },
    {
      number: "04",
      title: "App Integrations & Automation",
      description:
        "We integrate Klaviyo, Recharge, Gorgias, Yotpo, and custom APIs — then automate your inventory, fulfillment, and email flows to operate with minimal manual input.",
    },
    {
      number: "05",
      title: "QA, Testing & Revenue-Ready Launch",
      description:
        "Comprehensive cross-device QA, checkout stress testing, analytics verification, and a structured launch plan — so day 1 is production-stable.",
    },
  ],

  results: [
    {
      metric: "↑ 48%",
      label: "Conversion Rate",
      context: "Luxe Fashion Co. — 90 days post-launch",
    },
    {
      metric: "↓ 31%",
      label: "Cart Abandonment",
      context: "After checkout redesign",
    },
    {
      metric: "↑ ₹94",
      label: "Average Order Value",
      context: "AI-powered upsell system",
    },
    {
      metric: "↓ 68%",
      label: "Page Load Time",
      context: "Core Web Vitals optimisation",
    },
  ],

  testimonials: [
    {
      quote:
        "The store Easesmith built is our best-performing asset. Conversion rate went from 1.8% to 2.7% in 60 days. That alone covered the project cost 4× over.",
      author: "Sarah Chen",
      role: "CEO",
      company: "Luxe Fashion Co.",
    },
    {
      quote:
        "They don't just build stores — they engineer revenue systems. Our email revenue share went from 3% to 31% after their Klaviyo setup alone.",
      author: "James Whitfield",
      role: "Founder",
      company: "Artisan & Co.",
    },
  ],

  features: [
    {
      title: "Custom Shopify Theme",
      description:
        "Fully bespoke Liquid or Hydrogen theme — no templates, no compromises.",
    },
    {
      title: "Conversion Rate Optimisation",
      description:
        "CRO embedded at every stage: layout, copy hierarchy, and checkout flow.",
    },
    {
      title: "Speed & Performance Engineering",
      description:
        "Sub-2s load times, 90+ PageSpeed scores, Core Web Vitals compliance.",
    },
    {
      title: "App & API Integrations",
      description:
        "Klaviyo, Recharge, Gorgias, Yotpo, custom ERP/3PL — fully connected.",
    },
    {
      title: "Analytics & Tracking Setup",
      description:
        "GA4, Meta Pixel, server-side tracking, and revenue attribution dashboards.",
    },
    {
      title: "Shopify Plus Features",
      description:
        "B2B portals, Scripts, checkout extensions, multi-storefront, and flow automation.",
    },
    {
      title: "Post-Launch Support",
      description:
        "Dedicated support window with SLA response times. No orphaned projects.",
    },
    {
      title: "SEO Foundation",
      description:
        "Technical SEO audit, structured data, sitemap, and canonical setup included.",
    },
  ],

  pricingFrom: "₹2,000",
  pricingNote:
    "Project scope depends on complexity, integrations, and Shopify Plus requirements. Custom quotes delivered within 48 hours.",

  whyPoints: [
    {
      title: "Revenue-First Engineering",
      description:
        "Every decision — from layout to tech stack — is made with revenue impact as the primary filter.",
    },
    {
      title: "Certified Shopify Experts",
      description:
        "Deep expertise in Shopify Plus, Hydrogen, custom Liquid, and the full app ecosystem.",
    },
    {
      title: "Structured Delivery",
      description:
        'Fixed milestones, weekly updates, and a defined launch plan. No "coming soon" black boxes.',
    },
    {
      title: "Full-Stack Capability",
      description:
        "We handle design, development, integrations, and post-launch — one team, one point of contact.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Built to handle high-volume flash sales, internationalisation, and multi-channel from day one.",
    },
  ],

  faqs: [
    {
      question: "How long does a Shopify build typically take?",
      answer:
        "A standard custom Shopify store takes 4–8 weeks. Shopify Plus builds with complex integrations typically take 6–12 weeks. We always define clear milestones upfront so you know exactly what to expect.",
    },
    {
      question: "What does a project typically cost?",
      answer:
        "Projects start at ₹2,000 for focused engagements and scale based on scope, integrations, and Shopify Plus complexity. We provide a detailed, fixed-price proposal within 48 hours of your strategy call — no surprise invoices.",
    },
    {
      question: "Should I use Shopify or Shopify Plus?",
      answer:
        "Shopify is ideal for brands under ₹1M annual revenue or getting started. Shopify Plus provides checkout extensibility, B2B portals, automation flows, and multi-storefront capabilities — recommended for brands scaling past ₹1M or with complex operational needs.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. All projects include a post-launch support window (typically 30–60 days) with defined SLA response times. Retainer support plans are available for ongoing optimisation and feature development.",
    },
    {
      question: "How many revision rounds are included?",
      answer:
        "All projects include structured revision rounds per milestone — typically 2 rounds per design phase. Our discovery process is thorough enough that major directional changes are rare. We use shared tools (Figma, Loom) to keep feedback efficient.",
    },
  ],

  outcomes: [
    "Higher conversion rates",
    "Streamlined checkout experiences",
    "Advanced product customization",
  ],
  description:
    "Custom Shopify experiences engineered for conversion. From complex product catalogs to seamless checkout flows, we build stores that drive revenue.",
};

// ─── Custom Software ──────────────────────────────────────────────────────────

const customSoftwareService = {
  slug: "custom-software",
  icon: Code2,
  title: "Custom Software Engineering",
  tagline: "Software Engineering",
  heroHeadline: "Software Built Around Your Business, Not the Other Way Around",
  heroSubheadline:
    "Bespoke systems that eliminate operational bottlenecks, automate workflows, and scale exactly as your business demands — engineered to enterprise standards.",
  heroMockupLabel: "TechScale Platform Dashboard",
  trustBadges: [
    "50+ Systems Built",
    "↑ 3.2× Avg Productivity",
    "Enterprise-Grade Security",
    "99.9% Uptime SLA",
  ],
  painHeadline: "Off-the-Shelf Software Is Costing You More Than You Think",
  painPoints: [
    {
      icon: "🔒",
      title: "You're Forced Into Vendor Lock-in",
      description:
        "SaaS tools own your data, your workflows, and your pricing. When they raise rates or shut down, you have no leverage.",
    },
    {
      icon: "⛓️",
      title: "Disconnected Systems Create Data Silos",
      description:
        "Your CRM doesn't talk to your ERP. Your ERP doesn't talk to your billing. The result: manual reconciliation and expensive errors.",
    },
    {
      icon: "📈",
      title: "Generic Tools Don't Scale With You",
      description:
        "What works at ₹1M revenue fails at ₹10M. Off-the-shelf software wasn't built for your specific processes or your growth trajectory.",
    },
    {
      icon: "👥",
      title: "Manual Processes Are Bleeding Hours",
      description:
        "Your team is copy-pasting data between tools, building reports in spreadsheets, and doing work that should be automated.",
    },
    {
      icon: "❌",
      title: "No Competitive Moat",
      description:
        "Your competitors use the same tools. Custom software is a durable competitive advantage that cannot be easily replicated.",
    },
  ],
  solutionHeadline: "How We Engineer Custom Software That Scales",
  solutionSubheadline:
    "Our engineering process turns complex requirements into maintainable, scalable systems — delivered on time.",
  steps: [
    {
      number: "01",
      title: "Discovery & Architecture Design",
      description:
        "We map your workflows, define system boundaries, and architect a solution designed for your current scale and 3-year growth projections.",
    },
    {
      number: "02",
      title: "System Design & Data Modelling",
      description:
        "Database schemas, API contracts, integration architecture, and security framework designed before a single line of code is written.",
    },
    {
      number: "03",
      title: "Agile Development in Sprints",
      description:
        "Two-week sprints with working software at every milestone. You see real progress, not status reports.",
    },
    {
      number: "04",
      title: "Integration & Migration",
      description:
        "We connect existing tools, migrate legacy data, and implement robust error handling — with zero operational downtime.",
    },
    {
      number: "05",
      title: "Testing, Security Audit & Deployment",
      description:
        "Automated test coverage, penetration testing, staged rollout, and full documentation delivered at launch.",
    },
  ],
  results: [
    {
      metric: "↑ 3.2×",
      label: "User Engagement",
      context: "TechScale SaaS Platform, 6 months",
    },
    {
      metric: "↓ 78%",
      label: "API Response Time",
      context: "After microservices migration",
    },
    {
      metric: "↑ 61",
      label: "NPS Score Points",
      context: "Post-platform rebuild",
    },
    {
      metric: "↑ 4×",
      label: "Feature Velocity",
      context: "New architecture vs legacy",
    },
  ],
  testimonials: [
    {
      quote:
        "They understood our system constraints immediately and delivered a platform we're genuinely proud of. The ROI was visible within 90 days.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "TechScale Solutions",
    },
  ],
  features: [
    {
      title: "Full-Stack Web Applications",
      description:
        "React, Next.js, Node.js, PostgreSQL — modern stack, clean architecture.",
    },
    {
      title: "API Design & Integration",
      description:
        "RESTful and GraphQL APIs, third-party integrations, webhook systems.",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "AWS, GCP, or Azure — scalable, secure, and cost-optimised infrastructure.",
    },
    {
      title: "Database Architecture",
      description:
        "Relational and NoSQL design, query optimisation, migration strategies.",
    },
    {
      title: "Real-time Systems",
      description:
        "WebSockets, event-driven architecture, live dashboards and notifications.",
    },
    {
      title: "Security & Compliance",
      description:
        "SOC 2, GDPR, HIPAA-aligned implementation and security audits.",
    },
    {
      title: "Technical Documentation",
      description:
        "Full API docs, architecture diagrams, and runbooks — no black boxes.",
    },
    {
      title: "Maintenance & Growth",
      description:
        "Ongoing engineering retainers to add features, optimise, and scale.",
    },
  ],
  pricingFrom: "₹5,000",
  pricingNote:
    "Custom software projects are scoped based on complexity, team size, and integration requirements. Fixed-price proposals delivered in 48 hours.",
  whyPoints: [
    {
      title: "Senior Engineers Only",
      description:
        "No junior handoffs. Every project is led by engineers with 7+ years of production-grade experience.",
    },
    {
      title: "Performance-Obsessed",
      description:
        "We benchmark and optimise for real-world load — not localhost.",
    },
    {
      title: "Security By Design",
      description:
        "Security isn't an afterthought. It's part of every architectural decision from day one.",
    },
    {
      title: "Clean, Maintainable Code",
      description:
        "Every codebase is documented, tested, and designed so your team can own it post-handoff.",
    },
    {
      title: "Zero Vendor Lock-in",
      description: "You own everything — code, infrastructure, data. Forever.",
    },
  ],
  faqs: [
    {
      question: "How long does a custom software project take?",
      answer:
        "Most custom software projects take 8–20 weeks depending on scope and complexity. We provide a detailed delivery timeline in every proposal.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We primarily work with React/Next.js on the frontend, Node.js/Python on the backend, PostgreSQL/MongoDB for data, and AWS/GCP for infrastructure. We recommend the right stack for your specific problem.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes — integrations are a core part of our custom software engagements. We've built connectors for ERPs, CRMs, payment systems, and dozens of third-party APIs.",
    },
    {
      question: "What happens after delivery?",
      answer:
        "We offer structured handoff with full documentation, plus optional retainer agreements for ongoing development, maintenance, and scaling.",
    },
    {
      question: "Do you work with regulated industries?",
      answer:
        "Yes. We have experience with HIPAA (healthcare), PCI DSS (payments), and GDPR (data protection) compliance requirements.",
    },
  ],
  outcomes: [
    "Automated workflows",
    "Reduced operational costs",
    "Scalable architecture",
  ],
  description:
    "Bespoke software systems tailored to your unique business processes. Built to eliminate bottlenecks and scale with your growth.",
};

// ─── Mobile & Web Apps ────────────────────────────────────────────────────────

const mobileAppService = {
  slug: "app-development",
  icon: Smartphone,
  title: "Mobile & Web App Development",
  tagline: "App Engineering",
  heroHeadline: "Apps Your Users Open Every Day — Built to Perform at Scale",
  heroSubheadline:
    "High-performance iOS, Android, and web applications engineered for engagement, retention, and conversion. Built with the tech stack and UX rigour of category-leading products.",
  heroMockupLabel: "FinFlow Mobile App",
  trustBadges: [
    "4.9★ Average App Rating",
    "iOS & Android",
    "React Native Experts",
    "99.97% Uptime",
  ],
  painHeadline:
    "Most Apps Fail Within 30 Days of Launch — Avoid These Mistakes",
  painPoints: [
    {
      icon: "💸",
      title: "Built Fast, Abandoned Fast",
      description:
        "Apps rushed to market without architecture planning fail at scale and become expensive to maintain within 12 months.",
    },
    {
      icon: "📱",
      title: "Poor UX Destroys Retention",
      description:
        "Day-1 retention below 25% is common for apps without proper UX research and onboarding flow design.",
    },
    {
      icon: "🐢",
      title: "Sluggish Performance Kills Engagement",
      description:
        "Users abandon apps that take more than 3 seconds to load a screen. Performance is a UX feature, not a technical detail.",
    },
    {
      icon: "🔓",
      title: "Security Gaps Create Liability",
      description:
        "Mobile apps are frequently attacked. Weak authentication, insecure storage, and unencrypted APIs expose both you and your users.",
    },
    {
      icon: "🔌",
      title: "Backend Can't Handle Your Growth",
      description:
        "Apps built on underpowered backends collapse under user load. Scalability must be designed in from day one.",
    },
  ],
  solutionHeadline: "How We Build Apps That Retain and Convert",
  solutionSubheadline:
    "A structured process that prioritises user outcomes, performance, and long-term scalability — not just delivery speed.",
  steps: [
    {
      number: "01",
      title: "UX Research & Product Strategy",
      description:
        "User journey mapping, competitive benchmarking, and feature prioritisation — so we build only what drives activation and retention.",
    },
    {
      number: "02",
      title: "UI Design & Prototype",
      description:
        "High-fidelity Figma prototypes reviewed and iterated before development begins. You approve every screen before a line is written.",
    },
    {
      number: "03",
      title: "Cross-Platform Development",
      description:
        "React Native or native iOS/Android — based on your specific performance and platform requirements.",
    },
    {
      number: "04",
      title: "API & Backend Engineering",
      description:
        "Scalable, well-documented backend with authentication, push notifications, analytics events, and third-party integrations fully built.",
    },
    {
      number: "05",
      title: "QA, App Store Submission & Launch",
      description:
        "Comprehensive device testing, App Store / Google Play submission, staged rollout, and a launch-day monitoring protocol.",
    },
  ],
  results: [
    {
      metric: "4.9★",
      label: "App Store Rating",
      context: "FinFlow Banking App — Day-1 launch",
    },
    {
      metric: "87%",
      label: "Day-1 Retention",
      context: "vs 25% industry average",
    },
    {
      metric: "99.97%",
      label: "Transaction Success Rate",
      context: "Production over 6 months",
    },
    {
      metric: "↓ 40%",
      label: "Dispatch Time",
      context: "FleetOps Mobile Platform",
    },
  ],
  testimonials: [
    {
      quote:
        "Finally a dev partner who understands compliance without compromising UX. Our app passed the security audit first time and users love it.",
      author: "Jennifer White",
      role: "VP of Product",
      company: "FinFlow Inc.",
    },
  ],
  features: [
    {
      title: "Cross-Platform (iOS & Android)",
      description:
        "React Native codebase delivering truly native performance on both platforms.",
    },
    {
      title: "UX Design & Prototyping",
      description:
        "Full Figma design with interactive prototypes before development.",
    },
    {
      title: "Offline-First Architecture",
      description:
        "SQLite-backed offline mode for apps requiring connectivity resilience.",
    },
    {
      title: "Push Notifications & Messaging",
      description:
        "Firebase Cloud Messaging, deep links, and in-app notification systems.",
    },
    {
      title: "Biometric & Secure Auth",
      description:
        "Face ID, Touch ID, OAuth2, and JWT-based secure authentication.",
    },
    {
      title: "Analytics & Crash Monitoring",
      description:
        "Mixpanel/Amplitude event tracking and Sentry crash monitoring configured at launch.",
    },
    {
      title: "App Store Submission",
      description:
        "Full App Store and Google Play submission including metadata optimisation.",
    },
    {
      title: "OTA Updates & CI/CD",
      description:
        "Expo EAS or Fastlane pipelines for fast, reliable over-the-air updates.",
    },
  ],
  pricingFrom: "₹8,000",
  pricingNote:
    "App projects are scoped per platform, complexity, and backend requirements. Cross-platform React Native builds are typically more cost-effective than native.",
  whyPoints: [
    {
      title: "Product-Minded Engineers",
      description:
        "We think about activation, retention, and LTV — not just lines of code.",
    },
    {
      title: "Performance Is Non-Negotiable",
      description:
        "Every screen is profiled. We ship apps with smooth 60fps interactions.",
    },
    {
      title: "Design-Led Development",
      description:
        "All builds are design-reviewed before engineering begins. No guesswork.",
    },
    {
      title: "Full-Stack Delivery",
      description:
        "Frontend, backend, infra, and DevOps — one team, one contract, one outcome.",
    },
    {
      title: "Compliance-Ready",
      description:
        "Experience with PCI DSS, HIPAA, and GDPR requirements for regulated app categories.",
    },
  ],
  faqs: [
    {
      question: "Should I build native or cross-platform?",
      answer:
        "For most apps, React Native delivers native-quality performance at significantly lower cost and development time. We recommend native when you need deep platform-specific APIs or extreme performance requirements (e.g., video processing, AR/VR).",
    },
    {
      question: "How long does an app take to build?",
      answer:
        "MVPs typically take 8–14 weeks. Full-featured apps take 14–24 weeks depending on backend complexity, integrations, and design scope.",
    },
    {
      question: "Do you handle App Store submission?",
      answer:
        "Yes — full Apple App Store and Google Play submission is included, including metadata, screenshots, privacy policy setup, and review process management.",
    },
    {
      question: "Can you build the backend too?",
      answer:
        "Absolutely. We provide full-stack delivery: React Native app + Node.js/Python backend + cloud infrastructure. We can also integrate with existing backends via API.",
    },
    {
      question: "What happens if the app needs updates after launch?",
      answer:
        "We offer post-launch retainer packages covering bug fixes, OS compatibility updates, new feature sprints, and performance monitoring.",
    },
  ],
  outcomes: [
    "Enhanced user engagement",
    "Cross-platform compatibility",
    "Lightning-fast performance",
  ],
  description:
    "High-performance applications that users love. Modern, fast, and built with the latest technologies for maximum engagement.",
};

// ─── Automation ───────────────────────────────────────────────────────────────

const automationService = {
  slug: "automation",
  icon: Zap,
  title: "Workflow & Process Automation",
  tagline: "Business Automation",
  heroHeadline: "Reclaim 200+ Hours a Month With Intelligent Automation",
  heroSubheadline:
    "We eliminate manual work, connect your business systems, and build automation pipelines that run 24/7 without your team's involvement.",
  heroMockupLabel: "LogiChain Automation Hub",
  trustBadges: [
    "65+ Systems Automated",
    "↓ 65% Avg Manual Work",
    "8.4× Year-1 ROI",
    "220 hrs/mo Saved Per Client",
  ],
  painHeadline: "Manual Processes Are Quietly Destroying Your Margins",
  painPoints: [
    {
      icon: "⏱️",
      title: "Your Team Is Doing Robot Work",
      description:
        "Copy-pasting between tools, building weekly reports, and reconciling data across systems — hours your team could spend on strategic work.",
    },
    {
      icon: "❌",
      title: "Human Error Is Costly at Scale",
      description:
        "Manual data entry has a 1–4% error rate. At volume, those errors cascade into refunds, delays, and operational failures.",
    },
    {
      icon: "🔀",
      title: "Your Tools Don't Talk to Each Other",
      description:
        "Your CRM, ERP, accounting, and support tools operate in silos. The integrations cost you in analyst time every single day.",
    },
    {
      icon: "📊",
      title: "Reporting Takes Days, Not Minutes",
      description:
        "When business intelligence requires a human to compile it, you're always operating on stale data.",
    },
    {
      icon: "📉",
      title: "You Can't Scale Without Headcount",
      description:
        "If every new order, customer, or project requires proportional headcount to manage, your margins compress as you grow.",
    },
  ],
  solutionHeadline: "How We Build Automation That Actually Runs",
  solutionSubheadline:
    "We map, design, and implement automation systems that are robust, observable, and built to operate without babysitting.",
  steps: [
    {
      number: "01",
      title: "Process Audit & ROI Mapping",
      description:
        "We document your current workflows, identify the highest-value automation targets, and produce an ROI model showing expected time and cost savings.",
    },
    {
      number: "02",
      title: "Systems Integration Architecture",
      description:
        "We design the integration layer connecting your tools — APIs, webhooks, event streams — ensuring clean data flow with error handling built in.",
    },
    {
      number: "03",
      title: "Automation Build & Testing",
      description:
        "We build and rigorously test each automation against real data scenarios, including edge cases and exception handling.",
    },
    {
      number: "04",
      title: "Monitoring & Alerting Setup",
      description:
        "Every automation is instrumented with monitoring, failure alerts, and audit logs — so you know exactly what ran, when, and why.",
    },
    {
      number: "05",
      title: "Handoff, Training & Documentation",
      description:
        "Full documentation, team training, and a runbook so your operations team can own, monitor, and extend the system confidently.",
    },
  ],
  results: [
    {
      metric: "↓ 65%",
      label: "Manual Work Hours",
      context: "LogiChain Global — Month 1",
    },
    {
      metric: "↓ 91%",
      label: "Processing Errors",
      context: "Order automation system",
    },
    {
      metric: "220 hrs",
      label: "Saved Per Month",
      context: "Across 6 automated workflows",
    },
    {
      metric: "8.4×",
      label: "Year-1 ROI",
      context: "Project cost recovered in 6 weeks",
    },
  ],
  testimonials: [
    {
      quote:
        "Our team now focuses on strategic work instead of spreadsheets. The automation system paid for itself within 6 weeks. Frankly, I wish we'd done it 2 years earlier.",
      author: "David Park",
      role: "Operations Director",
      company: "LogiChain Global",
    },
  ],
  features: [
    {
      title: "System & API Integration",
      description:
        "Connect CRMs, ERPs, e-commerce, accounting, and support tools via API and webhooks.",
    },
    {
      title: "Data Pipeline Automation",
      description:
        "Automated ETL pipelines — extract, transform, and load data across systems on schedule or trigger.",
    },
    {
      title: "Report & Dashboard Automation",
      description:
        "Automated reporting delivered to Slack, email, or Looker Studio — always fresh, never manual.",
    },
    {
      title: "Order & Fulfillment Automation",
      description:
        "End-to-end order processing — from creation to fulfillment notification — without human touch.",
    },
    {
      title: "Email & CRM Automation",
      description:
        "Klaviyo, HubSpot, Salesforce — automated sequences, scoring, and enrichment workflows.",
    },
    {
      title: "Error & Exception Handling",
      description:
        "Every automation includes failure detection, notification, and recovery logic. No silent failures.",
    },
    {
      title: "Monitoring & Audit Logs",
      description:
        "Full observability — every automation run is logged, timestamped, and reviewable.",
    },
    {
      title: "Custom Scripting & Micro-services",
      description:
        "Python or Node.js microservices for complex logic that no-code tools can't handle.",
    },
  ],
  pricingFrom: "₹3,000",
  pricingNote:
    "Automation projects are scoped based on number of systems, workflow complexity, and integration requirements.",
  whyPoints: [
    {
      title: "We Start With ROI",
      description:
        "Every automation engagement begins with an ROI model. We only proceed if the numbers make sense for your business.",
    },
    {
      title: "Robust by Default",
      description:
        "We build with error handling, retries, and alerting from the start — not as an afterthought.",
    },
    {
      title: "No-Code + Pro-Code",
      description:
        "We use the right tool for the job — Zapier, Make, or custom Python/Node.js — based on complexity and maintainability.",
    },
    {
      title: "Your Team Owns It",
      description:
        "Full documentation and training so your operations team can monitor, extend, and own the automation confidently.",
    },
    {
      title: "Proven at Scale",
      description:
        "Our automations process millions of records monthly. We know what breaks at scale and we engineer around it.",
    },
  ],
  faqs: [
    {
      question: "What tools do you automate with?",
      answer:
        "We use Zapier, Make (Integromat), custom Python/Node.js scripts, and native API integrations depending on the complexity. We always recommend the right tool for long-term maintainability.",
    },
    {
      question: "How long does an automation project take?",
      answer:
        "Simple integrations can be live in 1–2 weeks. Complex multi-system automation hubs typically take 4–8 weeks including testing and documentation.",
    },
    {
      question: "Do you work with our existing software stack?",
      answer:
        "Yes. We've integrated with 50+ platforms including Shopify, HubSpot, Salesforce, NetSuite, QuickBooks, Xero, Slack, Google Workspace, and most REST-API-equipped tools.",
    },
    {
      question: "What if an automation breaks?",
      answer:
        "All our automations include monitoring and alerting so failures are caught immediately. We also provide a support window post-launch and can set up retainer monitoring.",
    },
    {
      question: "Can you automate processes we haven't fully documented?",
      answer:
        "Yes — our discovery process is specifically designed to extract and document workflows from your team, even when processes are informal or inconsistent.",
    },
  ],
  outcomes: ["Time savings", "Error reduction", "Improved efficiency"],
  description:
    "Intelligent automation solutions that free your team from repetitive tasks. Connect your tools and streamline operations.",
};

// ─── Mobile & Web Development (combined) ─────────────────────────────────────

const mobileWebService = {
  slug: "mobile-web-development",
  icon: Monitor,
  title: "Mobile & Web Development",
  tagline: "Digital Product Engineering",
  heroHeadline:
    "We Build Mobile Apps and Websites That Scale With Your Business",
  heroSubheadline:
    "From lightning-fast websites to powerful mobile apps — we engineer digital products designed for performance, growth, and long-term scalability.",
  heroMockupLabel: "FinFlow Mobile + Web Platform",
  trustBadges: [
    "50+ Products Shipped",
    "4.9★ Avg App Rating",
    "99.97% Uptime SLA",
    "iOS · Android · Web",
  ],

  painHeadline: "Most Digital Products Fail After Launch — Here's Why",
  painPoints: [
    {
      icon: "🐌",
      title: "Slow, Unoptimised Platforms",
      description:
        "A 1-second delay costs 7% in conversions. Most agencies ship unoptimised code that looks fine on a demo day — and quietly destroys business metrics from week one.",
    },
    {
      icon: "📉",
      title: "Poor Scalability",
      description:
        "Architectures designed for the first 100 users collapse under the first 10,000. Retrofitting scalability costs 3–5× more than building it correctly from the start.",
    },
    {
      icon: "🐛",
      title: "Buggy User Experience",
      description:
        "Untested edge cases and device-specific bugs erode trust immediately. 53% of users uninstall an app after just one crash or loading failure.",
    },
    {
      icon: "🏗️",
      title: "Weak Architecture",
      description:
        "Short-term technical shortcuts become long-term liabilities. A product built on fragile architecture will hit a wall when you most need it to scale.",
    },
    {
      icon: "🔇",
      title: "No Post-Launch Support",
      description:
        "Most agencies disappear at handoff. OS updates, library vulnerabilities, and new device sizes require ongoing maintenance — not a fire-and-forget delivery.",
    },
    {
      icon: "👻",
      title: "Developers Who Disappear",
      description:
        "Freelancers and low-cost agencies are the number one cause of orphaned codebases. You end up owning a product no one can maintain or extend.",
    },
  ],

  solutionHeadline: "Built Like a Product. Not Just Another Project.",
  solutionSubheadline:
    "Our full-stack product engineering process delivers digital products that survive contact with real users, real traffic, and real growth.",
  steps: [
    {
      number: "01",
      title: "Product & Strategy Mapping",
      description:
        "We define user flows, information architecture, tech stack selection, and a scalability roadmap — before any design or code begins.",
    },
    {
      number: "02",
      title: "UX/UI That Drives Engagement",
      description:
        "Clean, modern interfaces designed in Figma with real user journeys in mind. Every screen is reviewed for retention and conversion before we build.",
    },
    {
      number: "03",
      title: "Scalable Development",
      description:
        "Robust, clean code built for performance and future growth. Component-based architecture, CI/CD pipelines, and documented codebases you can own.",
    },
    {
      number: "04",
      title: "QA & Performance Testing",
      description:
        "We stress-test before launch — load testing, cross-device compatibility, Lighthouse audits, and regression suites that catch issues before your users do.",
    },
    {
      number: "05",
      title: "Launch & Continuous Support",
      description:
        "Staged rollout, monitoring setup, and a dedicated post-launch support window. We stay with you — not just until delivery day.",
    },
  ],

  results: [
    {
      metric: "↑ 3×",
      label: "Faster Load Speed",
      context: "After performance optimisation sprint",
    },
    {
      metric: "99.97%",
      label: "Platform Uptime",
      context: "FinFlow — 6 months production",
    },
    {
      metric: "↑ 87%",
      label: "Day-1 User Retention",
      context: "vs 25% industry average",
    },
    {
      metric: "↓ 72%",
      label: "Crash Rate",
      context: "Post-launch QA + monitoring",
    },
  ],

  testimonials: [
    {
      quote:
        "The product they built scales under real traffic without breaking a sweat. We went from 200 to 20,000 users in 3 months and the platform didn't flinch.",
      author: "Ravi Mehta",
      role: "Founder & CEO",
      company: "ScaleStack",
    },
    {
      quote:
        "Finally a dev partner who thinks like a product manager. They pushed back on unnecessary features and shipped something users actually love.",
      author: "Jennifer White",
      role: "VP of Product",
      company: "FinFlow Inc.",
    },
  ],

  features: [
    {
      title: "iOS & Android Apps",
      description:
        "React Native or native development — cross-platform performance at the right cost point.",
    },
    {
      title: "High-Performance Websites",
      description:
        "Next.js, Astro, or Vite — sub-2s load times and 90+ Lighthouse scores standard.",
    },
    {
      title: "Custom Web Applications",
      description:
        "SaaS platforms, dashboards, portals — full-stack React + Node.js/Python.",
    },
    {
      title: "Shopify & eCommerce",
      description:
        "Custom Shopify builds and headless commerce — conversion-first, not template-first.",
    },
    {
      title: "Backend & API Engineering",
      description:
        "REST/GraphQL APIs, auth, real-time features, and third-party integrations.",
    },
    {
      title: "App Store Deployment",
      description:
        "Full Apple App Store and Google Play submission including compliance review.",
    },
    {
      title: "Speed & Performance",
      description:
        "Profiling, lazy loading, CDN setup, Core Web Vitals — speed as a feature.",
    },
    {
      title: "SEO-Ready Architecture",
      description:
        "Server-side rendering, structured data, meta management, and crawlability baked in.",
    },
  ],

  pricingFrom: "₹3,000",
  pricingNote:
    "Every build is custom-scoped based on complexity and scale. Web projects start at ₹3,000+. Mobile apps start at ₹8,000+. Fixed-price proposals delivered within 48 hours.",

  whyPoints: [
    {
      title: "Product-First Mindset",
      description:
        "We think about your users, your metrics, and your roadmap — not just the Jira ticket in front of us.",
    },
    {
      title: "Clean, Scalable Code",
      description:
        "Every codebase is documented, tested, and structured so your team (or ours) can own it confidently post-launch.",
    },
    {
      title: "Performance Obsessed",
      description:
        "We benchmark every build. Sub-2s load times and smooth 60fps interactions are a baseline, not a premium.",
    },
    {
      title: "Transparent Communication",
      description:
        "Weekly written updates, shared Figma boards, and accessible Loom walkthroughs. No status-report theatre.",
    },
    {
      title: "Long-Term Tech Partner",
      description:
        "We structure retainer agreements for clients who want a dedicated team beyond the initial build. We don't disappear.",
    },
  ],

  faqs: [
    {
      question: "How long does a typical project take?",
      answer:
        "Web projects typically take 4–10 weeks. Mobile apps take 10–20 weeks depending on scope. After our discovery call, we provide a milestone plan with fixed delivery dates — no open-ended timelines.",
    },
    {
      question: "What tech stack do you use?",
      answer:
        "For web: Next.js, React, Node.js, PostgreSQL, Tailwind. For mobile: React Native (cross-platform) or Swift/Kotlin (native). We recommend the right stack for your specific product requirements and budget.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes — every project includes a defined post-launch support window (30–60 days). We also offer retainer plans for ongoing development, feature sprints, and performance monitoring.",
    },
    {
      question: "How many revision rounds are included?",
      answer:
        "We include 2 structured revision rounds per design milestone. Our upfront discovery process is thorough enough to minimise surprises. All feedback is managed via Figma comments and Loom reviews.",
    },
    {
      question: "Can you build something that scales to millions of users?",
      answer:
        "Yes. We design for scale from day one — load-balanced infrastructure, database optimisation, CDN configuration, and horizontal scaling strategies are standard parts of our architecture planning.",
    },
  ],

  outcomes: [
    "Scalable mobile apps (iOS & Android)",
    "High-performance web platforms",
    "Post-launch support & growth",
  ],
  description:
    "End-to-end mobile app and web development engineered for scale, performance, and real user engagement — not just delivery day.",

  serviceBreakdown: [
    {
      heading: "Mobile App Development",
      icon: "📱",
      accent: "sky",
      items: [
        {
          title: "iOS & Android Apps",
          description:
            "React Native or native Swift/Kotlin — built for real performance on both platforms.",
        },
        {
          title: "Flutter Development",
          description:
            "Single codebase, pixel-perfect native UI — ideal for rapid MVP builds.",
        },
        {
          title: "Backend & API Integration",
          description:
            "Scalable Node.js/Python backend with authentication, push notifications, and real-time features.",
        },
        {
          title: "App Performance Optimization",
          description:
            "Profiling, memory management, launch-time reduction, and smooth 60fps interactions.",
        },
        {
          title: "App Store Deployment",
          description:
            "Full App Store and Google Play submission — metadata, screenshots, compliance, and review management.",
        },
        {
          title: "Offline-First Architecture",
          description:
            "SQLite-backed offline mode and conflict resolution for apps requiring connectivity resilience.",
        },
      ],
    },
    {
      heading: "Web Development",
      icon: "🌐",
      accent: "slate",
      items: [
        {
          title: "High-Performance Websites",
          description:
            "Next.js or Astro — sub-2s load times, 90+ PageSpeed, Core Web Vitals compliant.",
        },
        {
          title: "Custom Web Applications",
          description:
            "SaaS platforms, CRMs, dashboards, and portals — full-stack, documented, and tested.",
        },
        {
          title: "Shopify & eCommerce Builds",
          description:
            "Custom Shopify themes and headless commerce — designed for conversion, not aesthetics.",
        },
        {
          title: "SaaS Platform Engineering",
          description:
            "Multi-tenant architecture, subscription billing, role-based access, and analytics dashboards.",
        },
        {
          title: "Speed Optimization",
          description:
            "CDN setup, image optimization, lazy loading, and bundle size auditing on every build.",
        },
        {
          title: "SEO-Ready Architecture",
          description:
            "Server-side rendering, structured data, canonical setup, and sitemap generation included.",
        },
      ],
    },
  ],
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const allServices = [
  shopifyService,
  customSoftwareService,
  mobileAppService,
  automationService,
  mobileWebService,
];

export const servicesBySlug = Object.fromEntries(
  allServices.map((s) => [s.slug, s]),
);
