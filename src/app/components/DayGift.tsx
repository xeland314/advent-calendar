/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { isPast } from "date-fns";
import Gift, { GiftContent } from "./Gift";

interface DayBoxProps {
  date: Date;
  content: GiftContent;
}

const DayGift: React.FC<DayBoxProps> = ({ date, content }) => {
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [accessible, setAccessible] = useState(isPast(date));

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
    }
  }, [date, isOpen]);

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
          {isOpen && <Gift text={content.text} image={content?.image} />}
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
          width={192}
          height={192}
        />
      </div>
    </div>
  );
};

export default DayGift;
