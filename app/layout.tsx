import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://PLACEHOLDER_PRODUCTION_DOMAIN.com"),
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
  openGraph: {
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.seo.themeColor,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <link rel="preconnect" href="https://t.me" />
      </head>
      <body className="bg-base font-sans antialiased">{children}</body>
    </html>
  );
}
