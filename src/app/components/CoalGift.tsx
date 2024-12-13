/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import DayGift from "./DayGift";

const CoalGift: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <>
      {date && (
        <DayGift
          date={date}
          content={{
            text: "¡Solo has hallado carbón!",
            image: <img src={"/coal.png"} alt="coal" width={80} height={80} />,
          }}
        />
      )}
    </>
  );
};

export default CoalGift;
