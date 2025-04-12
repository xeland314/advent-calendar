import Link from "next/link";
import { CoalGift } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Página No Encontrada",
  description:
    "La página que buscas no existe. Regresa a la página principal y sigue explorando el Calendario de Adviento.",
  openGraph: {
    title: "404 - Página No Encontrada",
    description:
      "¿Perdiste tu camino? Descubre el contenido del Calendario de Adviento regresando al inicio.",
    url: "https://xeland314.github.io/advent-calendar/404",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    title: "404 - Página No Encontrada",
    description:
      "No te preocupes, regresa al Calendario de Adviento para seguir descubriendo sorpresas.",
    images: ["https://xeland314.github.io/advent-calendar/tapa.svg"],
  },
};

export default function Custom404() {
  return (
    <div className="tiny5-regular h-screen flex flex-col items-center justify-center bg-cyan-100 text-white font-sans">
      <h2 className="text-4xl font-bold mb-4 text-black">
        404 - Page Not Found
      </h2>
      <CoalGift />
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-red-600 text-white font-bold rounded"
      >
        Regresar a la página principal
      </Link>
    </div>
  );
}
