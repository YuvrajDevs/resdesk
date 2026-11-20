import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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

export const viewport: Viewport = { themeColor: "#f7f6f2", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
