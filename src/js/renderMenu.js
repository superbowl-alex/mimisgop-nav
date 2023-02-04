import { markupItems } from "./markupItem.js";
const mainMenu = document.querySelector(".main-menu");
const mainMenuWrap = document.querySelector(".main-menu-wrap");

const mobileWidth = 360;
const tabletWidth = 768;
const desctopWidth = 1440;

export function render(arr) {
  const mainMenuMarkup = arr.map((item) => markupItems(item)).join("");
  mainMenu.insertAdjacentHTML("beforeend", mainMenuMarkup);
  const mainMenuItem = mainMenu.querySelectorAll(".menu__item");
  mainMenuItem.forEach((item) => {
    if (item.hasAttribute("data-inner")) {
      const array = JSON.parse(item.dataset.inner);
      const secondaryMenu = item.querySelector(".secondary-menu");
      const secondaryMenuWrap = item.querySelector(".secondary-menu-wrap");
      secondaryMenu.dataset.depth = 1;
      secondaryMenuWrap.dataset.depth = 1;
      goNext(mainMenu, secondaryMenu, item);
      goBack(secondaryMenu, item);
      const secondaryMenuMarkup = array
        .map((item) => markupItems(item))
        .join("");
      secondaryMenu.insertAdjacentHTML("beforeend", secondaryMenuMarkup);
      const secondaryMenuItem = secondaryMenu.querySelectorAll(".menu__item");

      secondaryMenuItem.forEach((item) => {
        if (item.hasAttribute("data-inner")) {
          const array = JSON.parse(item.dataset.inner);
          const subMenu = item.querySelector(".secondary-menu");
          const subMenuWrap = item.querySelector(".secondary-menu-wrap");
          subMenu.dataset.depth = 2;
          subMenuWrap.dataset.depth = 2;
          goNext(secondaryMenu, subMenu, item);
          goBack(subMenu, item);
          const subMenuMarkup = array.map((item) => markupItems(item)).join("");
          subMenu.insertAdjacentHTML("beforeend", subMenuMarkup);
          const subMenuItem = subMenu.querySelectorAll(".menu__item");

          subMenuItem.forEach((item) => {
            if (item.hasAttribute("data-inner")) {
              const array = JSON.parse(item.dataset.inner);
              const depMenu = item.querySelector(".secondary-menu");
              const depMenuWrap = item.querySelector(".secondary-menu-wrap");
              depMenu.dataset.depth = 3;
              depMenuWrap.dataset.depth = 3;
              goNext(subMenu, depMenu, item);
              goBack(depMenu, item);
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

function goNext(prevMenu, currentMenu, el) {
  const goNextMenuButton = el.querySelector(".menu__item-link");

  const nestingDepth = currentMenu.dataset.depth - 1 || 0;
  goNextMenuButton.addEventListener("click", (e) => {
    e.preventDefault();
    const allActiveSecondaryMenu = el.querySelectorAll(
      ".secondary-menu-wrap.active"
    );
    if (allActiveSecondaryMenu.length > 0) {
      allActiveSecondaryMenu.forEach((item) => {
        item.classList.add("is-hidden");
        item.classList.remove("active");
      });
    } else {
      const currentSecondaryMenuWrap = el.querySelector(".secondary-menu-wrap");
      closeNeighborsMenu(nestingDepth);
      currentSecondaryMenuWrap.classList.remove("is-hidden");
      currentSecondaryMenuWrap.classList.add("active");

      const prevMenuWrap = prevMenu.closest(
        ".secondary-menu-wrap, .main-menu-wrap"
      );

      if (window.innerWidth < tabletWidth) {
        prevMenuWrap.classList.add("is-hidden");
        prevMenuWrap.classList.remove("active");
      }

      if (
        window.innerWidth >= tabletWidth &&
        window.innerWidth < desctopWidth
      ) {
        mainMenuWrap.classList.add("is-hidden");
        mainMenuWrap.classList.remove("active");
        currentSecondaryMenuWrap.style.left =
          prevMenuWrap === mainMenuWrap ? "0" : "296px";
      }

      if (window.innerWidth >= desctopWidth) {
        currentSecondaryMenuWrap.style.left = nestingDepth ? "296px" : "0px";
        currentSecondaryMenuWrap.style.top = nestingDepth ? "0px" : "80px";
      }
    }
  });
}

function goBack(currentmenu, el) {
  const goBackButton = el.querySelector(".back-button");
  if (window.innerWidth >= desctopWidth) {
    goBackButton.style.display = "none";
  }
  goBackButton.dataset.depth = currentmenu.dataset.depth;
  goBackButton.addEventListener("click", (e) => {
    e.preventDefault();
    const secondaryMenuWrap = document.querySelectorAll(".secondary-menu-wrap");
    secondaryMenuWrap.forEach((item) => {
      item.classList.add("is-hidden");
      item.classList.remove("active");
    });
    const nestingDepth = e.target.dataset.depth;

    const currentMenuWrap = el.querySelector(".secondary-menu-wrap");

    const previousMenu =
      document.querySelector(
        `.secondary-menu[data-depth="${nestingDepth - 1}"]`
      ) || mainMenu;
    const prevMenuWrap = previousMenu.closest(
      ".secondary-menu-wrap, .main-menu-wrap"
    );

    const prePreviousMenu =
      document.querySelector(
        `.secondary-menu[data-depth="${nestingDepth - 2}"]`
      ) || mainMenu;
    const prePrevMenuWrap = prePreviousMenu.closest(
      ".secondary-menu-wrap, .main-menu-wrap"
    );

    currentMenuWrap.classList.add("is-hidden");
    currentMenuWrap.classList.remove("active");
    prevMenuWrap.classList.remove("is-hidden");
    prevMenuWrap.classList.add("active");

    if (window.innerWidth >= tabletWidth) {
      prevMenuWrap.classList.remove("is-hidden");
      prevMenuWrap.classList.add("active");
      prePrevMenuWrap.classList.remove("is-hidden");
      prePrevMenuWrap.classList.add("active");
    }
  });
}

function closeNeighborsMenu(level) {
  const currentSecondaryMenuWrap = document.querySelectorAll(
    `.secondary-menu-wrap[data-depth="${
      level + 1
    }"].active, .secondary-menu-wrap[data-depth="${
      level + 2
    }"].active, .secondary-menu-wrap[data-depth="${level + 3}"].active`
  );

  if (currentSecondaryMenuWrap.length > 0) {
    currentSecondaryMenuWrap.forEach((item) => {
      item.classList.add("is-hidden");
      item.classList.remove("active");
    });
  }
}

// const currentHeight = document.documentElement.clientHeight;

// if (window.innerWidth >= tabletWidth) {
//   const allVisibleSecondaryMenu = document.querySelectorAll(
//     ".secondary-menu.active"
//   );
//   const prePrevvMenuClone = secondaryMenuHeight.find(
//     (i) => i.item === allVisibleSecondaryMenu[0]
//   );
//   const prevMenuClone = secondaryMenuHeight.find(
//     (i) => i.item === prevMenu
//   );
//   const currentMenuClone = secondaryMenuHeight.find(
//     (i) => i.item === currentMenu
//   );
//   const maxHeight = Math.max(
//     currentMenuClone.itemHeight,
//     prevMenuClone?.itemHeight,
//     prePrevvMenuClone?.itemHeight
//   );
//   allVisibleSecondaryMenu.forEach(
//     (i) => (i.style.height = `${maxHeight}px`)
//   );
// }

// const child = document.querySelectorAll(".secondary-menu");
// // console.log(child);
// child.forEach((item) => {
//   secondaryMenuHeight.push({ item, itemHeight: item.clientHeight });
// });
// // console.log(secondaryMenuHeight);
