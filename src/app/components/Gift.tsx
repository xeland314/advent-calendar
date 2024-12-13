import { ReactNode } from "react";

export type GiftContent = {
  text: string | null;
  image: ReactNode | null;
};

const Gift: React.FC<GiftContent> = ({ text, image }) => {
  return (
    <div className="absolute flex flex-col justify-center items-center px-4 text-lg text-center text-black">
      <p>{text || "¡Feliz Navidad! 🎄"}</p>
      {image || null}
    </div>
  );
};

export default Gift;
