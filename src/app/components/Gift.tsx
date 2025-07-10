import { GiftContent } from "../data/gifts";

const Gift: React.FC<GiftContent> = ({ text, image }) => {
  return (
    <div className="absolute flex flex-col justify-center items-center px-4 text-lg text-center text-black">
      <p>{text || "¡Feliz Navidad! 🎄"}</p>
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default Gift;
