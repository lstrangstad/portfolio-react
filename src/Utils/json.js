import HTML from "../icons/skills-icons/html.svg";
import CSS from "../icons/skills-icons/css.svg";
import JS from "../icons/skills-icons/js.svg";
import React from "../icons/skills-icons/react.svg";
import AdobeXd from "../icons/skills-icons/adobexd.svg";
import UiDesign from "../icons/skills-icons/uidesign.svg";
import Sass from "../icons/skills-icons/sass.svg";
import Git from "../icons/skills-icons/git.png";

import ecommerce from "../images/ecommerce.png";
import rickNmorty from "../images/rick-morty.png";
import spaceX from "../images/spaceX.png";

export const skills = [
  { img: `${HTML}`, skill: "HTML" },
  { img: `${CSS}`, skill: "CSS" },
  { img: `${Sass}`, skill: "Sass" },
  { img: `${JS}`, skill: "JavaScript" },
  { img: `${React}`, skill: "React" },
  { img: `${Git}`, skill: "Git" },
  { img: `${AdobeXd}`, skill: "Adobe XD" },
  { img: `${UiDesign}`, skill: "UI/UX Design" },
];

export const projects = [
  {
    img: `${ecommerce}`,
    title: "E-commerce Project",
    description:
      "In this semester project we were told to make an E-commerce site. With login for admins to add, edit or delete a product. And fetch products from strapi.",
  },
  {
    img: `${rickNmorty}`,
    title: "Rick & Morty",
    description:
      "A project I have made myself. Using some of the things I have learned from school in react.",
  },
  {
    img: `${spaceX}`,
    title: "SpaceX project",
    description: "Vanilla JavaScript project. Using the SpaceX api",
  },
];
