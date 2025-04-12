"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Snowflakes = () => {
  const [snowflakes, setSnowflakes] = useState<React.JSX.Element[]>([]); // Estado para almacenar los copos generados
  const [pageHeight, setPageHeight] = useState(0); // Altura dinámica de la página

  // Función para crear un solo copo de nieve
  const createSnowflake = (index: number) => {
    const uniqueKey = `sf-${index}-${Date.now()}`; // Clave única para cada copo
    const size = Math.random() * 5 + 3; // Tamaño aleatorio del copo
    const positionLeft = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    const opacity = Math.random(); // Opacidad aleatoria
    const xAnimation = [Math.random() * -400, Math.random() * 400]; // Movimiento horizontal aleatorio
    const yAnimation = [0, pageHeight]; // Caída vertical según la altura de la página
    const duration = Math.random() * 5 + 15; // Duración de la animación

    return (
      <motion.div
        key={uniqueKey}
        className="absolute bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: "0%", // Inicia desde la parte superior
          left: positionLeft,
          opacity: opacity,
        }}
        animate={{
          y: yAnimation,
          x: xAnimation,
        }}
        transition={{
          duration: duration,
          repeat: Infinity, // Animación infinita
          ease: "easeInOut",
        }}
      />
    );
  };

  useEffect(() => {
    // Actualizar la altura de la página
    const handleResize = () => {
      setPageHeight(document.body.offsetHeight);
    };
    handleResize(); // Calcular altura inicial
    window.addEventListener("resize", handleResize);

    // Intervalo para agregar copos constantemente
    let index = 0; // Índice para generar claves únicas
    const snowflakeInterval = setInterval(() => {
      setSnowflakes((prevSnowflakes) => [
        ...prevSnowflakes.slice(-200), // Mantener un máximo de 200 copos
        createSnowflake(index++), // Agregar un nuevo copo
      ]);
    }, 200); // Generar un copo nuevo cada 200ms

    return () => {
      clearInterval(snowflakeInterval); // Limpiar el intervalo al desmontar
      window.removeEventListener("resize", handleResize); // Limpiar el evento
    };
  }, [pageHeight]);

  return <div className="fixed inset-0 overflow-hidden z-0">{snowflakes}</div>;
};

export default Snowflakes;
