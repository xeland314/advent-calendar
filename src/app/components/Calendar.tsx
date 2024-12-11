"use client";

import GiftWithCountdown from "./CountdownGift";

const Calendar: React.FC = () => {
  const days = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="w-full grid place-items-center p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 border-t-4 border-b-white">
      {days.map((day) => (
        <GiftWithCountdown key={day} day={day} />
      ))}
    </div>
  );
};

export default Calendar;
