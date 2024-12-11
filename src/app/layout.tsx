import type { Metadata } from "next";
import { Tiny5 } from "next/font/google";
import "./globals.css";
import { Header } from "./components";
import Head from "next/head";

const tiny5 = Tiny5({
  variable: "--font-tiny5",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Advent Calendar",
  description: "Advent Calendar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Calendario de Adviento</title>
        <meta name="description" content="Calendario de Adviento" />
        <meta
          name="keywords"
          content="calendario, adviento, navidad, regalos, sorpresas, diciembre, festividades, celebración, invierno, tradición"
        />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta property="og:title" content="Calendario de Adviento" />
        <meta property="og:description" content="Calendario de Adviento" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xeland314.github.io/advent-calendar/"
        />
        <meta
          property="og:image"
          content="https://xeland314.github.io/advent-calendar/tapa.svg"
        />
        <meta property="og:site_name" content="Calendario de Adviento" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://xeland314.github.io/advent-calendar/tapa.svg"
        />
        <meta name="twitter:title" content="Calendario de Adviento" />
        <meta name="twitter:description" content="Calendario de Adviento" />
        <meta itemProp="name" content="Calendario de Adviento" />
        <meta itemProp="description" content="Calendario de Adviento" />
        <link
          rel="canonical"
          href="https://xeland314.github.io/advent-calendar/"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`tiny5-regular ${tiny5.variable} antialiased`}>
        <div className="w-full">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
