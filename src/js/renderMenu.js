import { markupItems } from "./markupItem.js";
const mainMenu = document.querySelector(".main-menu");
const secondaryMenu = document.querySelector(".secondary-menu");

export const openSubMenu = (e) => {
  e.preventDefault();
  const arr = JSON.parse(e.target.dataset.inner);
  console.log(arr);
  renderMainMenu(arr);
};

export const renderMainMenu = (arr) => {
  mainMenu.innerHTML = "";
  const currentMarkup = arr.map((item) => markupItems(item)).join("");
  mainMenu.insertAdjacentHTML("beforeend", currentMarkup);
  const openSubMenuButton = document.querySelectorAll(".menu__item-link");
  openSubMenuButton.forEach((item) =>
    item.addEventListener("click", openSubMenu)
  );
};

export const renderSecondaryMenu = (arr) => {
  secondaryMenu.innerHTML = "";
  const buttonGoBackMarkup =
    "<button class='back-button' type='button'>Go back</button>";
  const currentMarkup = arr.map((item) => markupItems(item)).join("");
  secondaryMenu.insertAdjacentHTML("beforeend", buttonGoBackMarkup);
  secondaryMenu.insertAdjacentHTML("beforeend", currentMarkup);
};
