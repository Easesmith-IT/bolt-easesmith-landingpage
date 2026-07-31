"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Factory,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  MessageSquare,
  RadioTower,
  ShieldCheck,
  Store,
  Stethoscope,
  Users,
  Webhook,
  Workflow,
  Wrench,
} from "lucide-react";

const trustStrip = [
  "Official WhatsApp Business Platform",
  "API First",
  "Enterprise Ready",
  "Cloud Hosted",
  "Secure Infrastructure",
];

const heroTrustBadges = [
  "Official WhatsApp Business Platform",
  "Enterprise Ready",
  "Secure APIs",
  "AI Powered",
  "Cloud Hosted",
];

const niwaCapabilities = [
  {
    title: "Payment Reminders",
    description: "Automatically remind customers before due dates.",
    icon: CreditCard,
  },
  {
    title: "Appointment Reminders",
    description: "Reduce missed appointments with automated confirmations and reminders.",
    icon: CalendarClock,
  },
  {
    title: "Service Reminders",
    description: "Notify customers about upcoming vehicle services, maintenance schedules, and renewals.",
    icon: Wrench,
  },
  {
    title: "Student Fee Reminders",
    description: "Automatically send fee reminders, attendance notifications, and important school updates.",
    icon: GraduationCap,
  },
  {
    title: "AI Customer Support",
    description: "Answer customer questions instantly using AI-powered conversations.",
    icon: Bot,
  },
  {
    title: "Broadcast Campaigns",
    description: "Send official WhatsApp campaigns to opted-in customers.",
    icon: RadioTower,
  },
  {
    title: "Customer Notifications",
    description: "Deliver invoices, order updates, payment confirmations, OTPs, and alerts automatically.",
    icon: BellRing,
  },
  {
    title: "Workflow Automation",
    description: "Create automated business workflows without writing code.",
    icon: Workflow,
  },
];

const workflowSteps = [
  {
    title: "Create Your Account",
    description: "Sign up and access your NiWa dashboard.",
    icon: LayoutDashboard,
  },
  {
    title: "Connect WhatsApp Business",
    description:
      "Securely connect your official WhatsApp Business Account using Meta's official onboarding.",
    icon: MessageSquare,
  },
  {
    title: "Connect Your Business Software",
    description:
      "Integrate your CRM, ERP, School ERP, Hospital Software, DMS, APIs, or Webhooks.",
    icon: Link2,
  },
  {
    title: "Create Automation",
    description:
      "Build no-code workflows for reminders, notifications, AI support, and customer engagement.",
    icon: Workflow,
  },
  {
    title: "NiWa Automates Everything",
    description:
      "Messages are automatically delivered to your customers while analytics, conversations, and workflows stay synchronized.",
    icon: SparkWorkflowIcon,
  },
];

const enterpriseTrustCards = [
  "Official WhatsApp Business Platform",
  "Secure Cloud Infrastructure",
  "Role-Based Access",
  "API First Architecture",
  "Webhooks",
  "End-to-End Encryption Support",
  "Enterprise Analytics",
  "Scalable Infrastructure",
];

const manualProblems = [
  "Manual reminders",
  "Forgotten follow-ups",
  "Missed appointments",
  "Delayed customer responses",
  "Scattered communication",
  "Lost revenue",
];

