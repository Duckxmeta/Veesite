import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const getMetadataBase = () => {
  const rawDomain = "https://[CLIENT_DOMAIN]";
  try {
    return new URL(rawDomain);
  } catch {
    return new URL("https://example.com");
  }
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Vee (@veemeta) | Chief Roar Officer at Doginal Dogs & CSN Founding Member",
    template: "%s | Vee (@veemeta)",
  },
  description:
    "Vee (@veemeta) is the Chief Roar Officer at Doginal Dogs and founding member of the Crypto Spaces Network (CSN). Personal brand, live audio Spaces, and community leadership.",
  openGraph: {
    title: "Vee (@veemeta) | Chief Roar Officer at Doginal Dogs",
    description:
      "Official website of Vee (@veemeta), Chief Roar Officer at Doginal Dogs and founding member of Crypto Spaces Network.",
    url: "https://[CLIENT_DOMAIN]",
    siteName: "Vee (@veemeta)",
    images: [
      {
        url: "/Veebanner.jpg",
        width: 1200,
        height: 630,
        alt: "Vee Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vee (@veemeta) | Chief Roar Officer at Doginal Dogs",
    description:
      "Vee (@veemeta) is the Chief Roar Officer at Doginal Dogs and founding member of Crypto Spaces Network (CSN).",
    creator: "@veemeta",
    images: ["/Veebanner.jpg"],
  },
  authors: [{ name: "Kyle Kinkin", url: "https://www.justduckit.xyz/work" }],
  creator: "Kyle Kinkin",
  publisher: "Kyle Kinkin",
  other: {
    "developer-attribution": "Created by Kyle Kinkin (https://www.justduckit.xyz/work)",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

