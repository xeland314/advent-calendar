"use client";
import { useCallback, useState } from "react";
import { Calendar, ToggleSnowButton } from "./components";
import Snowflakes from "./components/SnowFlake";

export default function Home() {
  const [isSnowing, setIsSnowing] = useState(true);

  const toggleSnow = useCallback(() => {
    setIsSnowing((prev) => !prev);
  }, []);

  return (
    <div className="tiny5-regular w-full flex flex-col items-center justify-center min-h-screen bg-blue-950 text-white font-sans">
      <ToggleSnowButton isSnowing={isSnowing} onClick={toggleSnow} />
      {isSnowing && <Snowflakes />}
      <Calendar />
    </div>
  );
}
