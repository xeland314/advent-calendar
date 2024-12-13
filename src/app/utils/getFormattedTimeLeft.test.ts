import getFormattedTimeLeft from "./getFormattedTimeLeft";

describe("getFormattedTimeLeft", () => {
  it("should return the correct format for days, hours, minutes, and seconds", () => {
    const result = getFormattedTimeLeft({
      days: 2,
      hours: 5,
      minutes: 30,
      seconds: 45,
    });
    expect(result).toBe("Disponible en 2d 5h");
  });

  it("should return the correct format for days and minutes", () => {
    const result = getFormattedTimeLeft({
      days: 2,
      hours: 0,
      minutes: 30,
      seconds: 45,
    });
    expect(result).toBe("Disponible en 2d 30min");
  });

  it("should return the correct format for days and seconds", () => {
    const result = getFormattedTimeLeft({
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 45,
    });
    expect(result).toBe("Disponible en 2d 45s");
  });

  it("should return the correct format for hours, minutes, and seconds", () => {
    const result = getFormattedTimeLeft({
      days: 0,
      hours: 3,
      minutes: 15,
      seconds: 20,
    });
    expect(result).toBe("Disponible en 3h 15min");
  });

  it("should return the correct format for hours and seconds", () => {
    const result = getFormattedTimeLeft({
      days: 0,
      hours: 3,
      minutes: 0,
      seconds: 20,
    });
    expect(result).toBe("Disponible en 3h 20s");
  });

  it("should return the correct format for minutes and seconds", () => {
    const result = getFormattedTimeLeft({
      days: 0,
      hours: 0,
      minutes: 10,
      seconds: 50,
    });
    expect(result).toBe("Disponible en 10min 50s");
  });

  it("should return the correct format for seconds", () => {
    const result = getFormattedTimeLeft({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 30,
    });
    expect(result).toBe("Disponible en 30s");
  });
});
