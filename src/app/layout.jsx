import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Easesmith",
//   description:
//     "Elite technology engineering for businesses that demand excellence.",
//   icons: {
//     icon: "/images/easesmith.svg",
//   },
// };

export const metadata = {
  metadataBase: new URL("https://www.easesmith.com"),

  title: {
    default: "Easesmith",
    template: "%s | Easesmith",
  },

  description:
    "Easesmith helps businesses streamline operations with smart digital solutions, automation, and modern web technologies.",

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
    title: "Easesmith",
    description:
      "Easesmith helps businesses streamline operations with smart digital solutions and automation.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
