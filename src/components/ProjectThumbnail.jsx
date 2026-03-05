import { BarChart3Icon } from "lucide-react";

export function ProjectThumbnail({ category, accentColor, iconBg }) {
  const icons = {
    Shopify: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-70">
        <rect
          x="8"
          y="4"
          width="24"
          height="32"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 12h12M14 18h8M14 24h10M14 30h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    "Custom Software": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-70">
        <rect
          x="4"
          y="8"
          width="32"
          height="24"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 14h32M10 20l4 4-4 4M18 28h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "Mobile Apps": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-70">
        <rect
          x="11"
          y="3"
          width="18"
          height="34"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="20"
          cy="31"
          r="2"
          fill="currentColor"
          className="opacity-40"
        />
        <path
          d="M16 9h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    Automation: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-70">
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 4v4M20 32v4M4 20h4M32 20h4M7.86 7.86l2.83 2.83M29.31 29.31l2.83 2.83M7.86 32.14l2.83-2.83M29.31 10.69l2.83-2.83"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    All: <BarChart3Icon className="w-10 h-10 opacity-70" />,
  };

  const gradients = {
    Shopify: "from-sky-100 to-sky-50",
    "Custom Software": "from-slate-100 to-slate-50",
    "Mobile Apps": "from-sky-50 to-white",
    Automation: "from-sky-100 to-slate-50",
    All: "from-sky-50 to-white",
  };

  return (
    <div
      className={`relative w-full h-48 bg-gradient-to-br ${gradients[category]} flex items-center justify-center overflow-hidden`}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Device mockup */}
      <div className="relative flex items-center justify-center gap-4">
        {/* Laptop frame */}
        <div className="relative">
          <div className="w-32 h-20 bg-white rounded-t-lg border border-gray-200 shadow-lg flex items-center justify-center overflow-hidden">
            <div className="w-full h-3 bg-gray-800 absolute top-0 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <div className="mt-3 w-full px-2 space-y-1">
              <div className="h-1.5 bg-sky-200 rounded-full w-3/4" />
              <div className="h-1.5 bg-gray-100 rounded-full w-full" />
              <div className="h-1.5 bg-gray-100 rounded-full w-5/6" />
              <div className="h-1.5 bg-sky-100 rounded-full w-1/2" />
            </div>
          </div>
          <div className="w-36 h-2 bg-gray-200 rounded-b-sm -mx-2" />
        </div>
        {/* Mobile frame */}
        <div className="w-12 h-20 bg-gray-900 rounded-xl border border-gray-700 flex flex-col items-center justify-center p-1 shadow-lg">
          <div className="w-full flex-1 bg-white rounded-lg overflow-hidden flex flex-col">
            <div className="h-1.5 bg-sky-400 w-full" />
            <div className="flex-1 p-0.5 space-y-0.5">
              <div className="h-1 bg-gray-100 rounded-full w-full" />
              <div className="h-1 bg-sky-100 rounded-full w-3/4" />
              <div className="h-1 bg-gray-100 rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Category icon bubble */}
      <div
        className={`absolute bottom-3 right-3 ${iconBg} rounded-lg p-2 ${accentColor} shadow-sm`}
      >
        {icons[category]}
      </div>
    </div>
  );
}
