import { Calendar } from "./components";
import Snowflakes from "./components/SnowFlake";

export default function Home() {
  return (
    <div className="tiny5-regular w-full flex flex-col items-center justify-center min-h-screen bg-blue-950 text-white font-sans">
      <Snowflakes />
      <Calendar />
    </div>
  );
}
