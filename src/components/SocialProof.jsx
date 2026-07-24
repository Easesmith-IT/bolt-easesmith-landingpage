import Image from "next/image";

const clients = [
  {
    name: "AbhiCares",
    logo: "/images/client logos/abhicares.png",
  },
  {
    name: "Ansh Developers",
    logo: "/images/client logos/ansh-developers.webp",
  },
  {
    name: "CodIntern",
    logo: "/images/client logos/codintern.svg",
  },
  {
    name: "Corporate Raasta",
    logo: "/images/client logos/croprasta.png",
  },
  {
    name: "CSA",
    logo: "/images/client logos/CSA-logo.png",
  },
  {
    name: "De9to",
    logo: "/images/client logos/de9to logo square.png",
  },
  {
    name: "Founders Unfold",
    logo:
      "/images/client logos/founders-unfold-high-resolution-logo-transparent.png",
    darkCard: true,
  },
  {
    name: "Bhoomie Realty",
    logo: "/images/client logos/image-removebg-preview.png",
  },
  {
    name: "Mavyax",
    logo: "/images/client logos/Mavyax.png",
  },
  {
    name: "Medieco",
    logo: "/images/client logos/medieco.png",
  },
];

export default function SocialProof() {
  return (
    <section
      aria-labelledby="client-logos-heading"
      className="relative overflow-hidden border-y border-slate-200/70 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f5f9ff_100%)] py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              Selected partnerships
            </div>
            <h2
              id="client-logos-heading"
              className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              Trusted by teams building what&apos;s next.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              From growing startups to established businesses, we help ambitious
              teams turn complex ideas into dependable digital products.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
            <span className="text-2xl font-bold tracking-tight text-slate-950">
              10+
            </span>
            <span className="max-w-24 text-xs font-medium leading-4 text-slate-500">
              client partnerships
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className={`group relative flex min-h-28 items-center justify-center overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:min-h-32 sm:p-6 ${
                client.darkCard
                  ? "border-slate-800 bg-slate-900 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.8)] hover:border-slate-700 hover:shadow-[0_20px_45px_-22px_rgba(15,23,42,0.9)]"
                  : "border-slate-200/80 bg-white/90 shadow-[0_14px_35px_-24px_rgba(15,23,42,0.35)] hover:border-sky-200 hover:shadow-[0_20px_45px_-22px_rgba(14,165,233,0.3)]"
              }`}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-8 top-0 h-px ${
                  client.darkCard
                    ? "bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    : "bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
                }`}
              />
              <div className="relative h-14 w-full sm:h-16">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
