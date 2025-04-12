"use client";

import Link from "next/link";
import { CoalGift } from "../components";

export default function CoalGiftPage() {
  return (
    <div className="tiny5-regular h-screen flex flex-col items-center justify-center bg-cyan-100 text-white font-sans">
      <h1 className="text-4xl font-bold mb-4 text-black">¡Has recibido un regalo!</h1>
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
