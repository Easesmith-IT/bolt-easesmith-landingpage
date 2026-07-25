import { NextResponse } from "next/server";

const LEGACY_SECTION_DESTINATIONS = new Map([
  ["/custom-portfolio-posts", "/portfolio"],
  ["/services-page", "/services"],
  ["/shopify-dev-page", "/services/shopify-conversion-optimization"],
]);

const INDEXABLE_PATHS = new Set([
  "/contact-us",
  "/portfolio",
  "/portfolio/abhicares",
  "/portfolio/bhoomie-reality",
  "/portfolio/chaperone",
  "/portfolio/corporate-rasta-consulting",
  "/portfolio/corporate-rasta-consulting-dashboard",
  "/portfolio/easemart",
  "/portfolio/sportx",
  "/portfolio/tech-tutor",
  "/services",
  "/services/app-development",
  "/services/automation",
  "/services/shopify-conversion-optimization",
  "/services/custom-software",
  "/services/mobile-web-development",
]);

export function proxy(request) {
  const pathname = request.nextUrl.pathname;
  const normalizedPathname =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const legacyDestination = LEGACY_SECTION_DESTINATIONS.get(normalizedPathname);

  if (legacyDestination) {
    const destination = new URL(request.url);
    destination.pathname = legacyDestination;
    destination.search = "";

    return NextResponse.redirect(destination, 301);
  }

  if (
    normalizedPathname !== pathname &&
    INDEXABLE_PATHS.has(normalizedPathname)
  ) {
    const destination = new URL(request.url);
    destination.pathname = normalizedPathname;

    return NextResponse.redirect(destination, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
