import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} — ${site.name}, ${site.role}`,
  description: `${site.brand} is the personal real estate practice of ${site.name}. Curated homes, honest advice and a direct line — call or WhatsApp anytime.`,
  openGraph: {
    title: `${site.brand} — ${site.name}, ${site.role}`,
    description: "Curated homes, honest advice, one call away.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
