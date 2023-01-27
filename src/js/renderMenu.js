import { markupItems } from "./markupItem.js";
const mainMenu = document.querySelector(".main-menu");

export const renderMainMenu = (arr) => {
  mainMenu.innerHTML = "";
  const currentMarkup = arr.map((item) => markupItems(item)).join("");
  mainMenu.insertAdjacentHTML("beforeend", currentMarkup);
};
