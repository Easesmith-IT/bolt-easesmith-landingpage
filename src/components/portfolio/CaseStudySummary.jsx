import { caseStudies } from "@/data/portfolio";
import Link from "next/link";

const UPDATED_DATE = "2026-07-24";

export default function CaseStudySummary({ url }) {
  const study = caseStudies.find((item) => item.url === url);

  if (!study) {
    return null;
  }

  const relatedStudies = caseStudies
    .filter((item) => item.url !== url)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${study.name} — ${study.type} Case Study`,
    description: study.tagline,
    dateModified: UPDATED_DATE,
    creator: {
      "@type": "Organization",
      name: "Easesmith",
      url: "https://www.easesmith.com",
    },
    about: {
      "@type": "Organization",
      name: study.client,
    },
    url: `https://www.easesmith.com${study.url}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 lg:px-8">
        <article className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
            Client case study · Updated July 2026
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {study.name} — {study.type} Case Study
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {study.tagline}
          </p>

          <dl className="mt-10 grid gap-6 md:grid-cols-3">
            <div>
              <dt className="text-sm font-bold text-slate-950">Challenge</dt>
              <dd className="mt-2 text-sm leading-7 text-slate-600">
                {study.challenge}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-slate-950">
                Design process
              </dt>
              <dd className="mt-2 text-sm leading-7 text-slate-600">
                {study.approach}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-slate-950">
                Documented outcome
              </dt>
              <dd className="mt-2 text-sm leading-7 text-slate-600">
                {study.outcome}
              </dd>
            </div>
          </dl>

          <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-950">
              Evidence included in this case study
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {study.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="rounded-full bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800"
                >
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>

          <nav className="mt-9" aria-label="Related case studies">
            <span className="text-sm font-bold text-slate-950">
              Related work:
            </span>{" "}
            {relatedStudies.map((relatedStudy, index) => (
              <span key={relatedStudy.url}>
                {index > 0 ? " · " : ""}
                <Link
                  href={relatedStudy.url}
                  className="text-sm font-semibold text-sky-700 underline-offset-4 hover:underline"
                >
                  {relatedStudy.name}
                </Link>
              </span>
            ))}
          </nav>
        </article>
      </section>
    </>
  );
}
