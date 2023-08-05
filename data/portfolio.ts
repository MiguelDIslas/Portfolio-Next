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
    tech: "Laravel",
    image: "/portfolio/sseitm.png",
    link1: "#",
    link2: "http://egresados.itmexicali.edu.mx/",
    title: "ITM SSE",
    text: "Full Stack: Developed with Laravel, Livewire and MySQL for Mexicali IT.",
  },
  {
    tech: "NetCore",
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
  {
    tech: "Unity",
    image: "/portfolio/ziguein.png",
    link1: "#",
    link2:
      "https://play.google.com/store/apps/details?id=com.MadiProjects.Ziguein",
    title: "Ziguein",
    text: "Developer: Zigzag game developed with unity.",
  },
  {
    tech: "Flutter",
    image: "/portfolio/TDLP.png",
    link1: "https://github.com/MiguelDIslas/Flutter-TDLP",
    link2: "https://play.google.com/store/apps/details?id=com.madi.tdlp",
    title: "TDLP: To Do List",
    text: "Full Stack: Simple to do list using firebase as backend.",
  },
  {
    tech: "Flutter",
    image: "/portfolio/tecplus.png",
    link1: "#",
    link2: "https://play.google.com/store/apps/details?id=com.tecplus.tecplus",
    title: "TEC+",
    text: "Full Stack: Ecommerce for the student community, firebase as backend.",
  },
];
