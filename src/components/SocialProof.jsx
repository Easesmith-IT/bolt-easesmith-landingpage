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
    name: "Crop to Cloth",
    logo: "/images/client logos/crop-to-cloth.svg",
  },
  {
    name: "De9to",
    logo: "/images/client logos/de9to logo square.png",
  },
  {
    name: "Founders Unfold",
    logo:
      "/images/client logos/founders-unfold-high-resolution-logo-transparent.png",
    monochrome: true,
  },
  {
    name: "Hure",
    logo: "/images/client logos/hure.png",
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
      className="relative overflow-hidden border-y border-slate-200/70 bg-white py-12 sm:py-14"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-32 w-[36rem] -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl"
      />

      <div className="relative">
        <div className="mx-auto mb-7 max-w-7xl px-6 text-center lg:px-8">
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-sky-700">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Client Partners
          </div>
          <h2
            id="client-logos-heading"
            className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
          >
            Teams we have helped build for
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Selected brands across commerce, healthcare, education, and software.
          </p>
        </div>

        <div className="relative mx-auto max-w-[90rem] overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28"
          />

          <div className="logo-marquee flex w-max">
            {[false, true].map((duplicate) => (
              <div
                key={duplicate ? "duplicate" : "primary"}
                aria-hidden={duplicate}
                className="flex shrink-0 items-center gap-3 pr-3"
              >
                {clients.map((client) => (
                  <div
                    key={`${duplicate ? "duplicate-" : ""}${client.name}`}
                    className="group flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 shadow-[0_10px_30px_-22px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_14px_30px_-20px_rgba(14,165,233,0.35)] sm:h-24 sm:w-48 sm:px-7"
                  >
                    <div className="relative h-11 w-full sm:h-13">
                      <Image
                        src={client.logo}
                        alt={duplicate ? "" : `${client.name} logo`}
                        fill
                        sizes="192px"
                        className={`object-contain transition-transform duration-300 group-hover:scale-[1.03] ${
                          client.monochrome ? "brightness-0 opacity-75" : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
