import type { Metadata } from "next";
import { Tiny5 } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";

const tiny5 = Tiny5({
  variable: "--font-tiny5",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Calendario de Adviento",
  description:
    "Explora la magia de la Navidad con nuestro Calendario de Adviento interactivo. Descubre regalos sorpresa y disfruta de las festividades.",
  authors: [
    { name: "Christopher Villamarín", url: "https://xeland314.github.io/" },
    { name: "xeland314", url: "https://xeland314.github.io/" },
  ],
  creator: "Christopher Villamarín",
  icons: {
    icon: "https://xeland314.github.io/advent-calendar/tapa.svg",
    apple: "https://xeland314.github.io/advent-calendar/tapa.svg",
  },
  keywords: [
    "calendario",
    "adviento",
    "navidad",
    "regalos",
    "sorpresas",
    "diciembre",
    "festividades",
    "celebración",
    "invierno",
    "tradición",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    title: "Calendario de Adviento",
    description:
      "Celebra la temporada navideña con un calendario lleno de sorpresas. ¡No te pierdas esta tradición interactiva!",
    images: ["https://xeland314.github.io/advent-calendar/tapa.svg"],
  },
  openGraph: {
    title: "Calendario de Adviento",
    description:
      "Descubre la magia de la Navidad con este Calendario de Adviento lleno de sorpresas y regalos.",
    url: "https://xeland314.github.io/advent-calendar/",
    siteName: "Calendario de Adviento",
    images: [
      {
        url: "https://xeland314.github.io/advent-calendar/tapa.svg",
        width: 192,
        height: 192,
        alt: "Imagen del Calendario de Adviento",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  manifest: "https://xeland314.github.io/advent-calendar/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`tiny5-regular ${tiny5.variable} antialiased`}>
        <div className="w-full">
          <Header />
        </div>
        {children}
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
