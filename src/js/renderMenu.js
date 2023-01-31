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
      secondaryMenu.dataset.depth = 1;
      goNext(null, mainMenu, secondaryMenu, item);
      goBack(null, mainMenu, secondaryMenu, item);
      const secondaryMenuMarkup = array
        .map((item) => markupItems(item))
        .join("");
      secondaryMenu.insertAdjacentHTML("beforeend", secondaryMenuMarkup);
      const secondaryMenuItem = secondaryMenu.querySelectorAll(".menu__item");

      secondaryMenuItem.forEach((item) => {
        if (item.hasAttribute("data-inner")) {
          const array = JSON.parse(item.dataset.inner);
          const subMenu = item.querySelector(".secondary-menu");
          subMenu.dataset.depth = 2;
          goNext(mainMenu, secondaryMenu, subMenu, item);
          goBack(mainMenu, secondaryMenu, subMenu, item);
          const subMenuMarkup = array.map((item) => markupItems(item)).join("");
          subMenu.insertAdjacentHTML("beforeend", subMenuMarkup);
          const subMenuItem = subMenu.querySelectorAll(".menu__item");

          subMenuItem.forEach((item) => {
            if (item.hasAttribute("data-inner")) {
              const array = JSON.parse(item.dataset.inner);
              const depMenu = item.querySelector(".secondary-menu");
              depMenu.dataset.depth = 3;
              goNext(secondaryMenu, subMenu, depMenu, item);
              goBack(secondaryMenu, subMenu, depMenu, item);
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

function goNext(firstMenu, prevMenu, currentmenu, el) {
  const goNextMenu = el.querySelector(".menu__item-link");
  const nestingDepth = currentmenu.dataset.depth - 1 || 0;
  goNextMenu.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      prevMenu.classList.add("is-hidden");
      prevMenu.classList.remove("active");
    }
    currentmenu.classList.remove("is-hidden");
    currentmenu.classList.add("active");
    if (window.innerWidth > 767 && window.innerWidth < 1440) {
      if (firstMenu) {
        firstMenu.classList.add("is-hidden");
        firstMenu.classList.remove("active");
      }

      prevMenu.style.left = "0";
      currentmenu.style.left = "296px";
    }
    if (window.innerWidth > 1439) {
      currentmenu.style.left = nestingDepth ? "296px" : "0px";
      currentmenu.style.top = nestingDepth ? "0px" : "64px";
    }
  });
}

function goBack(firstMenu, prevMenu, currentmenu, el) {
  const goBackButton = el.querySelector(".back-button");
  if (window.innerWidth > 1439) {
    goBackButton.style.display = "none";
  }

  goBackButton.dataset.depth = currentmenu.dataset.depth;
  goBackButton.addEventListener("click", (e) => {
    e.preventDefault();
    const secondaryMenu = document.querySelectorAll(".secondary-menu");
    secondaryMenu.forEach((item) => {
      item.classList.add("is-hidden");
      item.classList.remove("active");
    });
    const clickedBtn = e.target;
    const nestingDepth = clickedBtn.dataset.depth;
    const dasMenu = document.querySelectorAll(
      `.secondary-menu[data-depth="${nestingDepth}"]`
    );
    const toMenu =
      document.querySelector(
        `.secondary-menu[data-depth="${nestingDepth - 1}"]`
      ) || mainMenu;
    const toMenuOut =
      document.querySelector(
        `.secondary-menu[data-depth="${nestingDepth - 2}"]`
      ) || mainMenu;
    dasMenu.forEach((i) => {
      i.classList.add("is-hidden");
      i.classList.remove("active");
    });
    toMenu.classList.remove("is-hidden");
    toMenu.classList.add("active");

    if (window.innerWidth > 767) {
      toMenu.classList.remove("is-hidden");
      toMenu.classList.add("active");
      toMenuOut.classList.remove("is-hidden");
      toMenuOut.classList.add("active");

      if (firstMenu) {
        firstMenu.style.left = "0";
        prevMenu.style.left = "296px";
      } else {
        prevMenu.style.left = "0";
      }
    }
  });
}
