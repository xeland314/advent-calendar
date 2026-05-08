"use client";

import { useMemo } from "react";
import GiftWithCountdown from "./CountdownGift";
import { surprises } from "../data/gifts";
import ChristmasGift from "./ChristmasGift";

const Calendar: React.FC = () => {
  // Memoizar las fechas para garantizar estabilidad
  const dates = useMemo(() => {
    const today = new Date();
    return Array.from(
      { length: 25 },
      (_, i) => new Date(today.getFullYear(), 11, i + 1)
    );
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-evenly gap-4 p-4">
      {dates.map((day, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[15%]"
        >
          <GiftWithCountdown
            date={day}
            surprise={<ChristmasGift date={day} content={surprises[index]} />}
          />
        </div>
      ))}
    </div>
  );
};

export default Calendar;
