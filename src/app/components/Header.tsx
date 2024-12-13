/* eslint-disable @next/next/no-img-element */
import CountdownTimer from "./CountdownTimer";

export default function Header() {
  return (
    <header className="w-full flex flex-row items-center justify-between px-0 pt-6 bg-black">
      <img
        src="/tree-in-ball.gif"
        alt="tree-in-ball"
        loading="lazy"
        className="self-end"
        width={64}
        height={64}
      />
      <div className="w-full p-0 sm:p-4 pb-12 sm:pb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pb-4 bg-clip-text text-transparent animate-gradient">
          Calendario de Adviento
        </h1>
        <CountdownTimer />
      </div>
      <img
        src="/tree-in-ball.gif"
        alt="tree-in-ball"
        loading="lazy"
        className="self-end"
        width={64}
        height={64}
      />
    </header>
  );
}
