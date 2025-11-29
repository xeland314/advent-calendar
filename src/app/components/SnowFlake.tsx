"use client";

import React, { useState, useEffect } from "react";

interface SnowflakeProps {
  id: number;
  size: number;
  duration: number;
}

// Genera un número aleatorio de 1 a max (incluido)
const rand = (max: number) => Math.floor(Math.random() * max) + 1;

/**
 * Componente de un copo de nieve individual con animación CSS.
 */
const Snowflake = React.memo(({ id, size, duration }: SnowflakeProps) => {
  // Nota: La posición 'left' se randomiza en el render inicial.
  return (
    <div
      key={id}
      className="absolute text-white/80"
      style={{
        left: `${rand(100)}vw`,
        fontSize: `${size}px`,
        // La animación comienza inmediatamente al montarse el componente
        animation: `snowfall ${duration}s linear 0s infinite`,
        opacity: Math.random() * 0.7 + 0.3,
        // Agregamos una ligera variación horizontal para simular viento (mejorado)
        transform: "translateX(0)",
        animationTimingFunction: "cubic-bezier(0.5, 0.05, 0.5, 0.95)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-snowflake-icon lucide-snowflake"
      >
        <path d="m10 20-1.25-2.5L6 18" />
        <path d="M10 4 8.75 6.5 6 6" />
        <path d="m14 20 1.25-2.5L18 18" />
        <path d="m14 4 1.25 2.5L18 6" />
        <path d="m17 21-3-6h-4" />
        <path d="m17 3-3 6 1.5 3" />
        <path d="M2 12h6.5L10 9" />
        <path d="m20 10-1.5 2 1.5 2" />
        <path d="M22 12h-6.5L14 15" />
        <path d="m4 10 1.5 2L4 14" />
        <path d="m7 21 3-6-1.5-3" />
        <path d="m7 3 3 6h4" />
      </svg>
    </div>
  );
});

// FIX: Se asigna explícitamente el display name para satisfacer la regla 'react/display-name' de ESLint.
Snowflake.displayName = "Snowflake";

/**
 * Contenedor de la animación de nieve con generación dinámica y limpieza.
 */
const Snowflakes = () => {
  // Estado para almacenar los copos generados
  const [snowflakes, setSnowflakes] = useState<SnowflakeProps[]>([]);
  const [isClient, setIsClient] = useState(false);
  const maxSnowflakes = 100; // Máximo de copos activos
  const generationInterval = 250; // Generar un nuevo copo cada 250ms

  // Efecto para marcar que el componente se ha montado en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efecto para la generación de nieve (solo se ejecuta en el cliente)
  useEffect(() => {
    // Si no estamos en el cliente, no generamos nada.
    if (!isClient) return;

    let index = 0;
    // Función para generar y añadir un nuevo copo de nieve
    const snowflakeInterval = setInterval(() => {
      setSnowflakes((prevSnowflakes) => {
        const newFlake = {
          id: index++,
          size: rand(20) + 5,
          duration: rand(20) + 15,
          left: rand(100), // Posición horizontal fija
          opacity: Math.random() * 0.7 + 0.3, // Opacidad fija
        };

        // Mantener un máximo de 'maxSnowflakes' copos para controlar el rendimiento
        return [...prevSnowflakes.slice(-(maxSnowflakes - 1)), newFlake];
      });
    }, generationInterval);

    // Función de limpieza: se ejecuta al desmontar el componente (o al salir del efecto)
    return () => clearInterval(snowflakeInterval);
  }, [isClient]); // Se ejecuta cuando isClient cambia a true

  // Renderizamos solo si estamos en el cliente o si no hay copos aún
  if (!isClient && snowflakes.length === 0) {
    return null; // Opcional: no renderizar nada en el servidor para forzar el render solo en el cliente
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {snowflakes.map((s) => (
        <Snowflake key={s.id} {...s} />
      ))}
    </div>
  );
};

export default Snowflakes;
