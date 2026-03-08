"use client";

import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export const ContactUsClient = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = async (value, type) => {
    await navigator.clipboard.writeText(value);
    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  const phone = "+91 8925687688";
  const email = "Info@easesmith.com";
  const whatsapp = "918925687688";
  const calendly = "https://calendly.com/mavyakunal/business-call";

  const contacts = [
    {
      title: "WhatsApp",
      desc: "Chat with us instantly for quick responses.",
      icon: MessageCircle,
      color: "text-green-500",
      action: `https://wa.me/${whatsapp}`,
      label: "Start Chat",
    },
    {
      title: "Call Us",
      desc: "Speak directly with our team.",
      icon: Phone,
      color: "text-sky-500",
      action: `tel:${phone}`,
      label: phone,
    },
    {
      title: "Email",
      desc: "Send us your questions anytime.",
      icon: Mail,
      color: "text-red-500",
      action: `mailto:${email}`,
      label: "Send Email",
    },
    {
      title: "Book Meeting",
      desc: "Schedule a strategy call with us.",
      icon: Calendar,
      color: "text-purple-500",
      action: calendly,
      label: "Book Now",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-400/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sky-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-6">
          {/* <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-6">
            Let's Start
            <br />
            <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
            A Conversation
            </span>
            </h1> */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black tracking-tight leading-tight mb-6">
            Let's Start
            <br />
            <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
              A Conversation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Whether you want to discuss a project, ask a question, or explore
            collaboration — we're here to help.
          </p>

          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you want to discuss a project, ask a question, or explore
            collaboration — we're here to help.
            </p> */}
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-24 mt-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contacts.map((item, i) => {
              const Icon = item.icon;

              return (
                <Link
                  key={i}
                  href={item.action}
                  target="_blank"
                  className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-10px_rgba(14,165,233,0.18)] hover:border-sky-200"
                >
                  <div className="space-y-5">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-sky-50 flex items-center justify-center transition-colors">
                      <Icon size={22} className={`${item.color}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-black group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    {/* CTA */}
                    {/* <div className="text-sky-600 font-semibold text-sm flex items-center gap-1">
                        {item.label}
                      </div> */}
                    <div className="flex items-center justify-between">
                      <span className="text-sky-600 font-semibold text-sm">
                        {item.label}
                      </span>

                      {(item.title === "Call Us" || item.title === "Email") && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCopy(
                              item.title === "Call Us" ? phone : email,
                              item.title,
                            );
                          }}
                          className="p-1.5 rounded-md hover:bg-gray-100 transition"
                        >
                          {copied === item.title ? (
                            <Check size={16} className="text-green-500" />
                          ) : (
                            <Copy size={16} className="text-gray-500" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
