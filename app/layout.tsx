import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import PageLoader from "@/components/PageLoader";
import { LoadingProvider } from "@/contexts/LoadingContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://thesharkretail.com'),
  title: "Sharks Automation Lab - E-commerce Automation Solutions",
  description: "Sharks Automation Lab - Advanced DND automation tools to boost productivity and stay focused. Work smart with cutting-edge automation solutions.",
  keywords: ["DND automation", "productivity tools", "focus automation", "work smart", "automation solutions", "The Shark Retail"],
  authors: [{ name: "The Shark Retail" }],
  creator: "The Shark Retail",
  publisher: "The Shark Retail",
  applicationName: "The Shark Retail",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesharkretail.com',
    siteName: 'Sharks Automation Lab',
    title: 'Sharks Automation Lab - E-commerce Automation Solutions',
    description: 'Sharks Automation Lab - Advanced DND automation tools to boost productivity and stay focused. Work smart with cutting-edge automation solutions.',
    images: [
      {
        url: '/logo_main.png',
        width: 1200,
        height: 630,
        alt: 'Sharks Automation Lab Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sharkretail',
    creator: '@sharkretail',
    title: 'Sharks Automation Lab - E-commerce Automation Solutions',
    description: 'Sharks Automation Lab - Advanced DND automation tools to boost productivity and stay focused. Work smart with cutting-edge automation solutions.',
    images: ['/logo_main.png'],
  },
  icons: {
    icon: [
      { url: '/logo_main.png', sizes: 'any' },
      { url: '/logo_main.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo_main.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo_main.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/logo_main.png',
    apple: [
      { url: '/logo_main.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo_main.png',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://thesharkretail.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <LoadingProvider>
          <PageLoader />
          <MetaPixel />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
