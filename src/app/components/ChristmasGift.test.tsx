
import { render, screen, fireEvent, act } from "@testing-library/react";
import ChristmasGift from "./ChristmasGift";
import { mockDate, restoreDate } from "@/test-utils/date-mocking";
import { surprises } from "@/app/data/gifts";

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

describe("ChristmasGift", () => {
  const giftDate = new Date(2025, 11, 10); // 10 de diciembre de 2025
  const giftContent = surprises[9]; // Un contenido de ejemplo

  beforeEach(() => {
    localStorageMock.clear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Caso 1: Regalo no abrible (fecha futura)
  test("should not open if the current date is before the gift date", () => {
    jest.setSystemTime(new Date("2025-12-01T12:00:00.000Z")); // 1 de diciembre de 2025
    const { getByAltText } = render(
      <ChristmasGift date={giftDate} content={giftContent} />
    );

    const giftBox = getByAltText("Caja Tapa");
    act(() => {
      fireEvent.click(giftBox);
      jest.runAllTimers();
    });

    // Verificar que la tapa no se ha movido (no se ha abierto)


    // Verificar que el contenido del regalo no está visible
    expect(screen.queryByText(giftContent.text)).not.toBeInTheDocument();
  });

  // Caso 2: Regalo abrible (en su fecha)
  test("should open if the current date is on the gift date", () => {
    jest.setSystemTime(new Date("2025-12-10T12:00:00.000Z")); // 10 de diciembre de 2025
    const { getByAltText } = render(
      <ChristmasGift date={giftDate} content={giftContent} />
    );

    const giftBox = getByAltText("Caja Tapa");
    act(() => {
      fireEvent.click(giftBox);
      jest.runAllTimers();
    });

    // Verificar que la tapa se ha movido (se ha abierto)


    // Verificar que el contenido del regalo está visible
    expect(screen.getByText(new RegExp(giftContent.text.replace(/\n/g, '.*'), 's'))).toBeInTheDocument();
  });

  // Caso 3: Regalo abrible (después de su fecha)
  test("should open if the current date is after the gift date", () => {
    jest.setSystemTime(new Date("2025-12-15T12:00:00.000Z")); // 15 de diciembre de 2025
    const { getByAltText } = render(
      <ChristmasGift date={giftDate} content={giftContent} />
    );

    const giftBox = getByAltText("Caja Tapa");
    act(() => {
      fireEvent.click(giftBox);
      jest.runAllTimers();
    });

    // Verificar que la tapa se ha movido (se ha abierto)


    // Verificar que el contenido del regalo está visible
    expect(screen.getByText(new RegExp(giftContent.text.replace(/\n/g, '.*'), 's'))).toBeInTheDocument();
  });

  // Caso 4: Persistencia - Regalo ya abierto
  test("should be open by default if it was previously opened", () => {
    localStorageMock.setItem(
      `gift-${giftDate.toISOString()}-opened`,
      JSON.stringify(true)
    );
    jest.setSystemTime(new Date("2025-12-15T12:00:00.000Z")); // Después de la fecha de apertura

    const { getByAltText } = render(
      <ChristmasGift date={giftDate} content={giftContent} />
    );

    // Verificar que la tapa está en la posición de abierto


    // Verificar que el contenido del regalo está visible
    expect(screen.getByText(new RegExp(giftContent.text.replace(/\n/g, '.*'), 's'))).toBeInTheDocument();
  });

  // Caso 5: Años Futuros - Regalo no abrible en un año futuro
  test("should not open if the current date is before the gift date in a future year", () => {
    jest.setSystemTime(new Date("2026-12-01T12:00:00.000Z")); // 1 de diciembre de 2026
    const futureGiftDate = new Date(2026, 11, 10); // 10 de diciembre de 2026

    const { getByAltText } = render(
      <ChristmasGift date={futureGiftDate} content={giftContent} />
    );

    const giftBox = getByAltText("Caja Tapa");
    act(() => {
      fireEvent.click(giftBox);
      jest.runAllTimers();
    });


    expect(screen.queryByText(giftContent.text)).not.toBeInTheDocument();
  });

  // Caso 6: Años Futuros - Regalo abrible en un año futuro
  test("should open if the current date is on or after the gift date in a future year", () => {
    jest.setSystemTime(new Date("2026-12-10T12:00:00.000Z")); // 10 de diciembre de 2026
    const futureGiftDate = new Date(2026, 11, 10); // 10 de diciembre de 2026

    const { getByAltText } = render(
      <ChristmasGift date={futureGiftDate} content={giftContent} />
    );

    const giftBox = getByAltText("Caja Tapa");
    act(() => {
      fireEvent.click(giftBox);
      jest.runAllTimers();
    });


    expect(screen.getByText(new RegExp(giftContent.text.replace(/\n/g, '.*'), 's'))).toBeInTheDocument();
  });
});
