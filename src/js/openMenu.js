const menuBtn = document.querySelectorAll(".menu-btn");
const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".menu-close");
const mainMenu = document.querySelector(".main-menu");
const secondaryMenu = document.querySelector(".secondary-menu");
const subMenu = document.querySelector(".sub-menu");
const openSubMenuButton = document.querySelector(".sub-menu-open");

const catalog = [
  {
    title: "catalog",
    url: "../components/catalog.html",
    links: [
      {
        title: "shoes",
        url: "../components/shoes.html",
        links: "",
      },
      {
        title: "bottoms",
        url: "../components/bottoms.html",
        links: "",
      },
      {
        title: "outdoor",
        url: "../components/outdoor.html",
        links: "",
      },
      {
        title: "toys",
        url: "../components/toys.html",
        links: "",
      },
      {
        title: "tops",
        url: "../components/tops.html",
        links: "",
      },
    ],
  },
  {
    title: "0-3 years",
    url: "../components/03.html",
    links: [],
  },
  {
    title: "4-8 years",
    url: "../components/48.html",
    links: [],
  },
  {
    title: "9-12 years",
    url: "../components/912.html",
    links: [
      {
        title: "about us",
        url: "../components/about.html",
        links: [],
      },
      {
        title: "contacts",
        url: "../components/contacts.html",
        links: [],
      },
      {
        title: "sales",
        url: "../components/sales.html",
        links: [],
      },
      {
        title: "social",
        url: "../components/social.html",
        links: [],
      },
      {
        title: "shipping",
        url: "../components/shipping.html",
        links: [],
      },
    ],
  },
  {
    title: "13-16 years",
    url: "../components/1316.html",
    links: [],
  },
];

const toggleDisplay = () => {
  openMenuBtn.classList.toggle("is-hidden");
  closeMenuBtn.classList.toggle("is-hidden");
  mainMenu.classList.toggle("is-hidden");
};

openMenuBtn.addEventListener("click", toggleDisplay);
closeMenuBtn.addEventListener("click", toggleDisplay);
