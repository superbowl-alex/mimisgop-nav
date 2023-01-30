import { markupItems } from "./markupItem.js";
const mainMenu = document.querySelector(".main-menu");

export function render(arr) {
  const mainMenuMarkup = arr.map((item) => markupItems(item)).join("");
  mainMenu.insertAdjacentHTML("beforeend", mainMenuMarkup);

  const mainMenuItem = mainMenu.querySelectorAll(".menu__item");

  mainMenuItem.forEach((item) => {
    if (item.hasAttribute("data-inner")) {
      const array = JSON.parse(item.dataset.inner);
      const secondaryMenu = item.querySelector(".secondary-menu");
      goNext(mainMenu, secondaryMenu, item);
      goBack(mainMenu, secondaryMenu, item);
      const secondaryMenuMarkup = array
        .map((item) => markupItems(item))
        .join("");
      secondaryMenu.insertAdjacentHTML("beforeend", secondaryMenuMarkup);

      const secondaryMenuItem = secondaryMenu.querySelectorAll(".menu__item");
      secondaryMenuItem.forEach((item) => {
        if (item.hasAttribute("data-inner")) {
          const array = JSON.parse(item.dataset.inner);
          const subMenu = item.querySelector(".secondary-menu");
          goNext(secondaryMenu, subMenu, item);
          goBack(secondaryMenu, subMenu, item);
          const subMenuMarkup = array.map((item) => markupItems(item)).join("");
          subMenu.insertAdjacentHTML("beforeend", subMenuMarkup);

          const subMenuItem = subMenu.querySelectorAll(".menu__item");
          subMenuItem.forEach((item) => {
            if (item.hasAttribute("data-inner")) {
              const array = JSON.parse(item.dataset.inner);
              const depMenu = item.querySelector(".secondary-menu");
              goNext(subMenu, depMenu, item);
              goBack(subMenu, depMenu, item);
              const depMenuMarkup = array
                .map((item) => markupItems(item))
                .join("");
              depMenu.insertAdjacentHTML("beforeend", depMenuMarkup);
            }
          });
        }
      });
    }
  });
}

function goNext(prevMenu, menu, el) {
  const goNextMenu = el.querySelector(".menu__item-link");
  goNextMenu.addEventListener("click", () => {
    prevMenu.classList.add("is-hidden");
    prevMenu.classList.remove("active");
    menu.classList.remove("is-hidden");
    menu.classList.add("active");
  });
}
function goBack(prevMenu, currentmenu, el) {
  const goBackButton = el.querySelector(".back-button");
  goBackButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentmenu.classList.add("is-hidden");
    currentmenu.classList.remove("active");
    prevMenu.classList.remove("is-hidden");
    prevMenu.classList.add("active");
  });
}
