import Link from "next/link";
import { CoalGift } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regalo de Carbón - Calendario de Adviento",
  description:
    "Has recibido un regalo sorpresa en el Calendario de Adviento. Descubre más sobre esta divertida experiencia.",
  openGraph: {
    title: "Regalo de Carbón - Calendario de Adviento",
    description:
      "Un toque de humor navideño: Descubre qué te ha traído el Calendario de Adviento.",
    url: "https://xeland314.github.io/advent-calendar/coal-gift/",
    siteName: "Calendario de Adviento",
    images: [
      {
        url: "https://xeland314.github.io/advent-calendar/tapa.svg",
        width: 512,
        height: 512,
        alt: "Regalo de Carbón",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    title: "Regalo de Carbón - Calendario de Adviento",
    description:
      "Un divertido toque de humor para los impacientes. ¡Descubre más en el Calendario de Adviento!",
    images: ["https://xeland314.github.io/advent-calendar/coal.svg"],
  },
};

export default function CoalGiftPage() {
  return (
    <div className="tiny5-regular h-screen flex flex-col items-center justify-center bg-cyan-100 text-white font-sans">
      <h2 className="text-4xl font-bold mb-4 text-black">
        ¡Has recibido un regalo!
      </h2>
      <CoalGift />
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 text-white font-bold"
      >
        Regresar a la página principal
      </Link>
    </div>
  );
}
