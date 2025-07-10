/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { isPast } from "date-fns";
import Gift from "./Gift";
import { GiftContent } from "../data/gifts";
import { useRouter } from "next/navigation";

interface DayBoxProps {
  date: Date;
  content: GiftContent;
}

const DayGift: React.FC<DayBoxProps> = ({ date, content }) => {
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [accessible, setAccessible] = useState(isPast(date));
  const [isShaking, setIsShaking] = useState(false); // Estado para sacudida
  const [clickCount, setClickCount] = useState(0); // Estado para contar clics
  const router = useRouter(); // Instancia de useRouter

  const handleOpen = useCallback(() => {
    const nowAccessible = isPast(date);
    setAccessible(nowAccessible);

    if (nowAccessible) {
      setIsOpen(!isOpen);
      setHasBeenOpened(true);
      localStorage.setItem(
        `day-${date.toISOString()}-opened`,
        JSON.stringify(true)
      );
    } else {
      // Si no es accesible, aumenta el contador y realiza sacudida
      setClickCount((prevCount) => prevCount + 1);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);

      // Si se hace clic más de tres veces, redirigir
      if (clickCount + 1 >= 4) {
        router.push("/coal-gift/");
      }
    }
  }, [date, isOpen, clickCount, router]);

  useEffect(() => {
    const saved = localStorage.getItem(`day-${date.toISOString()}-opened`);
    if (saved) {
      setHasBeenOpened(true);
    }
  }, [date]);

  return (
    <div
      className={`w-48 h-48 p-2 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out ${
        accessible ? "" : "cursor-not-allowed"
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
            width={192}
            height={192}
          />
          {isOpen && <Gift text={content.text} image={content.image} />}
        </div>
        <motion.img
          src="/tapa.svg"
          alt="Caja Tapa"
          className="absolute top-0 left-0 w-full h-full"
          initial={{ translateY: 0, rotateZ: hasBeenOpened ? 15 : 0 }}
          animate={
            isShaking
              ? { x: [0, -10, 10, -10, 10, 0], y: [0, -10, 10, -10, 10, 0] } // Efecto de sacudida
              : {
                  translateY: isOpen ? 176 : 0,
                  rotateZ: hasBeenOpened ? 15 : 0,
                }
          }
          transition={{ duration: 0.5 }}
          loading="lazy"
          width={192}
          height={192}
        />
      </div>
    </div>
  );
};

export default DayGift;
