/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact-us",
        statusCode: 301,
      },
      {
        source: "/portfolio/bhoomie-realty",
        destination: "/portfolio/bhoomie-reality",
        statusCode: 301,
      },
      {
        source: "/portfolio/corporate-raasta-consulting",
        destination: "/portfolio/corporate-rasta-consulting",
        statusCode: 301,
      },
      {
        source: "/portfolio/corporate-raasta-dashboard",
        destination: "/portfolio/corporate-rasta-consulting-dashboard",
        statusCode: 301,
      },
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/all-services",
        destination: "/services",
        statusCode: 301,
      },
      {
        source: "/corporate-raasta-consulting",
        destination: "/portfolio/corporate-rasta-consulting",
        statusCode: 301,
      },
      {
        source: "/services/E-commerce-development",
        destination: "/services/shopify-conversion-optimization",
        statusCode: 301,
      },
      {
        source: "/services/E-commerce%20development",
        destination: "/services/shopify-conversion-optimization",
        statusCode: 301,
      },
      {
        source: "/services/custom-software-development",
        destination: "/services/custom-software",
        statusCode: 301,
      },
      {
        source: "/shopify-dev-page",
        destination: "/services/shopify-conversion-optimization",
        statusCode: 301,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    minimumCacheTTL: 31_536_000,
  },
  async headers() {
    return [
      {
        source:
          "/portfolio/:path*.:extension(png|jpg|jpeg|webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
