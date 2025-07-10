import React from "react";

export interface GiftContent {
  text: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    title?: string;
  };
}

export const surprises: GiftContent[] = [
  { text: "¡Feliz día 1!" },
  {
    text: "¡Un mini árbol de Navidad!",
    image: {
      src: "/tree-in-ball.gif",
      alt: "Un mini árbol de navidad",
      width: 80,
      height: 80,
    },
  },
  {
    text: "¡Un moño! ✨",
    image: {
      src: "/moño.svg",
      alt: "Moño",
      width: 100,
      height: 100,
    },
  },
  { text: "Un abrazo virtual lleno de cariño. 🤗" },
  {
    text: "Un poema corto: \nNieve cae suave, \nLuces brillan en la noche, \nNavidad llegó.",
  },
  {
    text: "Un mensaje de esperanza y alegría. 🌟",
  },
  {
    text: "Un poema corto: \nCampanas suenan, \nRisas y alegría, \nNavidad está aquí.",
  },
  {
    text: "Un muñeco de nieve:",
    image: {
      src: "/muñeco-de-nieve.svg",
      alt: "Muñeco de Nieve",
      width: 80,
      height: 80,
    },
  },
  {
    text: "Un mensaje de gratitud y amor. 💖",
  },
  {
    text: "Un poema corto: \nLuces parpadean, \nCantos y risas, \nNavidad en el alma.",
  },
  {
    text: "Fuegos artificiales:",
    image: {
      src: "/fuegos-artificiales.gif",
      alt: "Fuegos Artificiales",
    },
  },
  { text: "La magia de la Navidad está en el aire. 🎄" },
  { text: "Un abrazo cálido y sincero. 🤗" },
  {
    text: "Un poema corto: \nEstrella en el cielo, \nBrilla con fuerza, \nNavidad en el corazón.",
  },
  {
    text: "Una imagen de un paisaje nevado.",
    image: {
      src: "/paisaje-nevado.png",
      alt: "Paisaje Nevado",
      width: 120,
      height: 80,
    },
  },
  {
    text: "¡Un Reno!",
    image: {
      src: "/reno.svg",
      alt: "Reno",
      width: 80,
      height: 80,
    },
  },
  { text: "Un mensaje de amor y paz. ❤️" },
  {
    text: "Un poema corto: \nCampanas suenan, \nRisas y alegría, \nNavidad está aquí.",
  },
  {
    text: "Una imagen de un árbol de Navidad decorado.",
    image: {
      src: "/tree.svg",
      alt: "Árbol de Navidad",
      width: 80,
      height: 80,
    },
  },
  {
    text: "¡Un dulce navideño!",
    image: {
      src: "/dulce.svg",
      alt: "Dulce Navideño",
      width: 80,
      height: 80,
    },
  },
  { text: "Un mensaje de gratitud y amor. 💖" },
  {
    text: "Un poema corto: \nLuces parpadean, \nCantos y risas, \nNavidad en el alma.",
  },
  {
    text: "Una imagen de un mercado navideño.",
    image: {
      src: "/mercado-navideño.png",
      alt: "Mercado Navideño",
      width: 120,
      height: 80,
    },
  },
  {
    text: "Un GIF de fuegos artificiales. 🎆",
    image: {
      src: "/fuegos-artificiales.gif",
      alt: "Fuegos Artificiales",
      width: 80,
      height: 80,
    },
  },
  { text: "Un villancico sorpresa: 🎶" },
];
