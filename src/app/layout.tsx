import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Apurv Nimbarge — AI/ML Student • Developer • CTO at Orbion Technologies",
  description:
    "Official developer portfolio of Apurv Nimbarge. B.Tech Artificial Intelligence & Machine Learning student at MIT Vishwaprayag University and Chief Technology Officer at Orbion Technologies.",
  authors: [{ name: "Apurv Nimbarge" }],
  creator: "Apurv Nimbarge",
  publisher: "Apurv Nimbarge",
  keywords: [
    "Apurv Nimbarge",
    "Orbion Technologies",
    "MIT Vishwaprayag University",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "face-api.js",
    "Google GenAI",
    "TypeScript",
    "React 19",
    "Next.js App Router",
    "CTO",
    "Developer Portfolio",
    "Software Engineer",
  ],
  openGraph: {
    title: "Apurv Nimbarge — AI/ML Student • Developer • CTO at Orbion Technologies",
    description:
      "Official developer portfolio of Apurv Nimbarge. B.Tech Artificial Intelligence & Machine Learning student at MIT Vishwaprayag University and Chief Technology Officer at Orbion Technologies.",
    siteName: "Apurv Nimbarge Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apurv Nimbarge — AI/ML Student • Developer • CTO at Orbion Technologies",
    description:
      "B.Tech AI/ML Student at MIT Vishwaprayag University · Chief Technology Officer at Orbion Technologies.",
    creator: "@apurv2116",
    site: "@apurv2116",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Apurv Nimbarge",
  jobTitle: "Chief Technology Officer",
  worksFor: {
    "@type": "Organization",
    name: "Orbion Technologies",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "MIT Vishwaprayag University",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Full-Stack Web Development",
    "System Architecture",
    "TypeScript",
    "React",
    "Next.js",
  ],
  sameAs: [
    "https://github.com/Apurva200631",
    "https://www.linkedin.com/in/apurva-nimbarge-a40310353",
    "https://x.com/apurv2116",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FFFFFF] text-[#1D1D1F] overflow-x-hidden selection:bg-[#0071E3]/15 selection:text-[#1D1D1F]">
        {children}
      </body>
    </html>
  );
}
