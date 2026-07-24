import {
  Aclonica,
  Epilogue,
  Geist,
  Geist_Mono,
  Inter,
  Josefin_Sans,
  Open_Sans,
  Outfit,
  Poppins,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
  display: "swap",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin_sans",
  weight: ["400", "500", "600", "700"],
  preload: false,
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
  display: "swap",
});

const aclonica = Aclonica({
  subsets: ["latin"],
  variable: "--font-aclonica",
  weight: ["400"],
  preload: false,
  display: "swap",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.easesmith.com"),

  title: {
    default: "AI Automation, Software & Shopify Development | Easesmith",
    template: "%s | Easesmith",
  },

  description:
    "Easesmith delivers AI automation, custom software development, and high-performance Shopify solutions that streamline operations and accelerate business growth.",

  keywords: [
    "Easesmith",
    "business automation",
    "digital solutions",
    "software development",
    "web development services",
  ],

  icons: {
    icon: "/images/easesmith.svg",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Automation, Software & Shopify Development | Easesmith",
    description:
      "Easesmith delivers AI automation, custom software development, and high-performance Shopify solutions that streamline operations and accelerate business growth.",
    url: "https://www.easesmith.com",
    siteName: "Easesmith",
    images: [
      {
        url: "/logo-easesmith.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://www.easesmith.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${josefin_sans.variable} ${outfit.variable} ${aclonica.variable} ${open_sans.variable} ${epilogue.variable} antialiased`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Easesmith",
                  url: "https://www.easesmith.com",
                  logo: "https://www.easesmith.com/logo-easesmith.png",
                },
                {
                  "@type": "WebSite",
                  name: "Easesmith",
                  url: "https://www.easesmith.com",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
