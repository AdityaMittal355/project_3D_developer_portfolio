import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  blender,
  unity,
  vue,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Blockchain",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue Js",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Vue.js Developer",
    iconBg: "#E6DEDD",
    points: [
      "Created frontend ui using vue.js framework.",
      "Used pinia for state management and quasar for UI elements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Game Developer",
    iconBg: "#383E56",
    points: [
      "Worked with love2d framework to create 2d games and unity to make 3d games.",
      "Collaborated with different members to create interactive .",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Animation Designer",
    iconBg: "#E6DEDD",
    points: [
      "Created 3D designs and animations using the Blender 3D software.",
      "Engaged in rigging, modeling, designing, texture and UV mapping, as well as video editing using Blender.",
    ],
  },
  {
    title: "Blockchain Developer",
    iconBg: "#383E56",
    points: [
      "Employed Solidity for the deployment of smart contracts on a testnet server.",
      "Collaborated with fungible tokens like ERC-20 tokens to execute token distribution within a decentralized system.",
      "Utilized APIs to facilitate the automation of smart contracts.",
    ],
  },
];

const projects = [
  {
    name: "Blockchain Based Loyalty and Rewards Program",
    description:
      "A decentralized e-commerce website utilizing blockchain technology to incentivize users with fungible tokens as rewards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MayuriKolhe-2003/Flipkart_Grid",
  },
  {
    name: "The Shoe Spot",
    description:
      "A user-friendly front-end web application designed for shoe shopping. Browse and buy your favorite footwear styles effortlessly, with a seamless and intuitive interface that enhances your online shopping experience..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "aos",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MayuriKolhe-2003/Shoes-Website",
  },
  {
    name: "Car Animation",
    description:
      "An entirely self-made car model, crafted from the ground up and animated with precision. Created in Blender and fully prepared for effortless incorporation into the Unity platform.",
    tags: [
      {
        name: "blender",
        color: "blue-text-gradient",
      },
      {
        name: "davinci resolve",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://drive.google.com/file/d/1Etg3V2zBl86XjBYZ_2gAX6XC9W_6TspJ/view?usp=sharing",
  },
];

export { services, technologies, experiences, projects };
