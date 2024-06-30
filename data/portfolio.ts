import { IPortofilio } from "types/data/portfolio.d";

/**
 * @description - Portfolio data
 * @constant
 * @type {IPortofilio[]}
 * @default
 */
export const portfolioData: IPortofilio[] = [
  {
    tech: "Laravel",
    image: "/portfolio/sse.png",
    link1: "#",
    link2: "https://sse.delicias.tecnm.mx/",
    title: "ITD SSE",
    text: "Full Stack: Developed with Laravel, Livewire and MySQL.",
  },
  {
    tech: ".Net",
    image: "/portfolio/itdelicias.png",
    link1: "#",
    link2: "https://www.delicias.tecnm.mx/",
    title: "ITD Website",
    text: "Front-end: Mostly HTML, SCSS and JS for design and responsiveness. I worked until june 2021.",
  },
  {
    tech: "NextJS",
    image: "/portfolio/gonher.png",
    link1: "#",
    link2: "https://www.gonherbaterias.com/",
    title: "Baterías Gonher",
    text: "Front-end: This website was developed with NextJS, this website is not for Gonher Group, it's for a client.",
  },
];
