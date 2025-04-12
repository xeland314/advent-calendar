"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Snowflakes = () => {
  const [snowflakes, setSnowflakes] = useState<React.JSX.Element[]>([]); // Estado para almacenar los copos generados
  const [pageHeight, setPageHeight] = useState(0); // Estado para almacenar la altura de la página

  useEffect(() => {
    // Calcular dinámicamente la altura de la página
    const height = document.body.offsetHeight;
    setPageHeight(height);

    const createSnowflakes = (count: number, existingKeys: string[]) => {
      const snowflakeArray = Array.from({ length: count });
      return snowflakeArray.map((_, index) => {
        const uniqueKey = `sf-${index}`;
        if (existingKeys.includes(uniqueKey)) return null; // Evitar duplicados
        const size = Math.random() * 5 + 3;
        const positionTop = `${Math.random() * 100}%`;
        const positionLeft = `${Math.random() * 100}%`;
        const opacity = Math.random();
        const xAnimation = [`${Math.random() * -10}vw`, `${Math.random() * 10}vw`];
        const yAnimation = [0, pageHeight]
        const duration = Math.random() * 5 + 10;

        return (
          <motion.div
            key={uniqueKey}
            className="absolute bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: positionTop,
              left: positionLeft,
              opacity: opacity,
            }}
            animate={{
              y: yAnimation,
              x: xAnimation,
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      }).filter(Boolean); // Filtrar nulos
    };

    const existingKeys = snowflakes.map((flake) => flake.key as string); // Obtener claves existentes
    const newSnowflakes = createSnowflakes(100, existingKeys);
    setSnowflakes((prev) => [...prev, ...(newSnowflakes as React.JSX.Element[])]); // Agregar sin duplicar
  }, [pageHeight, snowflakes]);

  return <div className="fixed inset-0 overflow-hidden z-0">{snowflakes}</div>;
};

export default Snowflakes;
