import { TimeLeftProps } from "../hooks";

/**
 * Formats the time left into a human-readable string.
 * 
 * @param {TimeLeftProps} timeLeft - An object containing the time left in days, hours, minutes, and seconds.
 * @returns {string} - A formatted string representing the time left.
 */
export default function getFormattedTimeLeft({
  days,
  hours,
  minutes,
  seconds,
}: TimeLeftProps): string {
  if (days !== 0) {
    return hours !== 0
      ? `Disponible en ${days}d ${hours}h`
      : minutes !== 0
      ? `Disponible en ${days}d ${minutes}min`
      : `Disponible en ${days}d ${seconds}s`;
  }

  if (hours !== 0) {
    return minutes !== 0
      ? `Disponible en ${hours}h ${minutes}min`
      : `Disponible en ${hours}h ${seconds}s`;
  }

  return minutes !== 0
    ? `Disponible en ${minutes}min ${seconds}s`
    : `Disponible en ${seconds}s`;
}
