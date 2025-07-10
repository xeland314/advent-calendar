/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// --- Tipos de Props ---

interface WrappedGiftProps {
  content: ReactNode;
  openingStrategy: (date?: Date) => boolean;
  onInvalidOpen?: (
    params: {
      clickCount: number;
      setClickCount: (fn: (prev: number) => number) => void;
      setIsShaking: (value: boolean) => void;
      router: AppRouterInstance;
    }
  ) => void;
  date?: Date;
  uniqueId: string; // Para localStorage
}

// --- Componente ---

const WrappedGift: React.FC<WrappedGiftProps> = ({ 
  content,
  openingStrategy,
  onInvalidOpen,
  date,
  uniqueId 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();

  // Comprobar si el regalo ya se había abierto en el pasado
  useEffect(() => {
    const saved = localStorage.getItem(`gift-${uniqueId}-opened`);
    if (saved) {
      setHasBeenOpened(true);
    }
  }, [uniqueId]);

  const handleOpen = useCallback(() => {
    if (openingStrategy(date)) {
      setIsOpen(!isOpen);
      if (!hasBeenOpened) {
        setHasBeenOpened(true);
        localStorage.setItem(`gift-${uniqueId}-opened`, JSON.stringify(true));
      }
    } else if (onInvalidOpen) {
      onInvalidOpen({ clickCount, setClickCount, setIsShaking, router });
    }
  }, [date, isOpen, hasBeenOpened, uniqueId, clickCount, router, openingStrategy, onInvalidOpen]);

  const isAccessible = openingStrategy(date);

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
            width={192}
            height={192}
          />
          {isOpen && content}
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

export default WrappedGift;
