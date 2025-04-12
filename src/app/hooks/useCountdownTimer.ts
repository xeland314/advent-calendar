import { useState, useEffect, useRef } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

export type TimeLeftProps = {
  days: number | 0;
  hours: number | 0;
  minutes: number | 0;
  seconds: number | 0;
};

const useCountdownTimer = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeftProps>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Encapsular targetDate en useRef para evitar ciclos de render innecesarios
  const dateRef = useRef(targetDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      setTimeLeft({
        days: differenceInDays(dateRef.current, now),
        hours: differenceInHours(dateRef.current, now) % 24,
        minutes: differenceInMinutes(dateRef.current, now) % 60,
        seconds: differenceInSeconds(dateRef.current, now) % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Dependencias vacías, ya que usamos useRef

  return timeLeft;
};

export default useCountdownTimer;
