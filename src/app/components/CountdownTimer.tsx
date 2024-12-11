"use client";

import { useCountdownTimer } from "../hooks";

const CountdownTimer: React.FC = () => {
  const christmas = new Date(new Date().getFullYear(), 11, 25); // Diciembre 25
  const timeLeft = useCountdownTimer(christmas);

  return (
    <p className="text-xl text-white text-center sm:text-2xl">
      {timeLeft.days > 0
        ? `Faltan ${timeLeft.days} días, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos y ${timeLeft.seconds} segundos para Navidad`
        : "¡Feliz Navidad!"}
    </p>
  );
};

export default CountdownTimer;
