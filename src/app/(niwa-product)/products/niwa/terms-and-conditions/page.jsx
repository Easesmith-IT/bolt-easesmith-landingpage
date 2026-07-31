const pageUrl =
  "https://www.easesmith.com/products/niwa/terms-and-conditions";

export const metadata = {
  title: "NiWa Terms and Conditions",
  description:
    "Read the NiWa Terms and Conditions covering eligibility, user accounts, WhatsApp Business Platform usage, billing, customer data, liability, and governing law.",
  alternates: {
    canonical: pageUrl,
  },
};

const sections = [
  {
    title: "1. About the Service",
    paragraphs: [
      "NiWa is an enterprise communication automation platform that enables businesses to automate customer communication through the official WhatsApp Business Platform, APIs, AI automation, integrations, and workflow management.",
    ],
  },
  {
    title: "2. Eligibility",
    paragraphs: ["You must:"],
    items: [
      "Be at least 18 years old.",
      "Have authority to represent your organization.",
      "Provide accurate account information.",
    ],
  },
  {
    title: "3. User Accounts",
    paragraphs: ["You are responsible for:"],
    items: [
      "Maintaining account security.",
      "Protecting login credentials.",
      "Activities performed using your account.",
    ],
    note: "Notify us immediately if unauthorized access occurs.",
  },
  {
    title: "4. WhatsApp Business Platform",
    paragraphs: [
      "NiWa integrates with the official WhatsApp Business Platform.",
      "Customers are responsible for complying with Meta's WhatsApp Business Terms, Commerce Policies, Messaging Policies, and applicable laws.",
      "NiWa does not control Meta's platform or policies.",
    ],
  },
  {
    title: "5. Acceptable Use",
    paragraphs: ["You agree not to:"],
    items: [
      "Send spam",
      "Send unlawful content",
      "Harass users",
      "Misrepresent your identity",
      "Violate intellectual property rights",
      "Distribute malware",
      "Interfere with platform security",
      "Circumvent usage limitations",
    ],
    note: "Violation may result in suspension or termination.",
  },
  {
    title: "6. Subscription and Billing",
    paragraphs: [
      "Some features require a paid subscription.",
      "Charges may include:",
    ],
    items: [
      "Platform subscription fees",
      "WhatsApp Business messaging charges",
      "Additional services purchased",
    ],
    note: "Pricing may change with prior notice.",
  },
  {
    title: "7. Customer Data",
    paragraphs: [
      "Customers retain ownership of their business data.",
      "NiWa processes data only to provide requested services.",
    ],
  },
  {
    title: "8. Intellectual Property",
    paragraphs: [
      "NiWa, including its software, branding, design, documentation, and content, is owned by Easesmith and protected under applicable intellectual property laws.",
      "Customers retain ownership of their own content and data.",
    ],
  },
  {
    title: "9. Service Availability",
    paragraphs: [
      "We strive to provide reliable services but do not guarantee uninterrupted availability.",
      "Maintenance, third-party outages, or technical issues may temporarily affect the platform.",
    ],
  },
  {
    title: "10. Third-Party Services",
    paragraphs: [
      "NiWa integrates with external platforms including:",
    ],
    items: [
      "Meta",
      "CRM software",
      "ERP software",
      "Cloud providers",
      "Payment providers",
    ],
    note: "NiWa is not responsible for the availability or actions of third-party services.",
  },
  {
    title: "11. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law:",
    ],
    items: [
      'NiWa is provided "as is."',
      "We are not liable for indirect, incidental, special, or consequential damages.",
      "Our liability shall not exceed the fees paid by you during the preceding twelve (12) months for the affected services.",
    ],
    note: "Nothing in these Terms excludes liability that cannot legally be excluded.",
  },
  {
    title: "12. Suspension and Termination",
    paragraphs: [
      "We may suspend or terminate accounts that:",
    ],
    items: [
      "Violate these Terms.",
      "Engage in illegal activities.",
      "Abuse the platform.",
      "Threaten platform security.",
    ],
    note: "Customers may terminate their account at any time, subject to any applicable subscription terms.",
  },
  {
    title: "13. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms periodically.",
      "Continued use of NiWa constitutes acceptance of updated Terms.",
    ],
  },
  {
    title: "14. Governing Law",
    paragraphs: [
      "These Terms shall be governed by the laws of India.",
      "Any disputes shall be subject to the exclusive jurisdiction of the courts located in Varanasi, Uttar Pradesh, India, unless otherwise required by applicable law.",
    ],
  },
  {
    title: "15. Contact Information",
    paragraphs: [
      "NiWa",
      "A Product by Easesmith",
      "Email: support@easesmith.com",
      "Website: https://www.easesmith.com",
    ],
  },
];

export default function NiwaTermsAndConditionsPage() {
  return (
    <div className="bg-[#F8FAFC] pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-[0_24px_60px_-42px_rgba(8,20,38,0.14)] sm:p-10 lg:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8E4F6] bg-[#F8FAFC] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#295CFF]">
            Terms and Conditions
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-[#081426] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#64748B]">
            Last Updated: July 31, 2026
          </p>
          <p className="mt-8 text-base leading-8 text-[#475569] sm:text-lg">
            Welcome to NiWa.
          </p>
          <p className="mt-4 text-base leading-8 text-[#475569] sm:text-lg">
            These Terms govern your access to and use of the NiWa platform
            operated by Easesmith.
          </p>
          <p className="mt-4 text-base leading-8 text-[#475569] sm:text-lg">
            By accessing or using NiWa, you agree to these Terms.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold tracking-tight text-[#081426]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-[#475569]">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items ? (
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#295CFF]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.note ? <p>{section.note}</p> : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
