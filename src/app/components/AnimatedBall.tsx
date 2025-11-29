"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

/**
 * Modal festivo que aparece cuando la bola de nieve "se rompe".
 */
function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-250 p-4">
        <div className="bg-white shadow-2xl p-8 max-w-sm w-full text-center border-8 border-red-600">
          <h2 className="text-3xl font-extrabold mb-3 text-red-700">
            ¡Felices Fiestas!
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Oh oh... parece que agitaste demasiado la bola de nieve. ¡Recuerda que la
            Navidad es para compartir, no para romper!
          </p>
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-red-600 text-white font-bold hover:bg-red-500 transition duration-200 shadow-md flex items-center justify-center"
            type="button"
            aria-label="Cerrar mensaje"
            title="Cerrar mensaje"
          >
            Entendido
          </button>
        </div>
      </div>
    )
  );
}

/**
 * Bola de Nieve Animada con lógica de clic y desaparición.
 */
export default function AnimatedBall({ position }: { position: string }) {
  const [clickCount, setClickCount] = useState(0); // Contador de clics
  const [isDisappearing, setIsDisappearing] = useState(false); // Controla la desaparición
  const [isShaking, setIsShaking] = useState(false); // Controla la animación de sacudida
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal

  // Define la animación de sacudida basada en la posición
  const getShakingAnimation = () => {
    return position === "right"
      ? [0, -10, 0, -10, 0, -10]
      : [0, 10, 0, 10, 0, 10];
  };

  // Define la animación de desaparición (movimiento final explosivo)
  const getDisappearingAnimation = () => {
    // Un pequeño salto o desplazamiento antes de que la opacidad llegue a 0
    return position === "left" ? [-10, 5, 0] : [10, -5, 0];
  };

  const handleClick = () => {
    if (!isDisappearing) {
      setIsShaking(true); // Inicia la animación de sacudida
      setClickCount((prevCount) => prevCount + 1); // Incrementa el contador

      // Detiene la sacudida después de la animación
      setTimeout(() => {
        setIsShaking(false);
      }, 500); // Duración de la sacudida

      // Activa la animación de desaparición al alcanzar el límite de clics (4 clics)
      if (clickCount + 1 >= 4) {
        setTimeout(() => {
          setIsDisappearing(true);
          // Muestra el modal después de que la bola haya desaparecido
          setTimeout(() => {
            setShowModal(true);
          }, 400); // 400ms después de que la desaparición comienza
        }, 500); // Espera a que termine la última sacudida (500ms)
      }
    }
  };

  return (
    <>
      {/* Usamos motion.img como lo solicitaste, asumiendo que las URLs de las imágenes están disponibles */}
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
                y: [0, -15, 0], // Pequeño salto vertical
                opacity: 0, // Desaparece
                scale: 1.5, // Un poco de zoom para el efecto de "explosión"
              }
            : isShaking
            ? { x: getShakingAnimation() } // Movimiento de izquierda a derecha al clic
            : {}
        }
        transition={{
          duration: isDisappearing ? 0.4 : 0.08, // Desaparición rápida (0.4s), sacudida muy rápida (0.08s)
          ease: "easeInOut",
          // Repetimos la sacudida 5 veces para un buen efecto de temblor
          ...(isShaking && { repeat: 5, repeatType: "mirror" }),
        }}
        onClick={handleClick} // Manejar clics
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
