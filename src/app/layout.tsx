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
};

export const metadata: Metadata = {
  title: "Apurv Nimbarge — AI/ML Student • Developer • CTO at Orbion Technologies",
  description:
    "Official developer portfolio of Apurv Nimbarge. B.Tech Artificial Intelligence & Machine Learning student at MIT Vishwaprayag University and Chief Technology Officer at Orbion Technologies.",
  authors: [{ name: "Apurv Nimbarge" }],
  creator: "Apurv Nimbarge",
  keywords: [
    "Apurv Nimbarge",
    "Orbion Technologies",
    "MIT Vishwaprayag University",
    "Artificial Intelligence",
    "Machine Learning",
    "CTO",
    "Developer Portfolio",
    "Software Engineer",
  ],
  openGraph: {
    title: "Apurv Nimbarge — AI/ML Student • Developer • CTO at Orbion Technologies",
    description:
      "Portfolio of Apurv Nimbarge. Undergraduate AI/ML student at MIT Vishwaprayag University and CTO at Orbion Technologies.",
    type: "website",
    locale: "en_US",
  },
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
      <body className="min-h-screen flex flex-col font-sans bg-[#FFFFFF] text-[#1D1D1F]">
        {children}
      </body>
    </html>
  );
}