const features = [
  {
    title: "WhatsApp Business",
    description:
      "Connect your verified WhatsApp Business Account and send operational messages from the systems you already use.",
    icon: MessageSquare,
    screenshotLabel: "Connected number",
    workflow: "ERP invoice due -> reminder sent -> customer reply captured",
  },
  {
    title: "Workflow Builder",
    description:
      "Build logic visually with triggers, conditions, AI decisions, message actions, and CRM updates.",
    icon: Workflow,
    screenshotLabel: "Visual automation",
    workflow: "Trigger -> condition -> AI decision -> WhatsApp -> CRM update",
  },
  {
    title: "AI Chatbot",
    description:
      "Automate first-response conversations, qualify leads, answer routine questions, and hand off when needed.",
    icon: Bot,
    screenshotLabel: "AI message flow",
    workflow: "Customer asks -> AI answers -> team notified if needed",
  },
  {
    title: "Payment Reminder",
    description:
      "Reduce missed collections with due-date reminders, escalations, and payment acknowledgment flows.",
    icon: CreditCard,
    screenshotLabel: "Billing reminder",
    workflow: "Due date upcoming -> reminder sent -> payment logged",
  },
  {
    title: "Appointment Reminder",
    description:
      "Send confirmations, reminder nudges, and follow-up actions to reduce no-shows.",
    icon: CalendarClock,
    screenshotLabel: "Appointment flow",
    workflow: "Appointment booked -> reminder sent -> attendance updated",
  },
  {
    title: "Broadcast Campaign",
    description:
      "Run high-volume outbound communication to opted-in users with visibility into results.",
    icon: RadioTower,
    screenshotLabel: "Campaign delivery",
    workflow: "Audience selected -> campaign approved -> responses tracked",
  },
  {
    title: "Shared Team Inbox",
    description:
      "Give support and operations one conversation layer instead of scattered phone, chat, and manual logs.",
    icon: Users,
    screenshotLabel: "Unified inbox",
    workflow: "Message received -> owner assigned -> status updated",
  },
  {
    title: "REST API",
    description:
      "Trigger outbound communication, sync records, and embed NiWa into your existing stack.",
    icon: Link2,
    screenshotLabel: "API event",
    workflow: "POST /messages -> delivery status -> webhook callback",
  },
  {
    title: "Webhooks",
    description:
      "Receive real-time status updates and automate downstream actions across business systems.",
    icon: Webhook,
    screenshotLabel: "Webhook event",
    workflow: "Message delivered -> webhook fired -> CRM timeline updated",
  },
  {
    title: "Analytics",
    description:
      "Track delivery, read rate, response rate, and workflow performance at a business level.",
    icon: BarChart3,
    screenshotLabel: "Delivery analytics",
    workflow: "Sent -> delivered -> read -> replied -> converted",
  },
  {
    title: "CRM Integration",
    description:
      "Use customer records, status changes, and lifecycle events to automate the next message instantly.",
    icon: BriefcaseBusiness,
    screenshotLabel: "CRM sync",
    workflow: "Lead stage changed -> follow-up triggered",
  },
  {
    title: "ERP Integration",
    description:
      "Connect orders, invoices, appointments, or service updates directly to customer communication.",
    icon: Building2,
    screenshotLabel: "ERP event",
    workflow: "Invoice generated -> payment reminder scheduled",
  },
];

const productScreens = [
  {
    title: "Dashboard",
    subtitle: "See delivery, response, and automation activity in one place.",
    icon: LayoutDashboard,
  },
  {
    title: "Workflow Builder",
    subtitle: "Map trigger-based communication visually instead of manually.",
    icon: Workflow,
  },
  {
    title: "Shared Inbox",
    subtitle: "Collaborate on conversations without losing context.",
    icon: Users,
  },
  {
    title: "Analytics",
    subtitle: "Measure delivery, reads, replies, and channel performance.",
    icon: BarChart3,
  },
  {
    title: "Broadcast",
    subtitle: "Send approved updates to opted-in audiences at scale.",
    icon: RadioTower,
  },
  {
    title: "Customer Timeline",
    subtitle: "Track reminders, replies, and workflow history per customer.",
    icon: BellRing,
  },
];

const industries = [
  {
    title: "Schools",
    bullets: ["Fee reminders", "Attendance alerts", "Parent notifications"],
    icon: GraduationCap,
  },
  {
    title: "Hospitals",
    bullets: ["Appointment reminders", "Lab reports", "Medicine reminders"],
    icon: Stethoscope,
  },
  {
    title: "Automobile",
    bullets: ["Service reminders", "Warranty reminders", "Insurance renewal"],
    icon: Wrench,
  },
  {
    title: "Real Estate",
    bullets: ["Site visit reminders", "Lead follow-up", "Payment reminders"],
    icon: Building2,
  },
  {
    title: "Retail",
    bullets: ["Offers", "Order updates", "Support"],
    icon: Store,
  },
  {
    title: "Manufacturing",
    bullets: ["Dealer communication", "Purchase reminders", "Invoice notifications"],
    icon: Factory,
  },
];

