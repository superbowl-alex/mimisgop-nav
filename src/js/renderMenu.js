import { markupItems } from "./markupItem.js";
const mainMenu = document.querySelector(".main-menu");
const secondaryMenu = document.querySelector(".secondary-menu");
const subMenu = document.querySelector(".sub-menu");

export const openSubMenu = (e) => {
  e.preventDefault();
  const arr = JSON.parse(e.target.dataset.inner);
  console.log(arr);
  renderMainMenu(arr);
};

export function renderMainMenu(arr) {
  mainMenu.innerHTML = "";
  const currentMarkup = arr.map((item) => markupItems(item)).join("");
  mainMenu.insertAdjacentHTML("beforeend", currentMarkup);
  const openSecondaryMenuButton = document.querySelectorAll(".menu__item-link");
  openSecondaryMenuButton.forEach((item) =>
    item.addEventListener("click", renderSecondaryMenu)
  );
}

export function renderSecondaryMenu(e) {
  e.preventDefault();
  const arr = JSON.parse(e.target.dataset.inner);
  secondaryMenu.innerHTML = "";
  if (window.innerWidth < 768) {
    mainMenu.classList.add("is-hidden");
  }
  const buttonGoBackMarkup =
    "<button class='back-button' type='button'>Go back</button>";
  const currentMarkup = arr.map((item) => markupItems(item)).join("");
  secondaryMenu.insertAdjacentHTML("beforeend", buttonGoBackMarkup);
  secondaryMenu.insertAdjacentHTML("beforeend", currentMarkup);
  const buttonGoBack = secondaryMenu.querySelector(".back-button");
  buttonGoBack.addEventListener("click", () => {
    secondaryMenu.innerHTML = "";
    subMenu.innerHTML = "";
    if (window.innerWidth < 768) {
      mainMenu.classList.remove("is-hidden");
    }
  });
  const openSubMenuButton = secondaryMenu.querySelectorAll(".menu__item-link");
  openSubMenuButton.forEach((item) =>
    item.addEventListener("click", renderSubMenu)
  );
}

export function renderSubMenu(e) {
  e.preventDefault();
  const arr = JSON.parse(e.target.dataset.inner);
  subMenu.innerHTML = "";
  if (window.innerWidth < 768) {
    secondaryMenu.classList.add("is-hidden");
  }

  const buttonGoBackMarkup =
    "<button class='back-button' type='button'>Go back</button>";
  const currentMarkup = arr.map((item) => markupItems(item)).join("");
  subMenu.insertAdjacentHTML("beforeend", buttonGoBackMarkup);
  subMenu.insertAdjacentHTML("beforeend", currentMarkup);
  const buttonGoBack = subMenu.querySelector(".back-button");
  buttonGoBack.addEventListener("click", () => {
    subMenu.innerHTML = "";
    if (window.innerWidth < 768) {
      secondaryMenu.classList.remove("is-hidden");
    }
  });
}
