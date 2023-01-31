import { render } from "./renderMenu.js";

const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".menu-close");
const mainMenu = document.querySelector(".main-menu");
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
            links: [
              {
                title: "toys",
                url: "/src/components/toys.html",
                links: "",
              },
              {
                title: "outdoor",
                url: "/src/components/outdoor.html",
                links: "",
              },
            ],
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

render(catalog);
if (window.innerWidth > 1439) {
  mainMenu.classList.remove("is-hidden");
  mainMenu.classList.add("active");
}

const openMenu = () => {
  openMenuBtn.classList.add("is-hidden");
  closeMenuBtn.classList.remove("is-hidden");
  mainMenu.classList.remove("is-hidden");
  mainMenu.classList.add("active");
};

const closeMenu = () => {
  openMenuBtn.classList.remove("is-hidden");
  closeMenuBtn.classList.add("is-hidden");
  mainMenu.classList.add("is-hidden");
  mainMenu.classList.remove("active");
  const secondaryMenu = document.querySelectorAll(".secondary-menu");
  secondaryMenu.forEach((item) => {
    item.classList.add("is-hidden");
    item.classList.remove("active");
  });
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
