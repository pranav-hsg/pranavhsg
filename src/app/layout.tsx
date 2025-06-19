import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { NotificationContainerComponent } from "@/context/notification-context";
import { Footer } from "./footer";
import Script from "next/script";
import { siteConfig } from "./config/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav H S | Full-Stack Developer",
  description: "I build fast, scalable web apps using Angular, Spring Boot, Next.js & more!",
  openGraph: {
    title: "Pranav H S | Full-Stack Developer",
    description: "Crafting high-performance web applications with Angular, Spring Boot, and Next.js. Check out my work and open-source contributions!",
    url: siteConfig.domainURL,
    siteName: "Pranav H S | Full-Stack Developer",
    images: [
      {
        url: siteConfig.domainURL + "images/default-og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranav H S Portfolio",
      },
    ],
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function addHomeJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Pranav H S | Full-Stack Developer",
        "url": siteConfig.domainURL,
        "author": {
          "@type": "Person",
          "name": "Pranav H S"
        }
      })
    }
  }
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={addHomeJsonLd()} id="personal-script"></Script>
        <NotificationContainerComponent>

          <Header />
          {children}
          <Footer />
        </NotificationContainerComponent>
      </body>
    </html>
  );
}
