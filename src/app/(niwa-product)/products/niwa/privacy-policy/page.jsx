const pageUrl = "https://www.easesmith.com/products/niwa/privacy-policy";

export const metadata = {
  title: "NiWa Privacy Policy",
  description:
    "Read the NiWa Privacy Policy covering data collection, customer communication data, WhatsApp Business Platform usage, security, retention, and contact details.",
  alternates: {
    canonical: pageUrl,
  },
};

const sections = [
  {
    title: "1. About NiWa",
    paragraphs: [
      "NiWa is an enterprise communication automation platform that enables businesses to connect their official WhatsApp Business Account and automate customer communication through workflows, integrations, APIs, and AI-powered automation.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: ["We may collect the following information:"],
    lists: [
      {
        title: "Business Information",
        items: [
          "Business Name",
          "Company Address",
          "GST Number (if applicable)",
          "Business Email",
          "Business Phone Number",
        ],
      },
      {
        title: "Account Information",
        items: [
          "Name",
          "Email Address",
          "Password (encrypted)",
          "User Role",
          "Profile Information",
        ],
      },
      {
        title: "WhatsApp Business Information",
        items: [
          "WhatsApp Business Account ID",
          "Phone Number ID",
          "Display Name",
          "Message Metadata",
          "Template Information",
        ],
      },
    ],
    note: "When you connect your WhatsApp Business Account, we may receive information authorized by Meta. We do not access information beyond the permissions granted by you and Meta.",
  },
  {
    title: "3. Customer Communication Data",
    paragraphs: [
      "NiWa processes customer communication solely to provide automation services, including:",
    ],
    lists: [
      {
        items: [
          "Payment reminders",
          "Appointment reminders",
          "Order notifications",
          "Customer support",
          "AI-powered conversations",
          "Workflow automation",
        ],
      },
    ],
    note: "Customer data belongs to our customers. NiWa does not claim ownership of customer data.",
  },
  {
    title: "4. How We Use Information",
    paragraphs: ["We use information to:"],
    lists: [
      {
        items: [
          "Provide our services",
          "Authenticate users",
          "Process communication workflows",
          "Improve platform performance",
          "Provide customer support",
          "Maintain security",
          "Prevent fraud",
          "Comply with legal obligations",
        ],
      },
    ],
  },
  {
    title: "5. WhatsApp Business Platform",
    paragraphs: [
      "NiWa integrates with the official WhatsApp Business Platform provided by Meta.",
      "All WhatsApp communications are governed by Meta's policies and your organization's permissions.",
      "NiWa does not sell, rent, or misuse WhatsApp Business data.",
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We implement industry-standard security measures, including:",
    ],
    lists: [
      {
        items: [
          "Encrypted communication",
          "Secure cloud infrastructure",
          "Access controls",
          "Role-based permissions",
          "Audit logging",
          "Secure API authentication",
        ],
      },
    ],
    note: "While we strive to protect your information, no online service can guarantee absolute security.",
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "We retain information only as long as necessary to provide services, meet legal obligations, resolve disputes, and maintain security.",
      "Customers may request deletion of their account and associated data, subject to applicable legal requirements.",
    ],
  },
  {
    title: "8. Third-Party Services",
    paragraphs: [
      "NiWa may integrate with third-party services, including but not limited to:",
    ],
    lists: [
      {
        items: [
          "Meta (WhatsApp Business Platform)",
          "Cloud hosting providers",
          "Payment gateways",
          "CRM systems",
          "ERP software",
          "Email providers",
          "Analytics services",
        ],
      },
    ],
    note: "Each third-party service has its own privacy practices.",
  },
  {
    title: "9. Cookies",
    paragraphs: ["Our website may use cookies to:"],
    lists: [
      {
        items: [
          "Improve user experience",
          "Maintain sessions",
          "Analyze website traffic",
          "Enhance security",
        ],
      },
    ],
    note: "You may disable cookies through your browser settings.",
  },
  {
    title: "10. Your Rights",
    paragraphs: [
      "Depending on your jurisdiction, you may have the right to:",
    ],
    lists: [
      {
        items: [
          "Access your information",
          "Correct inaccurate information",
          "Request deletion",
          "Withdraw consent",
          "Export your data",
          "Object to certain processing activities",
        ],
      },
    ],
    note: "Requests can be submitted using the contact details below.",
  },
  {
    title: "11. Children's Privacy",
    paragraphs: [
      "NiWa is intended for businesses and organizations.",
      "Our services are not directed toward individuals under the age of 18.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time.",
      "Updated versions will be published on this page with the revised effective date.",
    ],
  },
  {
    title: "13. Contact Us",
    paragraphs: [
      "NiWa",
      "A Product by Easesmith",
      "Email: support@easesmith.com",
      "Website: https://www.easesmith.com",
    ],
  },
];

export default function NiwaPrivacyPolicyPage() {
  return (
    <div className="bg-[#F8FAFC] pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-[0_24px_60px_-42px_rgba(8,20,38,0.14)] sm:p-10 lg:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8E4F6] bg-[#F8FAFC] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#295CFF]">
            Privacy Policy
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-[#081426] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#64748B]">
            Last Updated: July 31, 2026
          </p>
          <p className="mt-8 text-base leading-8 text-[#475569] sm:text-lg">
            Welcome to NiWa, a business communication automation platform
            developed and operated by Easesmith (&quot;Company&quot;,
            &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>
          <p className="mt-4 text-base leading-8 text-[#475569] sm:text-lg">
            This Privacy Policy explains how we collect, use, store, and
            protect your information when you access our website,
            applications, APIs, and services.
          </p>
          <p className="mt-4 text-base leading-8 text-[#475569] sm:text-lg">
            By using NiWa, you agree to the practices described in this
            Privacy Policy.
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
                  {section.lists?.map((list, index) => (
                    <div key={list.title ?? index}>
                      {list.title ? (
                        <h3 className="text-base font-semibold text-[#081426]">
                          {list.title}
                        </h3>
                      ) : null}
                      <ul className="mt-3 space-y-2">
                        {list.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#295CFF]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
