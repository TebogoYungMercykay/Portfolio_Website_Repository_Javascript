import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  ...siteMetadata,
  alternates: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" current-theme="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-theme-bg-black text-theme-text w-full"
      >
        {children}
      </body>
    </html>
  );
}
