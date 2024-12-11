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
      <body className={`tiny5-regular ${tiny5.variable} antialiased`}>
        <div className="w-full">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
