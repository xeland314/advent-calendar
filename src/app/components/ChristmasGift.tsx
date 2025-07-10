
"use client";

import React from "react";
import WrappedGift from "./WrappedGift";
import Gift from "./Gift";
import { GiftContent } from "@/app/data/gifts";
import {
  christmasOpeningStrategy,
  handleInvalidOpening,
} from "@/app/strategies/openingStrategies";

interface ChristmasGiftProps {
  date: Date;
  content: GiftContent;
}

const ChristmasGift: React.FC<ChristmasGiftProps> = ({ date, content }) => {
  return (
    <WrappedGift
      openingStrategy={() => christmasOpeningStrategy(date)}
      onInvalidOpen={handleInvalidOpening}
      date={date}
      content={<Gift text={content.text} image={content.image} />}
      uniqueId={date.toISOString()} // Usar la fecha como ID único para localStorage
    />
  );
};

export default ChristmasGift;
