import { makeHidden, makeVisible } from "./index.js";
import { markupItems } from "./markupItem.js";
const mainMenu = document.querySelector(".main-menu");
const mainMenuWrap = document.querySelector(".main-menu-wrap");

const MOBILEWIDTH = 360;
const TABLETWIDTH = 768;
const DESCTOPWIDTH = 1440;

export function render(arr) {
  const mainMenuMarkup = arr.map((item) => markupItems(item)).join("");
  mainMenu.insertAdjacentHTML("beforeend", mainMenuMarkup);
  const mainMenuItem = mainMenu.querySelectorAll(".menu__item");
  mainMenuItem.forEach((item) => {
    const innerMenuStageOne = renderInnerMenu(mainMenu, 1, item);
    const innerMenuStageOneItem =
      innerMenuStageOne?.querySelectorAll(".menu__item");
    innerMenuStageOneItem?.forEach((item) => {
      const innerMenuStageTwo = renderInnerMenu(innerMenuStageOne, 2, item);
      const innerMenuStageTwoItem =
        innerMenuStageTwo?.querySelectorAll(".menu__item");
      innerMenuStageTwoItem?.forEach((item) => {
        renderInnerMenu(innerMenuStageTwo, 3, item);
      });
    });
  });
}

function renderInnerMenu(prevMenu, stage, el) {
  if (el.hasAttribute("data-inner")) {
    const array = JSON.parse(el.dataset.inner);
    const currentMenu = el.querySelector(".secondary-menu");
    const currentMenuWrap = el.querySelector(".secondary-menu-wrap");
    currentMenu.dataset.depth = stage;
    currentMenuWrap.dataset.depth = stage;
    goNext(prevMenu, currentMenu, el);
    goBack(currentMenu, el);
    const currentMenuMarkup = array.map((item) => markupItems(item)).join("");
    currentMenu.insertAdjacentHTML("beforeend", currentMenuMarkup);
    return currentMenu;
  }
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
        makeHidden(item);
      });
    } else {
      const currentSecondaryMenuWrap = el.querySelector(".secondary-menu-wrap");
      closeNeighborsMenu(nestingDepth);
      makeVisible(currentSecondaryMenuWrap);

      const prevMenuWrap = prevMenu.closest(
        ".secondary-menu-wrap, .main-menu-wrap"
      );

      if (window.innerWidth < TABLETWIDTH) {
        makeHidden(prevMenuWrap);
      }

      if (
        window.innerWidth >= TABLETWIDTH &&
        window.innerWidth < DESCTOPWIDTH
      ) {
        makeHidden(mainMenuWrap);
        currentSecondaryMenuWrap.style.left =
          prevMenuWrap === mainMenuWrap ? "0" : "296px";
      }

      if (window.innerWidth >= DESCTOPWIDTH) {
        currentSecondaryMenuWrap.style.left = nestingDepth ? "296px" : "0px";
        currentSecondaryMenuWrap.style.top = nestingDepth ? "0px" : "80px";
      }
    }
  });
}

function goBack(currentmenu, el) {
  const goBackButton = el.querySelector(".back-button");
  if (window.innerWidth >= DESCTOPWIDTH) {
    goBackButton.style.display = "none";
  }
  goBackButton.dataset.depth = currentmenu.dataset.depth;
  goBackButton.addEventListener("click", (e) => {
    e.preventDefault();
    const secondaryMenuWrap = document.querySelectorAll(".secondary-menu-wrap");
    secondaryMenuWrap.forEach((item) => {
      makeHidden(item);
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

    makeHidden(currentMenuWrap);
    makeVisible(prevMenuWrap);

    if (window.innerWidth >= TABLETWIDTH) {
      makeVisible(prevMenuWrap);
      makeVisible(prePrevMenuWrap);
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
      makeHidden(item);
    });
  }
}

// const mainMenuItem = mainMenu.querySelectorAll(".menu__item");
// mainMenuItem.forEach((item) => {
//   if (item.hasAttribute("data-inner")) {
//     const array = JSON.parse(item.dataset.inner);
//     const secondaryMenu = item.querySelector(".secondary-menu");
//     const secondaryMenuWrap = item.querySelector(".secondary-menu-wrap");
//     secondaryMenu.dataset.depth = 1;
//     secondaryMenuWrap.dataset.depth = 1;
//     goNext(mainMenu, secondaryMenu, item);
//     goBack(secondaryMenu, item);
//     const secondaryMenuMarkup = array
//       .map((item) => markupItems(item))
//       .join("");
//     secondaryMenu.insertAdjacentHTML("beforeend", secondaryMenuMarkup);
//     const secondaryMenuItem = secondaryMenu.querySelectorAll(".menu__item");

//     secondaryMenuItem.forEach((item) => {
//       if (item.hasAttribute("data-inner")) {
//         const array = JSON.parse(item.dataset.inner);
//         const subMenu = item.querySelector(".secondary-menu");
//         const subMenuWrap = item.querySelector(".secondary-menu-wrap");
//         subMenu.dataset.depth = 2;
//         subMenuWrap.dataset.depth = 2;
//         goNext(secondaryMenu, subMenu, item);
//         goBack(subMenu, item);
//         const subMenuMarkup = array.map((item) => markupItems(item)).join("");
//         subMenu.insertAdjacentHTML("beforeend", subMenuMarkup);
//         const subMenuItem = subMenu.querySelectorAll(".menu__item");

//         subMenuItem.forEach((item) => {
//           if (item.hasAttribute("data-inner")) {
//             const array = JSON.parse(item.dataset.inner);
//             const depMenu = item.querySelector(".secondary-menu");
//             const depMenuWrap = item.querySelector(".secondary-menu-wrap");
//             depMenu.dataset.depth = 3;
//             depMenuWrap.dataset.depth = 3;
//             goNext(subMenu, depMenu, item);
//             goBack(depMenu, item);
//             const depMenuMarkup = array
//               .map((item) => markupItems(item))
//               .join("");
//             depMenu.insertAdjacentHTML("beforeend", depMenuMarkup);
//           }
//         });
//       }
//     });
//   }
// });
// }

// const currentHeight = document.documentElement.clientHeight;

// if (window.innerWidth >= TABLETWIDTH) {
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
