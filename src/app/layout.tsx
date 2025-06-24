import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Linked Digital – Performance Marketing for E-commerce Brands",
  description: "Linked Digital helps e-commerce brands scale profitably with data-driven performance marketing. Book a free backend audit today.",
  openGraph: {
    title: "Linked Digital – Performance Marketing for E-commerce Brands",
    description: "Linked Digital helps e-commerce brands scale profitably with data-driven performance marketing. Book a free backend audit today.",
    url: "https://linkeddigital.com/",
    siteName: "Linked Digital",
    images: [
      {
        url: "/linked-digital-logo.svg",
        width: 400,
        height: 400,
        alt: "Linked Digital Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linked Digital – Performance Marketing for E-commerce Brands",
    description: "Linked Digital helps e-commerce brands scale profitably with data-driven performance marketing. Book a free backend audit today.",
    images: ["/linked-digital-logo.svg"],
    creator: "@LinkedDigital",
  },
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://linkeddigital.com/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
