import { renderMainMenu, renderSecondaryMenu } from "./renderMenu.js";

const menuBtn = document.querySelectorAll(".menu-btn");
const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".menu-close");
const mainMenu = document.querySelector(".main-menu");
const secondaryMenu = document.querySelector(".secondary-menu");
const subMenu = document.querySelector(".sub-menu");
const openSubMenuButton = document.querySelector(".menu__item-link");
const goBackButton = document.querySelector(".back-button");
const catalog = [
  {
    title: "catalog",
    url: "/src/components/catalog.html",
    links: [
      {
        title: "shoes",
        url: "/src/components/shoes.html",
        links: "",
      },
      {
        title: "bottoms",
        url: "/src/components/bottoms.html",
        links: [
          {
            title: "shoes",
            url: "/src/components/shoes.html",
            links: "",
          },
          {
            title: "shoes",
            url: "/src/components/shoes.html",
            links: "",
          },
        ],
      },
      {
        title: "outdoor",
        url: "/src/components/outdoor.html",
        links: "",
      },
      {
        title: "toys",
        url: "/src/components/toys.html",
        links: "",
      },
      {
        title: "tops",
        url: "/src/components/tops.html",
        links: "",
      },
    ],
  },
  {
    title: "0-3 years",
    url: "/src/components/03.html",
    links: [],
  },
  {
    title: "4-8 years",
    url: "/src/components/48.html",
    links: [],
  },
  {
    title: "9-12 years",
    url: "/src/components/912.html",
    links: [
      {
        title: "about",
        url: "/src/components/about.html",
        links: [],
      },
      {
        title: "contacts",
        url: "/src/components/contacts.html",
        links: [],
      },
      {
        title: "sales",
        url: "/src/components/sales.html",
        links: [],
      },
      {
        title: "social",
        url: "/src/components/social.html",
        links: [],
      },
      {
        title: "shipping",
        url: "/src/components/shipping.html",
        links: [],
      },
    ],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
];

const openMenu = () => {
  openMenuBtn.classList.add("is-hidden");
  closeMenuBtn.classList.remove("is-hidden");
  renderMainMenu(catalog);
};

const closeMenu = () => {
  openMenuBtn.classList.remove("is-hidden");
  closeMenuBtn.classList.add("is-hidden");
  mainMenu.classList.remove("is-hidden");
  secondaryMenu.classList.remove("is-hidden");
  mainMenu.innerHTML = "";
  secondaryMenu.innerHTML = "";
  subMenu.innerHTML = "";
};

const openSubMenu = () => {
  renderSecondaryMenu(catalog);
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
