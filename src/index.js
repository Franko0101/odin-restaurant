import "./styles.css";
import { generateHome } from "./home.js";
import { generateMenu } from "./menu.js";
import { generateAbout } from "./about.js";

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

homeButton.addEventListener("click", generateHome);
menuButton.addEventListener("click", generateMenu);
aboutButton.addEventListener("click", generateAbout);

generateHome();

