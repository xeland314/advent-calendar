"use client";

import { ReactNode, useState, useEffect } from "react";
import { isPast } from "date-fns";
import { useCountdownTimer } from "../hooks";
import { getFormattedDate, getFormattedTimeLeft } from "../utils";

interface CountdownBoxProps {
  date: Date;
  surprise: ReactNode;
}

interface CountdownTimerForGiftProps {
  date: Date;
}

const CountdownTimerForGift: React.FC<CountdownTimerForGiftProps> = ({ date }) => {
  const [isAccessible, setIsAccessible] = useState(() => isPast(date));
  const timeLeft = useCountdownTimer(date);
  const [hasBeenOpened, setHasBeenOpened] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`day-${date.toISOString()}-opened`);
      return !!saved;
    }
    return false;
  });

  useEffect(() => {
    const checkAccessibility = () => setIsAccessible(isPast(date));
    const checkOpenedStatus = () => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`day-${date.toISOString()}-opened`);
        setHasBeenOpened(!!saved);
      }
    };

    checkOpenedStatus(); // Initial check
    const interval = setInterval(() => {
      checkAccessibility();
      checkOpenedStatus();
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval
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
      <div className="bg-white text-black text-center px-1 border-t-[6px] border-black">
        <p>{getFormattedDate(date)}</p>
      </div>
    </div>
  );
};

const GiftWithCountdown: React.FC<CountdownBoxProps> = ({ date, surprise }) => {
  return (
    <div
      className="flex flex-col items-center mb-44 mt-4"
      id={`gift-${date.toISOString()}`}
    >
      <CountdownTimerForGift date={date} />
      {surprise || null}
    </div>
  );
};

export default GiftWithCountdown;
