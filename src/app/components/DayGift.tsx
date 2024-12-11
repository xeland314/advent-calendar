/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useMemo, ReactNode } from "react";
import { motion } from "framer-motion";
import { isPast } from "date-fns";

interface DayBoxProps {
  day: number;
}

type GiftContent = {
  text: string | null;
  image: ReactNode | null;
};

const Gift: React.FC<GiftContent> = ({ text, image }) => {
  return (
    <div className="absolute flex flex-col justify-center items-center px-4 text-lg text-center text-black">
      <p>{text || "¡Feliz Navidad! 🎄"}</p>
      {image || null}
    </div>
  );
};

const surprises: GiftContent[] = [
  { text: "¡Feliz día 1!", image: null },
  {
    text: "¡Un mini árbol de Navidad!",
    image: (
      <img
        src="/tree-in-ball.gif"
        alt="Un mini árbol de navidad"
        loading="lazy"
      />
    ),
  },
  {
    text: "¡Un moño! ✨",
    image: (
      <img src="/moño.svg" alt="Moño" loading="lazy" width={80} height={80} />
    ),
  },
  { text: "Un abrazo virtual lleno de cariño. 🤗", image: null },
  {
    text: "Un poema corto: \nNieve cae suave, \nLuces brillan en la noche, \nNavidad llegó.",
    image: null,
  },
  {
    text: "Un mensaje de esperanza y alegría. 🌟",
    image: null,
  },
  {
    text: "Un poema corto: \nCampanas suenan, \nRisas y alegría, \nNavidad está aquí.",
    image: null,
  },
  {
    text: "Un muñeco de nieve:",
    image: (
      <img src="/muñeco-de-nieve.svg" alt="Muñeco de Nieve" loading="lazy" />
    ),
  },
  {
    text: "Un mensaje de gratitud y amor. 💖",
    image: null,
  },
  {
    text: "Un poema corto: \nLuces parpadean, \nCantos y risas, \nNavidad en el alma.",
    image: null,
  },
  {
    text: "Fuegos artificiales:",
    image: (
      <img src="/fuegos-artificiales.gif" alt="Fuegos Artificiales" loading="lazy" />
    ),
  },
  { text: "La magia de la Navidad está en el aire. 🎄", image: null },
  { text: "Un abrazo cálido y sincero. 🤗", image: null },
  {
    text: "Un poema corto: \nEstrella en el cielo, \nBrilla con fuerza, \nNavidad en el corazón.",
    image: null,
  },
  {
    text: "Una imagen de un paisaje nevado.",
    image: (
      <img src="/paisaje-nevado.png" alt="Paisaje Nevado" loading="lazy" />
    ),
  },
  {
    text: "¡Un Reno!",
    image: (
      <img src="/reno.svg" alt="Reno" loading="lazy" />
    ),
  },
  { text: "Un mensaje de amor y paz. ❤️", image: null },
  {
    text: "Un poema corto: \nCampanas suenan, \nRisas y alegría, \nNavidad está aquí.",
    image: null,
  },
  {
    text: "Una imagen de un árbol de Navidad decorado.",
    image: (
      <img src="/tree.svg" alt="Árbol de Navidad" loading="lazy" />
    ),
  },
  {
    text: "¡Un dulce navideño!",
    image: (
      <img src="/dulce.svg" alt="Dulce Navideño" loading="lazy" />
    ),
  },
  { text: "Un mensaje de gratitud y amor. 💖", image: null },
  {
    text: "Un poema corto: \nLuces parpadean, \nCantos y risas, \nNavidad en el alma.",
    image: null,
  },
  {
    text: "Una imagen de un mercado navideño.",
    image: (
      <img src="/mercado-navideño.png" alt="Mercado Navideño" loading="lazy" />
    ),
  },
  {
    text: "Un GIF de fuegos artificiales. 🎆",
    image: (
      <img src="/fuegos-artificiales.gif" alt="Fuegos Artificiales" loading="lazy" />
    ),
  },
  { text: "Un villancico sorpresa: 🎶", image: null },
];

const DayGift: React.FC<DayBoxProps> = ({ day }) => {
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const today = useMemo(() => new Date(), []);
  const date = useMemo(
    () => new Date(today.getFullYear(), 11, day),
    [today, day]
  );
  const isAccessible = isPast(date); // Diciembre

  const handleOpen = () => {
    if (isAccessible) {
      setIsOpen(!isOpen);
      setHasBeenOpened(true);
      localStorage.setItem(
        `day-${date.toISOString()}-opened`,
        JSON.stringify(true)
      );
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(`day-${date.toISOString()}-opened`);
    if (saved) {
      setHasBeenOpened(true);
    }
  }, [date]);

  return (
    <div
      className={`w-48 h-48 p-2 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out ${
        isAccessible ? "" : "cursor-not-allowed"
      }`}
      onClick={handleOpen}
    >
      <div className="relative w-full h-full">
        <div className="w-full h-full flex items-center justify-center relative">
          <img
            src="/caja-fondo.svg"
            alt="Caja Fondo"
            className="w-full h-full"
            loading="lazy"
          />
          {isOpen && (
            <Gift
              text={surprises[day - 1]?.text}
              image={surprises[day - 1]?.image}
            />
          )}
        </div>
        <motion.img
          src="/tapa.svg"
          alt="Caja Tapa"
          className="absolute top-0 left-0 w-full h-full"
          initial={{ translateY: 0, rotateZ: hasBeenOpened ? 15 : 0 }}
          animate={{
            translateY: isOpen ? 176 : 0,
            rotateZ: hasBeenOpened ? 15 : 0,
          }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default DayGift;
