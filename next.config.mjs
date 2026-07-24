/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
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
