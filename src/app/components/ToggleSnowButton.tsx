interface ToggleSnowButtonProps {
  isSnowing: boolean;
  onClick: () => void;
}

/**
 * Botón de estilo pixel art para alternar la nieve.
 */
const ToggleSnowButton = ({ isSnowing, onClick }: ToggleSnowButtonProps) => {
  const baseClasses =
    "w-16 h-16 p-2 cursor-pointer text-white font-bold transition-transform transform active:scale-95 shadow-xl border-4";

  // Estilos específicos para el look pixel art navideño
  const styleClasses = isSnowing
    ? "bg-red-700 hover:bg-red-600 border-red-900 shadow-[4px_4px_0_#450a0a]" // Rojo ON
    : "bg-green-700 hover:bg-green-600 border-green-900 shadow-[4px_4px_0_#064e3b]"; // Verde OFF

  return (
    <button
      onClick={onClick}
      className={`fixed top-4 right-4 z-50 ${baseClasses} ${styleClasses}`}
      aria-label={isSnowing ? "Apagar Nieve" : "Encender Nieve"}
    >
      <div className="flex flex-col items-center justify-center text-xs">
        {isSnowing ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-snowflake-icon lucide-snowflake animate-pulse"
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-icon lucide-square"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
          </svg>
        )}
        <span className="mt-1 text-xs">{isSnowing ? "ON" : "OFF"}</span>
      </div>
    </button>
  );
};
export default ToggleSnowButton;
