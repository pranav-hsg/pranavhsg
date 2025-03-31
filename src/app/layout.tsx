import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { NotificationContainerComponent } from "@/context/notification-context";
import { Head } from "next/document";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav H S G | Full-Stack Developer",
  description: "I build fast, scalable web apps using Angular, Spring Boot, Next.js & more!",
  openGraph: {
    title: "Pranav H S G | Full-Stack Developer",
    description: "Crafting high-performance web applications with Angular, Spring Boot, and Next.js. Check out my work and open-source contributions!",
    url: "https://pranavhsg.com",
    siteName: "Pranav H S G | Full-Stack Developer",
    images: [
      {
        url: "https://pranavhsg.com/images/default-og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranav H S G Portfolio",
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
      __html: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Pranav H S G | Full-Stack Developer",
        "url": "https://pranavhsg.com",
        "author": {
          "@type": "Person",
          "name": "Pranav H S G"
        }
      }
    }
  }
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addHomeJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NotificationContainerComponent>

          <Header />
          {children}
        </NotificationContainerComponent>
      </body>
    </html>
  );
}
