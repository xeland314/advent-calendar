"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-9999">
        <div className="bg-white border-8 border-black p-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            ¡Rompiste la bola de nieve!
          </h2>
          <p className="text-gray-600 text-xl mb-6">
            ¡Ten más cuidado la próxima vez!
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-500"
            type="button"
            aria-label="Cerrar modal"
            title="Cerrar modal"
            data-testid="close-modal-button"
          >
            Cerrar
          </button>
        </div>
      </div>
    )
  );
}

export default function AnimatedBall({ position }: { position: string }) {
  const [clickCount, setClickCount] = useState(0); // Contador de clics
  const [isDisappearing, setIsDisappearing] = useState(false); // Controla la desaparición
  const [isShaking, setIsShaking] = useState(false); // Controla la animación de sacudida
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal

  const getShakingAnimation = () => {
    return position === "right"
      ? [0, -10, 0, -10, 0, -10]
      : [0, 10, 0, 10, 0, 10];
  };
  const getDisappearingAnimation = () => {
    return position === "left" ? [0, -10, 0] : [0, 10, 0];
  };

  const handleClick = () => {
    if (!isDisappearing) {
      setIsShaking(true); // Inicia la animación de sacudida
      setClickCount((prevCount) => prevCount + 1); // Incrementa el contador

      // Detiene la sacudida después de la animación
      setTimeout(() => {
        setIsShaking(false);
      }, 500); // Duración de la sacudida

      // Activa la animación de desaparición al alcanzar el límite de clics
      if (clickCount + 1 >= 4) {
        setTimeout(() => {
          setIsDisappearing(true);
          setShowModal(true); // Muestra el modal al desaparecer
        }, 500); // Desaparece después de la última sacudida
      }
    }
  };

  return (
    <>
      <motion.img
        src={"/tree-in-ball.gif"}
        alt="tree-in-ball"
        loading="lazy"
        className="cursor-pointer self-end z-10"
        width={64}
        height={64}
        initial={{ x: 0, opacity: 1 }}
        animate={
          isDisappearing
            ? {
                x: getDisappearingAnimation(), // Movimiento final antes de desaparecer
                y: [0, -25, 0],
                opacity: 0, // Desaparece
              }
            : isShaking
            ? { x: getShakingAnimation() } // Movimiento de izquierda a derecha al clic
            : {}
        }
        transition={{
          duration: isDisappearing ? 0.5 : 0.75, // 4s para desaparecer, 0.5s para sacudida
          ease: "easeInOut",
        }}
        onClick={handleClick} // Manejar clics
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
