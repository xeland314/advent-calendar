"use client";

import Image from "next/image";
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
            image: <Image src="/coal.png" alt="coal" width={64} height={64} />,
          }}
        />
      )}
    </>
  );
};

export default CoalGift;
