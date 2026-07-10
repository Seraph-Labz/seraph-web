import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SERAPH_OG_CARD } from "@public";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const description =
  "Every chain. Every bridge. One truth. Seraph tracks cross-chain transactions across 8 protocols and 14 chains.";

export const metadata: Metadata = {
  metadataBase: new URL("https://seraphh.xyz"),
  title: {
    default: "Seraph - Cross-Chain Transaction Explorer",
    template: "%s · Seraph",
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Seraph",
    title: "Seraph - Cross-Chain Transaction Explorer",
    description,
    images: [
      {
        url: SERAPH_OG_CARD,
        width: 1200,
        height: 630,
        alt: "Seraph — Cross-Chain Transaction Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seraph - Cross-Chain Transaction Explorer",
    description,
    images: [SERAPH_OG_CARD],
  },
};

export const viewport: Viewport = {
  themeColor: "#06080F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
