import type { Metadata } from "next";
import { Tiny5 } from "next/font/google";
import "./globals.css";
import { Header } from "./components";

const tiny5 = Tiny5({
  variable: "--font-tiny5",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Calendario de Adviento",
  description: "Calendario de Adviento",
  authors: [
    { name: "Christopher Villamarín", url: "https://xeland314.github.io/" },
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
    images: ["https://xeland314.github.io/advent-calendar/tapa.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`tiny5-regular ${tiny5.variable} antialiased`}>
        <div className="w-full">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
