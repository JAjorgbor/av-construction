import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "@/public/globals.css";

import Providers from "@/app/Providers";
import Footer from "@/scaffold/Footer";
import Header from "@/scaffold/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";

export const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: { default: "AV Construction", template: "%s | AV Construction" },
  description:
    "AV Constructions delivers top-tier building and renovation services with a commitment to quality, safety, and innovation. Explore our expert solutions tailored to residential, commercial, and industrial projects.",
  other: {
    "google-site-verification": "kQET7HFHGovkX3mgT1SOg3jABZtOvg5P1dcQe4UZ-fw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.variable} antialiased`}>
        <Providers>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-KM0RG3VL3L"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-KM0RG3VL3L');
            `}
          </Script>

          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
