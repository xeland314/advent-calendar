import AnimatedBall from "./AnimatedBall";
import CountdownTimer from "./CountdownTimer";

export default function Footer() {
  return (
    <footer className="w-full flex flex-row items-center justify-between px-0 pt-6 bg-black">
      <AnimatedBall position="left" />
      <div className="w-full p-0 sm:p-4 pb-12 sm:pb-12">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pb-4 bg-clip-text text-transparent animate-gradient">
          Proyecto realizado por{" "}
          <a
            href="https://github.com/xeland314"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            xeland314
          </a>
        </p>
        <CountdownTimer />
      </div>
      <AnimatedBall position="right" />
    </footer>
  );
}
