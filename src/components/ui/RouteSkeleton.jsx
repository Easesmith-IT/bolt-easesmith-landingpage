const pulse = "animate-pulse rounded-xl bg-slate-200/80";

function ScreenReaderStatus({ label }) {
  return <span className="sr-only">{label}</span>;
}

export function StandardPageSkeleton() {
  return (
    <main aria-busy="true" className="min-h-screen bg-white px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className={`${pulse} mx-auto h-7 w-36`} />
        <div className={`${pulse} mx-auto mt-6 h-14 w-full max-w-2xl`} />
        <div className={`${pulse} mx-auto mt-5 h-5 w-full max-w-xl bg-slate-100`} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-100 p-6">
              <div className={`${pulse} h-12 w-12`} />
              <div className={`${pulse} mt-7 h-6 w-2/3`} />
              <div className={`${pulse} mt-4 h-4 w-full bg-slate-100`} />
              <div className={`${pulse} mt-2 h-4 w-4/5 bg-slate-100`} />
            </div>
          ))}
        </div>
      </div>
      <ScreenReaderStatus label="Loading page…" />
    </main>
  );
}

export function PortfolioGridSkeleton() {
  return (
    <main aria-busy="true" className="min-h-screen bg-white px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className={`${pulse} h-7 w-52`} />
        <div className={`${pulse} mt-6 h-14 w-full max-w-3xl`} />
        <div className="mt-10 flex gap-3 overflow-hidden">
          {[112, 96, 148, 110].map((width) => (
            <div
              key={width}
              className={`${pulse} h-10 shrink-0`}
              style={{ width }}
            />
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="overflow-hidden rounded-3xl border border-slate-100">
              <div className={`${pulse} aspect-[16/10] w-full rounded-none bg-slate-100`} />
              <div className="p-6">
                <div className={`${pulse} h-6 w-1/2`} />
                <div className={`${pulse} mt-4 h-4 w-full bg-slate-100`} />
                <div className={`${pulse} mt-2 h-4 w-3/4 bg-slate-100`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScreenReaderStatus label="Loading portfolio…" />
    </main>
  );
}

export function ServicePageSkeleton() {
  return (
    <main aria-busy="true" className="min-h-screen bg-white px-6 pb-24 pt-32">
      <div className="mx-auto grid max-w-7xl animate-pulse items-center gap-12 lg:grid-cols-2">
        <div>
          <div className={`${pulse} h-7 w-40`} />
          <div className={`${pulse} mt-7 h-14 w-full max-w-xl`} />
          <div className={`${pulse} mt-4 h-14 w-4/5`} />
          <div className={`${pulse} mt-7 h-5 w-full bg-slate-100`} />
          <div className={`${pulse} mt-3 h-5 w-5/6 bg-slate-100`} />
          <div className={`${pulse} mt-9 h-12 w-44 bg-slate-900`} />
        </div>
        <div className={`${pulse} aspect-[4/3] rounded-3xl bg-slate-100`} />
      </div>
      <ScreenReaderStatus label="Loading service…" />
    </main>
  );
}

export function ContactPageSkeleton() {
  return (
    <main aria-busy="true" className="min-h-screen bg-white px-6 pb-24 pt-32">
      <div className="mx-auto grid max-w-6xl animate-pulse gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className={`${pulse} h-8 w-40`} />
          <div className={`${pulse} mt-7 h-12 w-full`} />
          <div className={`${pulse} mt-5 h-5 w-5/6 bg-slate-100`} />
          <div className={`${pulse} mt-12 h-20 w-full bg-slate-100`} />
          <div className={`${pulse} mt-4 h-20 w-full bg-slate-100`} />
        </div>
        <div className="rounded-3xl border border-slate-100 p-6 sm:p-8">
          {[0, 1, 2].map((item) => (
            <div key={item} className={`${pulse} mb-5 h-14 w-full bg-slate-100`} />
          ))}
          <div className={`${pulse} h-32 w-full bg-slate-100`} />
          <div className={`${pulse} mt-6 h-12 w-full bg-slate-900`} />
        </div>
      </div>
      <ScreenReaderStatus label="Loading contact form…" />
    </main>
  );
}

export function ShopifyPageSkeleton() {
  return (
    <main aria-busy="true" className="min-h-screen bg-white px-6 pb-24 pt-28">
      <div className="mx-auto grid max-w-7xl animate-pulse items-center gap-12 lg:grid-cols-2">
        <div>
          <div className={`${pulse} h-7 w-44 bg-emerald-100`} />
          <div className={`${pulse} mt-7 h-16 w-full`} />
          <div className={`${pulse} mt-4 h-16 w-4/5`} />
          <div className={`${pulse} mt-7 h-5 w-full bg-slate-100`} />
          <div className={`${pulse} mt-3 h-5 w-3/4 bg-slate-100`} />
          <div className={`${pulse} mt-9 h-13 w-48 bg-emerald-500`} />
        </div>
        <div className={`${pulse} aspect-square rounded-[2rem] bg-emerald-50`} />
      </div>
      <ScreenReaderStatus label="Loading Shopify page…" />
    </main>
  );
}

export function CaseStudySkeleton() {
  return (
    <main aria-busy="true" className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl animate-pulse px-6 pb-20 pt-20 lg:px-8">
        <div className="mb-14 flex items-center justify-between">
          <div className={`${pulse} h-8 w-44`} />
          <div className={`${pulse} h-11 w-32 bg-slate-100`} />
        </div>
        <div className={`${pulse} mx-auto h-8 w-52`} />
        <div className={`${pulse} mx-auto mt-5 h-4 w-full max-w-xl bg-slate-100`} />
        <div className={`${pulse} mx-auto mt-12 aspect-[16/8] w-full max-w-5xl rounded-3xl bg-slate-100`} />
      </div>
      <ScreenReaderStatus label="Loading case study…" />
    </main>
  );
}
