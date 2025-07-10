"use client";
import { isPast } from 'date-fns';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// --- Estrategias de Apertura ---

/**
 * Estrategia para regalos de Navidad: solo se pueden abrir si la fecha ya ha pasado.
 */
export const christmasOpeningStrategy = (date: Date): boolean => {
  return isPast(date);
};

/**
 * Estrategia para regalos que se pueden abrir en cualquier momento.
 */
export const anytimeOpeningStrategy = (): boolean => {
  return true;
};

// --- Manejadores de Lógica de Apertura Inválida ---

interface InvalidOpeningParams {
  clickCount: number;
  setClickCount: (fn: (prev: number) => number) => void;
  setIsShaking: (value: boolean) => void;
  router: AppRouterInstance;
}

/**
 * Maneja la lógica cuando un usuario intenta abrir un regalo que aún no está disponible.
 * Realiza una animación de sacudida y redirige a la página de carbón después de 4 intentos.
 */
export const handleInvalidOpening = ({
  clickCount,
  setClickCount,
  setIsShaking,
  router,
}: InvalidOpeningParams) => {
  setClickCount((prevCount) => prevCount + 1);
  setIsShaking(true);
  setTimeout(() => setIsShaking(false), 500); // Duración de la animación de sacudida

  if (clickCount + 1 >= 4) {
    router.push('/coal-gift/');
  }
};
