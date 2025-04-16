import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "@/public/globals.css";

import Footer from "@/scaffold/Footer";
import Header from "@/scaffold/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: { default: "AV Construction", template: "%s | AV Construction" },
  description:
    "AV Construction delivers top-tier building and renovation services with a commitment to quality, safety, and innovation. Explore our expert solutions tailored to residential, commercial, and industrial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
