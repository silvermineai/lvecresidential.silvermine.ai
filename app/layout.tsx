import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Courier New", "monospace"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lvecresidential.silvermine.ai"),
  title: {
    default: "LVEC Residential - Top Security Without the Markup | Save $2,000",
    template: "%s | LVEC Residential"
  },
  description: "Enterprise-grade home security at transparent prices. Save $2,000 on installation with our 3-year plan. Professional monitoring, high-end equipment, no door-to-door sales markup. 24/7 monitoring starting at $25/month.",
  keywords: ["home security", "security system", "professional monitoring", "24/7 monitoring", "LVEC Residential", "home alarm", "security installation", "save on security"],
  authors: [{ name: "LVEC Residential" }],
  creator: "LVEC Residential",
  publisher: "LVEC Residential",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "LVEC Residential - Top Security Without the Markup | Save $2,000",
    description: "Enterprise-grade home security at transparent prices. Save $2,000 on installation with our 3-year plan. Professional monitoring starting at $25/month.",
    url: "https://lvecresidential.silvermine.ai",
    siteName: "LVEC Residential",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LVEC Residential - Professional Home Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LVEC Residential - Top Security Without the Markup",
    description: "Save $2,000 on professional home security installation. 24/7 monitoring from $25/month.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lvecresidential.silvermine.ai",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lvecresidential.silvermine.ai",
  name: "LVEC Residential",
  description: "Professional home security services with transparent pricing and enterprise-grade equipment",
  url: "https://lvecresidential.silvermine.ai",
  telephone: "+1-XXX-XXX-XXXX",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US"
  },
  areaServed: {
    "@type": "Country",
    name: "United States"
  },
  service: [
    {
      "@type": "Service",
      name: "Home Security Installation",
      description: "Professional installation of home security systems",
      provider: {
        "@type": "LocalBusiness",
        name: "LVEC Residential"
      },
      serviceType: "Home Security",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free installation with 3-year plan"
      }
    },
    {
      "@type": "Service",
      name: "24/7 Security Monitoring",
      description: "Round-the-clock professional security monitoring",
      provider: {
        "@type": "LocalBusiness",
        name: "LVEC Residential"
      },
      serviceType: "Security Monitoring",
      offers: {
        "@type": "Offer",
        price: "25",
        priceCurrency: "USD",
        description: "Starting at $25/month"
      }
    }
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59"
  },
  sameAs: []
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does LVEC Residential security cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our monitoring starts at $25/month. With our 3-year plan, you get free installation (saving $2,000) and premium equipment."
      }
    },
    {
      "@type": "Question",
      name: "Is there a contract requirement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer both month-to-month and 3-year plans. The 3-year plan includes free installation and saves you $2,000."
      }
    },
    {
      "@type": "Question",
      name: "What equipment is included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our system includes premium door/window sensors, motion detectors, glass break sensors, smart control panel, and mobile app access."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <GoogleAnalytics />
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
