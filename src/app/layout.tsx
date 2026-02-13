import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import {
  SITE_URL,
  BRAND,
  SOCIAL,
  OG_IMAGE,
  CONTACT,
  PAGE_SEO,
  buildKeywords,
} from "@/lib/seo";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const homeSEO = PAGE_SEO.home;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BRAND.title,
    template: `%s | ${BRAND.name}`,
  },
  description: homeSEO.description,
  keywords: buildKeywords(homeSEO),
  authors: [{ name: BRAND.name, url: SITE_URL }],
  creator: BRAND.name,
  publisher: BRAND.name,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-ZA": SITE_URL,
      en: SITE_URL,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_ZA",
    alternateLocale: ["en_US", "en_GB"],
    url: SITE_URL,
    siteName: BRAND.name,
    title: homeSEO.ogTitle || homeSEO.title,
    description: homeSEO.ogDescription || homeSEO.description,
    firstName: "Selepe",
    lastName: "Sello",
    username: BRAND.shortName,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
        type: "image/png",
      },
      {
        url: BRAND.profileImageUrl,
        width: 400,
        height: 400,
        alt: `${BRAND.name} profile photo`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SOCIAL.twitter,
    creator: SOCIAL.twitter,
    title: homeSEO.ogTitle || homeSEO.title,
    description: homeSEO.ogDescription || homeSEO.description,
    images: [
      {
        url: OG_IMAGE,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: BRAND.faviconUrl, type: "image/png", sizes: "any" },
      { url: BRAND.faviconUrl, type: "image/png", sizes: "32x32" },
      { url: BRAND.faviconUrl, type: "image/png", sizes: "16x16" },
      { url: BRAND.faviconUrl, type: "image/png", sizes: "192x192" },
      { url: BRAND.faviconUrl, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: BRAND.faviconUrl, sizes: "180x180", type: "image/png" }],
    shortcut: BRAND.faviconUrl,
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  category: "technology",
  other: {
    "application-name": BRAND.name,
    "apple-mobile-web-app-title": BRAND.shortName,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href={BRAND.faviconUrl} type="image/png" />
        <meta name="geo.region" content={CONTACT.location.country} />
        <meta name="geo.placename" content={CONTACT.location.locality} />
        <meta
          name="geo.position"
          content={`${CONTACT.location.latitude};${CONTACT.location.longitude}`}
        />
        <meta
          name="ICBM"
          content={`${CONTACT.location.latitude}, ${CONTACT.location.longitude}`}
        />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
