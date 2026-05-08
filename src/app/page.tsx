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
      {isSnowing && <Snowflakes />}
      <div className="w-full max-w-screen-2xl p-4">
        <Calendar />
        <footer className="w-full flex justify-center pt-6">
          <ToggleSnowButton isSnowing={isSnowing} onClick={toggleSnow} />
        </footer>
      </div>
    </div>
  );
}
