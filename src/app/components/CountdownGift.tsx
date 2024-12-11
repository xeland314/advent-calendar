"use client";

import { useEffect, useMemo, useState } from "react";
import { format, isPast } from "date-fns";
import { es } from "date-fns/locale";
import DayGift from "./DayGift";
import { TimeLeftProps, useCountdownTimer } from "../hooks";

interface CountdownBoxProps {
  day: number;
}

function getFormattedTimeLeft({
  days,
  hours,
  minutes,
  seconds,
}: TimeLeftProps): string {
  if (days === 0) {
    if (hours === 0) {
      if (minutes === 0) {
        return `Disponible en ${seconds}s`;
      }
      return `Disponible en ${minutes}min ${seconds}s`;
    }
    return `Disponible en ${hours}h ${minutes}min`;
  }
  return `Disponible en ${days}d ${hours}h`;
}

interface DateFormatterProps {
  date: Date;
}

function getFormattedDate({ date }: DateFormatterProps): string {
  const formattedDate = format(date, "EEEE, dd MMMM yyyy", { locale: es });
  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  return capitalizedDate;
}

const CountdownTimerForGift: React.FC<CountdownBoxProps> = ({ day }) => {
  const today = useMemo(() => new Date(), []);
  const date = useMemo(
    () => new Date(today.getFullYear(), 11, day),
    [today, day]
  );

  const isAccessible = isPast(date);

  const timeLeft = useCountdownTimer(date);

  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(
        `day-${date.toISOString()}-opened`
      );
      if (saved) {
        setHasBeenOpened(true);
      }
    }
  }, [date]);

  return (
    <div className="mb-8 border-[6px] border-black">
      <div className="bg-red-600">
        {isAccessible ? (
          <p className="font-medium text-center text-base text-white stroke-black">
            {hasBeenOpened
              ? "Ya has abierto este regalo"
              : "Puedes abrir este regalo"}
          </p>
        ) : (
          <p className="font-medium text-center text-base text-white stroke-black">
            {getFormattedTimeLeft(timeLeft)}
          </p>
        )}
      </div>
      <div className="bg-white text-black text-center px-12 border-t-[6px] border-black">
        <p>{getFormattedDate({ date })}</p>
      </div>
    </div>
  );
};

const GiftWithCountdown: React.FC<CountdownBoxProps> = ({ day }) => {
  return (
    <div className="flex flex-col items-center mb-44 mt-4" id={`gift-${day}`}>
      <CountdownTimerForGift day={day} />
      <DayGift day={day} />
    </div>
  );
};

export default GiftWithCountdown;
