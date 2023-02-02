import { markupItems } from "./markupItem.js";
const mainMenu = document.querySelector(".main-menu");
const mobileWidth = 360;
const tabletWidth = 768;
const desctopWidth = 1440;
const secondaryMenuHeight = [];

export function render(arr) {
  const mainMenuMarkup = arr.map((item) => markupItems(item)).join("");
  mainMenu.insertAdjacentHTML("beforeend", mainMenuMarkup);
  const mainMenuItem = mainMenu.querySelectorAll(".menu__item");

  mainMenuItem.forEach((item) => {
    if (item.hasAttribute("data-inner")) {
      const array = JSON.parse(item.dataset.inner);
      const secondaryMenu = item.querySelector(".secondary-menu");
      secondaryMenu.dataset.depth = 1;
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
          subMenu.dataset.depth = 2;
          goNext(secondaryMenu, subMenu, item);
          goBack(subMenu, item);
          const subMenuMarkup = array.map((item) => markupItems(item)).join("");
          subMenu.insertAdjacentHTML("beforeend", subMenuMarkup);
          const subMenuItem = subMenu.querySelectorAll(".menu__item");

          subMenuItem.forEach((item) => {
            if (item.hasAttribute("data-inner")) {
              const array = JSON.parse(item.dataset.inner);
              const depMenu = item.querySelector(".secondary-menu");
              depMenu.dataset.depth = 3;
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
  const child = document.querySelectorAll(".secondary-menu");
  // console.log(child);
  child.forEach((item) => {
    secondaryMenuHeight.push({ item, itemHeight: item.clientHeight });
  });
  // console.log(secondaryMenuHeight);
}

function goNext(prevMenu, currentMenu, el) {
  const goNextMenuButton = el.querySelector(".menu__item-link");
  const nestingDepth = currentMenu.dataset.depth - 1 || 0;
  goNextMenuButton.addEventListener("click", () => {
    closeNeighborsMenu(nestingDepth);
    currentMenu.classList.remove("is-hidden");
    currentMenu.classList.add("active");

    // console.log("prevMenuClone", prevMenuClone);
    // console.log("currentMenuClone", currentMenuClone);
    // console.log("prevMenu", prevMenu);
    // console.log("currentMenu", currentMenu);

    if (window.innerWidth < tabletWidth) {
      prevMenu.classList.add("is-hidden");
      prevMenu.classList.remove("active");
    }

    if (window.innerWidth >= tabletWidth) {
      const allVisibleSecondaryMenu = document.querySelectorAll(
        ".secondary-menu.active"
      );
      console.log(allVisibleSecondaryMenu);

      const prePrevvMenuClone = secondaryMenuHeight.find(
        (i) => i.item === allVisibleSecondaryMenu[0]
      );
      const prevMenuClone = secondaryMenuHeight.find(
        (i) => i.item === prevMenu
      );
      const currentMenuClone = secondaryMenuHeight.find(
        (i) => i.item === currentMenu
      );

      const maxHeight = Math.max(
        currentMenuClone.itemHeight,
        prevMenuClone?.itemHeight,
        prePrevvMenuClone?.itemHeight
      );
      allVisibleSecondaryMenu.forEach(
        (i) => (i.style.height = `${maxHeight}px`)
      );
      // prevMenu.style.height = `${maxHeight}px`;
      // currentMenu.style.height = `${maxHeight}px`;
    }

    if (window.innerWidth >= tabletWidth && window.innerWidth < desctopWidth) {
      mainMenu.classList.add("is-hidden");
      mainMenu.classList.remove("active");
      currentMenu.style.left = prevMenu === mainMenu ? "0" : "296px";
    }

    if (window.innerWidth >= desctopWidth) {
      currentMenu.style.left = nestingDepth ? "296px" : "0px";
      currentMenu.style.top = nestingDepth ? "0px" : "64px";
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
    const secondaryMenu = document.querySelectorAll(".secondary-menu");
    secondaryMenu.forEach((item) => {
      item.classList.add("is-hidden");
      item.classList.remove("active");
    });
    const nestingDepth = e.target.dataset.depth;
    const previousMenu =
      document.querySelector(
        `.secondary-menu[data-depth="${nestingDepth - 1}"]`
      ) || mainMenu;

    const prePreviousMenu =
      document.querySelector(
        `.secondary-menu[data-depth="${nestingDepth - 2}"]`
      ) || mainMenu;

    currentmenu.classList.add("is-hidden");
    currentmenu.classList.remove("active");
    previousMenu.classList.remove("is-hidden");
    previousMenu.classList.add("active");

    if (window.innerWidth >= tabletWidth) {
      previousMenu.classList.remove("is-hidden");
      previousMenu.classList.add("active");
      prePreviousMenu.classList.remove("is-hidden");
      prePreviousMenu.classList.add("active");
    }
  });
}

function closeNeighborsMenu(level) {
  const currentSecondaryMenu = document.querySelectorAll(
    `.secondary-menu[data-depth="${
      level + 1
    }"].active, .secondary-menu[data-depth="${
      level + 2
    }"].active, .secondary-menu[data-depth="${level + 3}"].active`
  );
  if (currentSecondaryMenu.length > 0) {
    currentSecondaryMenu.forEach((item) => {
      item.classList.add("is-hidden");
      item.classList.remove("active");
    });
  }
}

// if (window.innerWidth > 767) {
//   const realHeight = {
//     firstMenuHeight: firstMenu?.clientHeight || 0,
//     prevMenuHeight: prevMenu.clientHeight,
//     currentmenuHeight: currentMenu.clientHeight,
//   };
//   console.log(realHeight);
//   const currentMaxHeight =
//     realHeight.currentmenuHeight > realHeight.prevMenuHeight
//       ? realHeight.currentmenuHeight
//       : realHeight.prevMenuHeight;
//   currentMenu.style.height = `${currentMaxHeight}px`;
//   prevMenu.style.height = `${currentMaxHeight}px`;
// }