const integrations = [
  { label: "WhatsApp", icon: MessageSquare },
  { label: "REST API", icon: Link2 },
  { label: "Webhook", icon: Webhook },
  { label: "Google Sheets", icon: LayoutDashboard },
  { label: "CRM", icon: BriefcaseBusiness },
  { label: "ERP", icon: Building2 },
  { label: "School ERP", icon: GraduationCap },
  { label: "Hospital Software", icon: HeartPulse },
  { label: "Accounting", icon: CreditCard },
  { label: "DMS", icon: Wrench },
];

const futureIntegrations = [
  "Email",
  "SMS",
  "Voice",
  "Instagram",
  "Facebook Messenger",
  "Telegram",
];

const securityItems = [
  {
    title: "Official WhatsApp Business Platform",
    description: "Use Meta's official business messaging infrastructure.",
    icon: MessageSquare,
  },
  {
    title: "Secure API Access",
    description: "Protect integrations using authenticated API requests.",
    icon: Link2,
  },
  {
    title: "Encrypted Communication",
    description: "Data is transmitted securely using industry-standard encryption.",
    icon: LockKeyhole,
  },
  {
    title: "Role-Based Access",
    description: "Control who can access different areas of your workspace.",
    icon: Users,
  },
  {
    title: "Audit Logs",
    description: "Track important activities for transparency and accountability.",
    icon: LayoutDashboard,
  },
  {
    title: "Privacy by Design",
    description: "Protect customer information with privacy-focused architecture.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Cloud Infrastructure",
    description: "Reliable cloud infrastructure built for performance and availability.",
    icon: Building2,
  },
  {
    title: "Enterprise Scalability",
    description: "Scale from a small business to enterprise operations without changing platforms.",
    icon: BarChart3,
  },
];

const securityTrustBadges = [
  "Official WhatsApp Business Platform",
  "Enterprise APIs",
  "Cloud Hosted",
  "Secure Authentication",
  "Privacy Focused",
  "High Availability",
];

const faqs = [
  {
    question: "Can I connect my own WhatsApp Business Account?",
    answer:
      "Yes. NiWa is built to connect your own WhatsApp Business Account so your business retains channel ownership and control.",
  },
  {
    question: "Will NiWa work with my existing software?",
    answer:
      "Yes. NiWa is designed to connect to CRMs, ERPs, school software, hospital software, DMS tools, accounting systems, APIs, and webhook-driven workflows.",
  },
  {
    question: "Can my team use it without technical knowledge?",
    answer:
      "Yes. Business teams can manage day-to-day workflows, while technical teams can extend automations through APIs and webhooks when needed.",
  },
  {
    question: "Can NiWa automate reminders and follow-ups?",
    answer:
      "Yes. Fee reminders, appointment reminders, payment nudges, service updates, and customer follow-ups are core use cases.",
  },
  {
    question: "Is the platform secure?",
    answer:
      "NiWa is presented as an enterprise platform with secure APIs, encrypted communication support, role-based access, audit logs, and privacy-aware architecture.",
  },
];

const proofPoints = [
  { value: "10 sec", label: "To understand what the product does" },
  { value: "1 layer", label: "Between your software and the customer" },
  { value: "0 manual", label: "Reminder chasing once workflows are live" },
];

