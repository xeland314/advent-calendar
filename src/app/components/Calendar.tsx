"use client";

import { useMemo } from "react";
import GiftWithCountdown from "./CountdownGift";
import { surprises } from "../data/gifts";
import DayGift from "./DayGift";

const Calendar: React.FC = () => {
  const today = new Date();

  // Memoizar las fechas para garantizar estabilidad
  const dates = useMemo(() => {
    return Array.from(
      { length: 25 },
      (_, i) => new Date(today.getFullYear(), 11, i + 1)
    );
  }, [today.getFullYear()]);

  return (
    <div className="w-full grid place-items-center p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {dates.map((day, index) => (
        <GiftWithCountdown
          key={index}
          date={day}
          surprise={<DayGift date={day} content={surprises[index]} />}
        />
      ))}
    </div>
  );
};

export default Calendar;
