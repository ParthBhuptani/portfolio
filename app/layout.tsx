import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { site } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Konami } from "@/components/konami";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const baseUrl =
  site.url || "https://parthbhuptani.vercel.app";

const siteTitle = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: siteTitle,
    template: `%s | ${site.name}`,
  },

  description:
  "Parth Bhuptani is a Full Stack Developer from Ahmedabad building modern web applications, AI-powered products, and open-source projects with React, Next.js, TypeScript, and Node.js.",

  applicationName: site.name,

  authors: [
    {
      name: site.name,
      url: baseUrl,
    },
  ],

  creator: site.name,

  publisher: site.name,

  keywords: [
    "Parth Bhuptani",
    "Parth Bhuptani Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "AI Developer",
    "AI Projects",
    "Generative AI",
    "Chrome Extensions",
    "Open Source Developer",
    "Web Developer",
    "VGEC",
    "Ahmedabad Developer",
    "Developer Portfolio",
  ],

  category: "technology",

  alternates: {
    canonical: baseUrl,
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

  openGraph: {
    title: siteTitle,
    description: site.tagline,
    url: baseUrl,
    siteName: site.name,
    type: "website",
    locale: "en_US",

    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Parth Bhuptani — Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: site.tagline,
    images: [`${baseUrl}/og-image.png`],
  },

  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: site.name,

  url: baseUrl,

  jobTitle: site.role,

  description: site.tagline,

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vishwakarma Government Engineering College",
  },

  sameAs: [
    site.socials.github,
    site.socials.twitter,
    site.socials.linkedin,
    site.socials.medium,
  ].filter(Boolean),

  knowsAbout: [
    "Full Stack Development",
    "Frontend Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AI Applications",
    "Generative AI",
    "Chrome Extensions",
    "Open Source",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Nav />

          <main className="relative z-10">
            {children}
          </main>

          <Footer />

          <Konami />
        </ThemeProvider>

        <Analytics />

        <SpeedInsights />

        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