function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-[#D8E4F6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#295CFF] shadow-[0_10px_30px_-24px_rgba(41,92,255,0.24)]">
        <span className="h-2 w-2 rounded-full bg-[#18C37D]" />
        {eyebrow}
      </div>
      <h2 className="mt-6 text-balance text-3xl font-black tracking-[-0.04em] text-[#081426] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#64748B] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <Reveal delay={index * 0.03}>
      <div className="group h-full rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-[0_24px_60px_-42px_rgba(8,20,38,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFD1FF] hover:shadow-[0_36px_90px_-48px_rgba(41,92,255,0.22)] sm:p-6">
        <div className="rounded-[1.5rem] border border-[#E8EEF8] bg-[linear-gradient(180deg,#F8FBFF_0%,#EFF4FF_100%)] p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#295CFF] shadow-[0_14px_32px_-20px_rgba(41,92,255,0.28)]">
              <Icon size={20} />
            </div>
            <span className="rounded-full border border-[#D6E3FF] bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#295CFF]">
              {feature.screenshotLabel}
            </span>
          </div>
          <div className="mt-5 rounded-[1.25rem] border border-[#DCE6F7] bg-[#081426] p-4 text-white">
            <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-[#98A7BF]">
              <span className="h-2 w-2 rounded-full bg-[#18C37D]" />
              Live workflow
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-100">
              {feature.workflow}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#9CC0FF]">
              <span className="rounded-full bg-white/8 px-2 py-1">Trigger</span>
              <ChevronRight size={14} />
              <span className="rounded-full bg-white/8 px-2 py-1">Action</span>
              <ChevronRight size={14} />
              <span className="rounded-full bg-[#18C37D]/18 px-2 py-1 text-[#89F0BF]">
                Delivered
              </span>
            </div>
          </div>
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#081426]">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#64748B] sm:text-base">
          {feature.description}
        </p>
      </div>
    </Reveal>
  );
}

