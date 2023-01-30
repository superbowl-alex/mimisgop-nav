import { markupItems } from "./markupItem.js";
const mainMenu = document.querySelector(".main-menu");
// let secondaryMenu = document.querySelector(".secondary-menu");
const subMenu = document.querySelector(".sub-menu");

export function render(arr) {
  mainMenu.innerHTML = "";
  const nestingDepthMain = 0;
  const mainMenuMarkup = arr
    .map((item, index) => markupItems(item, index))
    .join("");
  mainMenu.insertAdjacentHTML("beforeend", mainMenuMarkup);
  const mainMenuItem = mainMenu.querySelectorAll(".menu__item");
  mainMenuItem.forEach((item, index) => {
    item.dataset.id = `${nestingDepthMain}${item.dataset.id}`;
    if (item.hasAttribute("data-inner")) {
      const goNextMenu = item.querySelector(".menu__item-link");
      const nestingDepthSecondary = nestingDepthMain + 1;
      const secondaryMenu = item.querySelector(".secondary-menu");
      goNextMenu.addEventListener("click", () => {
        mainMenu.classList.add("is-hidden");
        secondaryMenu.classList.remove("is-hidden");
        secondaryMenu.style.visibility = "visible";
        secondaryMenu.style.pointerEvents = "auto";
      });
      const goBackButton = item.querySelector(".back-button");
      goBackButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);
        secondaryMenu.classList.add("is-hidden");
        secondaryMenu.style.visibility = "hidden";

        mainMenu.classList.remove("is-hidden");
      });

      const array = JSON.parse(item.dataset.inner);
      const secondaryMenuMarkup = array
        .map((item, index) => markupItems(item, index))
        .join("");
      secondaryMenu.insertAdjacentHTML("beforeend", secondaryMenuMarkup);
      const secondaryMenuItem = secondaryMenu.querySelectorAll(".menu__item");
      secondaryMenuItem.forEach((item, index) => {
        item.dataset.id = `${nestingDepthSecondary}${item.dataset.id}`;
        if (item.hasAttribute("data-inner")) {
          const nestingDepthSub = nestingDepthSecondary + 1;
          const subMenu = item.querySelector(".secondary-menu");
          const array = JSON.parse(item.dataset.inner);
          const subMenuMarkup = array
            .map((item, index) => markupItems(item, index))
            .join("");
          subMenu.insertAdjacentHTML("beforeend", subMenuMarkup);
          const subMenuItem = subMenu.querySelectorAll(".menu__item");
          subMenuItem.forEach((item, index) => {
            item.dataset.id = `${nestingDepthSub}${item.dataset.id}`;
          });
        }
      });
    }
  });
}

// function makeInnerListMarkup(elem) {
//   elem.forEach((item, index) => {
//     if (item.hasAttribute("data-inner")) {
//       const subMenu = item.querySelector(".secondary-menu");
//       const array = JSON.parse(item.dataset.inner);
//       const subMenuMarkup = array
//         .map((item, index) => markupItems(item, index))
//         .join("");
//       subMenu.insertAdjacentHTML("beforeend", subMenuMarkup);
//     }
//   });
// }

// const openSecondaryMenuButton = item.querySelectorAll(".menu__item-link");
// const goBackButton = item.querySelector(".back-button");
// openSecondaryMenuButton.forEach((item) =>
//   item.addEventListener("click", () => {
//     secondaryMenu.classList.remove("is-hidden");
//     secondaryMenu.style.visibility = "visible";
//     goBackButton.classList.remove("is-hidden");
//     mainMenu.classList.add("is-hidden");
//     goBackButton.addEventListener("click", () => {
//       secondaryMenu.classList.add("is-hidden");
//       mainMenu.classList.remove("is-hidden");
//     });
//   })
// );

export function renderMainMenu(arr) {
  mainMenu.innerHTML = "";
  const currentMarkup = arr.map((item, ind) => markupItems(item, ind)).join("");
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
  const currentMarkup = arr.map((item, ind) => markupItems(item, ind)).join("");
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
  const currentMarkup = arr.map((item, ind) => markupItems(item, ind)).join("");
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
