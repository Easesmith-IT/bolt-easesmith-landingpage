import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDirectory = path.resolve("public");
const outputDirectory = path.join(publicDirectory, "og");

const caseStudies = [
  {
    slug: "abhicares",
    title: "AbhiCares",
    source: "portfolio/abhicares/abhicares-card.png",
  },
  {
    slug: "bhoomie-reality",
    title: "Bhoomie Realty",
    source: "portfolio/bhoomie-reality/test-img.png",
  },
  {
    slug: "chaperone",
    title: "Chaperone",
    source: "portfolio/chaperone/chaperone-card.png",
  },
  {
    slug: "corporate-rasta-consulting",
    title: "Corporate Raasta Consulting",
    source: "portfolio/crc/crc-card.png",
  },
  {
    slug: "corporate-rasta-consulting-dashboard",
    title: "Corporate Raasta Dashboard",
    source: "portfolio/crc-dashboard/crc-dashboard-card.png",
  },
  {
    slug: "easemart",
    title: "Easemart",
    source: "portfolio/easemart/easemart-card.svg",
  },
  {
    slug: "sportx",
    title: "SportX",
    source: "portfolio/sportx/sportx-card.webp",
  },
  {
    slug: "tech-tutor",
    title: "Tech Tutor",
    source: "portfolio/tech-tutor/tech-tutor-card.png",
  },
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

await fs.mkdir(outputDirectory, { recursive: true });

for (const caseStudy of caseStudies) {
  const card = await sharp(path.join(publicDirectory, caseStudy.source), {
    limitInputPixels: false,
  })
    .resize({ width: 720, height: 390, fit: "contain" })
    .png()
    .toBuffer();

  const background = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f8fafc"/>
          <stop offset="0.55" stop-color="#e0f2fe"/>
          <stop offset="1" stop-color="#bbf7d0"/>
        </linearGradient>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" flood-opacity="0.18"/>
        </filter>
      </defs>
      <rect width="1200" height="630" fill="url(#background)"/>
      <circle cx="1100" cy="80" r="220" fill="#38bdf8" opacity="0.13"/>
      <circle cx="80" cy="590" r="230" fill="#22c55e" opacity="0.10"/>
      <rect x="420" y="105" width="730" height="430" rx="28" fill="white" opacity="0.96" filter="url(#shadow)"/>
      <circle cx="83" cy="82" r="24" fill="none" stroke="#0284c7" stroke-width="4"/>
      <path d="M68 82h30M75 72h16M75 92h16" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
      <text x="120" y="96" font-family="Arial, sans-serif" font-size="39" font-weight="700" fill="#0f172a">
        <tspan fill="#0284c7">Ease</tspan>smith.
      </text>
      <text x="70" y="250" font-family="Arial, sans-serif" font-size="54" font-weight="700" fill="#0f172a">
        ${escapeXml(caseStudy.title)}
      </text>
      <text x="70" y="305" font-family="Arial, sans-serif" font-size="28" font-weight="600" fill="#0284c7">
        UI/UX Case Study
      </text>
      <text x="70" y="370" font-family="Arial, sans-serif" font-size="22" fill="#475569">
        Strategy and product design
      </text>
    </svg>
  `);

  const outputPath = path.join(outputDirectory, `${caseStudy.slug}.png`);
  await sharp(background)
    .composite([
      { input: card, left: 425, top: 125 },
    ])
    .png({ compressionLevel: 9, palette: true })
    .toFile(outputPath);

  console.log(path.relative(publicDirectory, outputPath));
}
