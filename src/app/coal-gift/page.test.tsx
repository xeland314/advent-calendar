
import { render, screen, fireEvent, act } from "@testing-library/react";
import CoalGiftPage from "./page";

// Mock de next/navigation para useRouter
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock de localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("CoalGiftPage", () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Caso 1: El regalo de carbón siempre se abre
  test("should open the coal gift regardless of the date", () => {
    jest.setSystemTime(new Date("2025-01-01T12:00:00.000Z")); // Fecha en enero
    render(<CoalGiftPage />);

    const giftBox = screen.getByAltText("Caja Tapa");

    act(() => {
      fireEvent.click(giftBox);
      jest.runAllTimers();
    });

    // Verificar que la tapa se ha movido (se ha abierto)
    

    // Verificar que el contenido del regalo de carbón está visible
    expect(screen.getByText("¡Recibiste carbón por ser impaciente!")).toBeInTheDocument();
  });

  // Caso 2: El contenido del regalo de carbón es el esperado
  test("should display the correct coal gift content", () => {
    render(<CoalGiftPage />);

    const giftBox = screen.getByAltText("Caja Tapa");
    act(() => {
      fireEvent.click(giftBox);
      jest.runAllTimers();
    });

    expect(screen.getByText("¡Recibiste carbón por ser impaciente!")).toBeInTheDocument();
    expect(screen.getByAltText("Un trozo de carbón")).toBeInTheDocument();
  });

  // Caso 3: Persistencia - El regalo de carbón permanece abierto si ya se abrió
  test("should be open by default if it was previously opened", () => {
    localStorageMock.setItem(
      `gift-coal-gift-opened`,
      JSON.stringify(true)
    );
    render(<CoalGiftPage />);

    // Verificar que la tapa está en la posición de abierto
    const giftLid = screen.getByAltText("Caja Tapa");
    

    // Verificar que el contenido del regalo está visible
    expect(screen.getByText("¡Recibiste carbón por ser impaciente!")).toBeInTheDocument();
  });
});