function CapabilityCard({ item, index }) {
  const Icon = item.icon;

  return (
    <Reveal delay={index * 0.03}>
      <div className="group h-full rounded-[1.85rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_22px_60px_-42px_rgba(8,20,38,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C7D7FF] hover:shadow-[0_34px_80px_-46px_rgba(41,92,255,0.18)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F5FF] text-[#295CFF]">
          <Icon size={22} />
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#081426]">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#64748B] sm:text-base">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function NiwaLandingClient() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-[#081426]">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7FAFF_0%,#F8FAFC_42%,#EEF4FF_100%)] pt-30 pb-18 sm:pt-34 lg:pt-36 lg:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#295CFF]/10 blur-3xl" />
          <div className="absolute left-[8%] top-[28%] h-40 w-40 rounded-full bg-[#06B6D4]/8 blur-3xl" />
          <div className="absolute right-[7%] top-[12%] h-44 w-44 rounded-full bg-[#295CFF]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <Reveal className="max-w-none">
              <div className="px-1 py-2 sm:px-4 lg:py-8">
                <div className="mx-auto max-w-5xl text-center">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#D7E2F5] bg-white px-4 py-2 text-sm font-semibold text-[#081426]">
                    <Image
                      src="/products/niwa/niwa-logo.png"
                      alt="NiWa"
                      width={64}
                      height={36}
                      className="h-7 w-auto"
                    />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#295CFF]" />
                    Official WhatsApp Business Platform
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE6F7] bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Built by Easesmith
                  </div>
                </div>

                <div className="mt-8 mx-auto max-w-4xl sm:mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#295CFF] sm:text-sm">
                    Enterprise Communication Automation
                  </p>
                  <h1 className="mt-4 mx-auto max-w-[24ch] text-balance text-[clamp(2.2rem,9vw,5rem)] font-black leading-[0.96] tracking-[-0.058em] text-[#081426] sm:mt-5">
                    Official WhatsApp Business Platform{" "}
                    <span className="text-[#295CFF] sm:whitespace-nowrap">for Growing Businesses</span>
                  </h1>
                </div>

                <div className="mt-6 mx-auto max-w-3xl space-y-4 sm:mt-7">
                  <p className="text-base leading-8 text-[#475569] sm:text-[1.18rem]">
                    Connect your WhatsApp Business Account and automate reminders,
                    notifications, customer support, and business workflows using
                    AI.
                  </p>
                  <p className="text-sm leading-7 text-[#64748B] sm:text-lg sm:leading-8">
                    Integrate seamlessly with your CRM, ERP, School Software,
                    Hospital Software, DMS, or any existing business software
                    without changing your current workflow.
                  </p>
                </div>

                <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 sm:mt-9 sm:flex sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                  <a
                    href="https://calendly.com/mavyakunal/business-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-[#295CFF] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_24px_50px_-28px_rgba(41,92,255,0.48)] transition-all hover:-translate-y-0.5 hover:bg-[#234fe0] sm:px-8 sm:py-4 sm:text-base"
                  >
                    Book Demo
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://calendly.com/mavyakunal/business-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full min-w-0 items-center justify-center rounded-2xl border border-[#D7E2F5] bg-white px-4 py-3.5 text-sm font-semibold text-[#081426] shadow-[0_18px_40px_-28px_rgba(8,20,38,0.12)] transition-all hover:-translate-y-0.5 hover:border-[#BFD1FF] sm:px-8 sm:py-4 sm:text-base"
                  >
                    Watch Product Demo
                  </a>
                </div>

                <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
                  <div className="mx-auto flex max-w-md flex-wrap justify-center gap-3 md:max-w-none md:flex-nowrap md:overflow-x-auto">
                    {heroTrustBadges.map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#DCE6F7] bg-white/80 px-4 py-2 text-sm font-medium text-[#334155] md:shrink-0"
                      >
                        <CheckCircle2 size={16} className="text-[#18C37D]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mx-auto grid max-w-md gap-3 sm:max-w-3xl sm:grid-cols-3">
                    {proofPoints.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[#E5E7EB] bg-white/72 px-4 py-4"
                      >
                        <div className="text-lg font-bold text-[#295CFF]">{item.value}</div>
                        <div className="mt-1 text-sm leading-6 text-[#64748B]">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What is NiWa?"
              title="One Platform for Every Business Conversation"
              description="NiWa is an enterprise communication automation platform that enables businesses to connect their official WhatsApp Business Account and automate customer communication across every stage of the customer journey."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {niwaCapabilities.map((item, index) => (
              <CapabilityCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How NiWa Works"
              title="How NiWa Works"
              description="Get started in minutes by connecting your existing business systems and letting NiWa automate customer communication."
              align="center"
            />
          </Reveal>

          <div className="mt-12 rounded-[2.2rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_60px_-42px_rgba(8,20,38,0.14)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-5">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 0.05}>
                    <div className="relative h-full">
                      <div className="h-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F8FAFC] p-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#295CFF] shadow-[0_14px_30px_-22px_rgba(41,92,255,0.18)]">
                          <Icon size={22} />
                        </div>
                        <div className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
                          Step {index + 1}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#081426]">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[#64748B]">
                          {step.description}
                        </p>
                      </div>
                      {index < workflowSteps.length - 1 ? (
                        <div className="hidden lg:block">
                          <motion.div
                            className="absolute left-[calc(100%-0.5rem)] top-1/2 h-px w-8 bg-[linear-gradient(90deg,#295CFF,#06B6D4,#18C37D)]"
                            animate={{ opacity: [0.35, 1, 0.35] }}
                            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.15 }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-10 rounded-[1.8rem] border border-[#DCE6F7] bg-[linear-gradient(180deg,#081426_0%,#10213C_100%)] p-6 text-white sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9CC0FF]">
                    Integration architecture
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                    Connect your software stack to NiWa and deliver on WhatsApp automatically
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  Official WhatsApp Business Account supported
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                <div className="space-y-3">
                  {[
                    { label: "CRM", icon: BriefcaseBusiness },
                    { label: "ERP", icon: Building2 },
                    { label: "School ERP", icon: GraduationCap },
                    { label: "Hospital", icon: HeartPulse },
                    { label: "Accounting", icon: CreditCard },
                    { label: "DMS", icon: Wrench },
                    { label: "REST API", icon: Link2 },
                    { label: "Webhooks", icon: Webhook },
                  ].map((node) => {
                    const Icon = node.icon;

                    return (
                      <div
                        key={node.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#9CC0FF]">
                          <Icon size={18} />
                        </div>
                        <span className="text-sm font-medium text-slate-100">{node.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="hidden lg:block">
                  <motion.div
                    className="h-px w-14 bg-[linear-gradient(90deg,#295CFF,#06B6D4,#18C37D)]"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />
                </div>

                <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/products/niwa/niwa-logo.png"
                      alt="NiWa"
                      width={96}
                      height={56}
                      className="h-10 w-auto"
                    />
                    <div>
                      <div className="text-lg font-semibold text-white">NiWa AI Platform</div>
                      <div className="text-sm text-[#9CC0FF]">
                        Automation, orchestration, analytics
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-slate-200">
                    Messages, workflows, analytics, and customer conversations remain synchronized in one platform.
                  </div>
                </div>

                <div className="hidden lg:block">
                  <motion.div
                    className="h-px w-14 bg-[linear-gradient(90deg,#295CFF,#06B6D4,#18C37D)]"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: 0.2 }}
                  />
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18C37D]/18 text-[#7AF0B4]">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          WhatsApp Business
                        </div>
                        <div className="text-xs text-slate-300">
                          Official account messaging
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#9CC0FF]">
                        <Users size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Customer</div>
                        <div className="text-xs text-slate-300">
                          Reminders, alerts, support, and replies
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm text-slate-200">
                        Message delivery animation
                      </div>
                      <motion.div
                        className="flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs text-[#89F0BF]"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      >
                        Delivered
                        <CheckCircle2 size={14} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Enterprise Trust"
              title="Built for Enterprise Communication"
              description="Use your existing WhatsApp Business Account, connect the systems you already run, and automate customer communication with the controls businesses expect."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {enterpriseTrustCards.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="rounded-[1.6rem] border border-[#E5E7EB] bg-white px-5 py-5 shadow-[0_20px_50px_-40px_rgba(8,20,38,0.12)]">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-1 shrink-0 text-[#295CFF]" />
                    <span className="text-sm font-medium leading-6 text-[#334155]">
                      {item}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="rounded-[2rem] border border-[#E5E7EB] bg-white px-6 py-7 shadow-[0_20px_50px_-38px_rgba(8,20,38,0.14)] sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#295CFF]">
                  Trust strip
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#081426]">
                  Enterprise SaaS signals before the scroll gets deep
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {trustStrip.map((segment) => (
                  <div
                    key={segment}
                    className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#334155]"
                  >
                    {segment}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(20rem,0.95fr)] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Problem"
              title="Most Businesses Still Communicate Manually"
              description="Teams still depend on staff to remember reminders, send updates, chase payments, and respond to routine queries. That creates missed follow-ups, slower service, and revenue leakage."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_24px_60px_-38px_rgba(8,20,38,0.14)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#295CFF]">
                NiWa fixes this by design
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {manualProblems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#EF4444]" />
                    <span className="text-sm leading-6 text-[#334155]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-[#D8E4FF] bg-[#F4F8FF] px-5 py-4 text-sm leading-7 text-[#37506D]">
                NiWa connects your software to WhatsApp and future channels, so
                reminders, notifications, support messages, and follow-ups
                happen automatically instead of depending on manual effort.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Features"
              title="A product page that sells the product, not the category"
              description="Each NiWa capability is framed as something a business owner can immediately recognize: what it does, what workflow it replaces, and why it reduces manual communication."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(20rem,1fr)] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Workflow Builder"
                title="Create logic visually instead of coordinating it manually"
                description="The workflow experience should feel obvious to non-technical buyers: software event in, customer message out, business record updated."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-[#DCE6F7] bg-white p-6 shadow-[0_24px_60px_-38px_rgba(8,20,38,0.14)] sm:p-8">
                <div className="space-y-4">
                  {[
                    { title: "Trigger", subtitle: "Invoice generated or appointment booked", icon: BellRing },
                    { title: "Condition", subtitle: "Due date near, payment pending, or attendance missed", icon: CheckCircle2 },
                    { title: "AI Decision", subtitle: "Choose message type, routing, or escalation path", icon: Bot },
                    { title: "WhatsApp Message", subtitle: "Send reminder, notification, or support reply", icon: MessageSquare },
                    { title: "Customer Reply", subtitle: "Capture response and intent in one thread", icon: Users },
                    { title: "Update CRM", subtitle: "Push status, tags, and next action back to source system", icon: BriefcaseBusiness },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="relative">
                        <div className="flex items-center gap-4 rounded-[1.5rem] border border-[#E5E7EB] bg-[#F8FAFC] px-5 py-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#295CFF] shadow-[0_16px_36px_-24px_rgba(41,92,255,0.28)]">
                            <Icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#081426]">{item.title}</h3>
                            <p className="text-sm leading-6 text-[#64748B]">{item.subtitle}</p>
                          </div>
                        </div>
                        {index < 5 ? (
                          <div className="relative mx-auto flex h-7 w-7 items-center justify-center">
                            <motion.div
                              className="absolute h-full w-px bg-[linear-gradient(180deg,#295CFF,#06B6D4,#18C37D)]"
                              animate={{ opacity: [0.45, 1, 0.45] }}
                              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2 }}
                            />
                            <motion.div
                              className="h-2.5 w-2.5 rounded-full bg-[#295CFF]"
                              animate={{ y: [0, 4, 0] }}
                              transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.2 }}
                            />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="Product Screens"
                title="Product surfaces that feel real enough to support a demo CTA"
                description="These cards represent the core product areas a buyer expects to see when evaluating a serious communication platform."
              />
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {productScreens.map((screen, index) => {
                const Icon = screen.icon;

                return (
                  <Reveal key={screen.title} delay={index * 0.03}>
                    <div className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-5 shadow-[0_20px_50px_-38px_rgba(8,20,38,0.14)]">
                      <div className="rounded-[1.4rem] border border-[#E3EBF8] bg-[linear-gradient(180deg,#F9FBFF_0%,#EFF4FF_100%)] p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#295CFF]">
                            <Icon size={20} />
                          </div>
                          <span className="rounded-full border border-[#D7E2F5] bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#295CFF]">
                            Product screen
                          </span>
                        </div>
                        <div className="mt-4 rounded-[1.2rem] border border-[#DDE6F5] bg-[#081426] p-4">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="rounded-xl bg-white/8 p-3" />
                            <div className="rounded-xl bg-white/8 p-3" />
                            <div className="rounded-xl bg-[#18C37D]/22 p-3" />
                          </div>
                          <div className="mt-3 rounded-xl bg-white/8 p-3" />
                          <div className="mt-2 grid grid-cols-2 gap-2">
                            <div className="rounded-xl bg-white/8 p-3" />
                            <div className="rounded-xl bg-white/8 p-3" />
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#081426]">
                        {screen.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#64748B]">
                        {screen.subtitle}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Industry Use Cases"
              title="Show decision makers where NiWa fits in their business"
              description="The use-case layer answers the practical question every buyer has: what exactly would we automate first?"
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <Reveal key={industry.title} delay={index * 0.04}>
                  <div className="h-full rounded-[1.8rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_60px_-42px_rgba(8,20,38,0.14)] transition-all hover:-translate-y-1 hover:border-[#C9D7F7]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F5FF] text-[#295CFF]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#081426]">
                      {industry.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      {industry.bullets.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-[#475569]"
                        >
                          <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#18C37D]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="integrations" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="Integrations"
                title="Can it integrate with my software? That answer should be obvious."
                description="NiWa is positioned as an integration-first communication layer that works with operational systems, APIs, and event-driven workflows."
              />
            </Reveal>

            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {integrations.map((integration, index) => {
                  const Icon = integration.icon;

                  return (
                    <Reveal key={integration.label} delay={index * 0.03}>
                      <div className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 shadow-[0_20px_50px_-38px_rgba(8,20,38,0.14)]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F5FF] text-[#295CFF]">
                          <Icon size={20} />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#081426]">
                          {integration.label}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#64748B]">
                          Connect existing systems without replacing the tools your team already depends on.
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <div className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_50px_-38px_rgba(8,20,38,0.14)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#295CFF]">
                  Future integrations
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {futureIntegrations.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#475569]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(8,20,38,0.14)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
                  Without NiWa
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#081426]">
                  Manual messaging compounds every operational delay
                </h2>
                <ul className="mt-8 space-y-4">
                  {[
                    "Manual messaging",
                    "No automation",
                    "Missed follow-ups",
                    "Poor customer experience",
                    "Multiple software and no communication layer",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4 text-sm leading-6 text-[#475569]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#94A3B8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-[2rem] border border-[#D5E2FF] bg-[linear-gradient(180deg,#081426_0%,#133056_100%)] p-7 text-white shadow-[0_28px_70px_-42px_rgba(8,20,38,0.38)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A8C2FF]">
                  With NiWa
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
                  Communication becomes a system, not a staff dependency
                </h2>
                <ul className="mt-8 space-y-4">
                  {[
                    "Automated workflows",
                    "AI conversations",
                    "Centralized communication",
                    "Real-time analytics",
                    "Higher customer satisfaction",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm leading-6 text-slate-200"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#18C37D]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="security" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            <Reveal>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D8E4F6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#295CFF] shadow-[0_10px_30px_-24px_rgba(41,92,255,0.24)]">
                  <ShieldCheck size={14} className="text-[#295CFF]" />
                  Enterprise-Grade Security
                </div>
                <h2 className="mt-6 text-balance text-3xl font-black tracking-[-0.04em] text-[#081426] sm:text-4xl lg:text-5xl">
                  Enterprise Security Built Into Every Conversation
                </h2>
                <p className="mt-5 text-base leading-8 text-[#64748B] sm:text-lg">
                  NiWa is built with enterprise-grade security to help businesses automate customer communication with confidence. From secure APIs and encrypted communication to role-based access and cloud infrastructure, every part of the platform is designed to protect your business and customer data.
                </p>
                <p className="mt-5 text-sm font-medium leading-7 text-[#475569] sm:text-base">
                  Built using the official WhatsApp Business Platform and modern cloud infrastructure.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_24px_60px_-38px_rgba(8,20,38,0.14)]">
                <div className="flex items-center gap-3 text-[#295CFF]">
                  <ShieldCheck size={22} />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                    Enterprise Security Features
                  </span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {securityItems.map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9D7F7] hover:bg-white hover:shadow-[0_18px_40px_-34px_rgba(8,20,38,0.16)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#DCE6F7] bg-white text-[#295CFF]">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold leading-6 text-[#081426]">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-[#64748B]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-[#E5E7EB] pt-5">
                  <div className="flex flex-wrap gap-3">
                    {securityTrustBadges.map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#334155]"
                      >
                        <CheckCircle2 size={15} className="text-[#18C37D]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Business-focused answers that reduce friction before the demo"
              description="These questions are framed for owners and operators, not technical evaluators."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_50px_-38px_rgba(8,20,38,0.14)]">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold tracking-tight text-[#081426] [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span className="mt-1 text-[#295CFF] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pr-8 text-sm leading-7 text-[#64748B] sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="pb-20 pt-8 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2.6rem] border border-[#D5E2FF] bg-[linear-gradient(135deg,#081426_0%,#1B3E71_48%,#295CFF_100%)] px-7 py-10 text-white shadow-[0_30px_80px_-40px_rgba(8,20,38,0.34)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C3D6FF]">
                    Start Automating Customer Communication Today.
                  </p>
                  <h2 className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                    Book a personalized demo and see how NiWa can automate your
                    business communication in less than 30 minutes.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
                    The next step should be obvious: review your current
                    workflows, identify repetitive communication, and map it to
                    automation.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="https://calendly.com/mavyakunal/business-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-[#081426] transition-all hover:-translate-y-0.5"
                    >
                      Book Demo
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/14"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C3D6FF]">
                    Why book now
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      "See where manual reminders can be removed first",
                      "Review integration fit with your current software",
                      "Understand how WhatsApp automation and AI work together",
                      "Assess rollout scope for your business in one session",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm leading-6 text-slate-100"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <motion.div
        initial={false}
        animate={{
          y: showStickyCta ? 0 : 120,
          opacity: showStickyCta ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4"
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-2xl border border-[#D5E2FF] bg-white/96 px-4 py-3 shadow-[0_24px_60px_-36px_rgba(8,20,38,0.22)] backdrop-blur-xl sm:px-5">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#081426]">
              Ready to automate customer communication?
            </p>
            <p className="hidden text-sm text-[#64748B] sm:block">
              Book a demo and review the right workflow starting point for your business.
            </p>
          </div>
          <a
            href="https://calendly.com/mavyakunal/business-call"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-[#295CFF] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#234fe0]"
          >
            Book Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function SparkWorkflowIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h4" />
      <path d="M15 12h4" />
      <path d="M12 5v4" />
      <path d="M12 15v4" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="m17.5 6.5 1 1" />
      <path d="m5.5 18.5 1 1" />
      <path d="m6.5 6.5-1 1" />
      <path d="m18.5 18.5-1 1" />
    </svg>
  );
}
