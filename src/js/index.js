import { render } from "./renderMenu.js";

const menuButton = document.querySelector(".menu-btn");
const openMenuBtnIcon = document.querySelector(".menu-open__icon");
const closeMenuBtnIcon = document.querySelector(".menu-close__icon");

const mainMenu = document.querySelector(".main-menu");
const mainMenuWrap = document.querySelector(".main-menu-wrap");

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
                title: "toys",
                url: "/src/components/toys.html",
                links: "",
              },
              {
                title: "toys",
                url: "/src/components/toys.html",
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
                title: "9-12years",
                url: "/src/components/912.html",
                links: "",
              },
              {
                title: "about",
                url: "/src/components/about.html",
                links: "",
              },
            ],
          },
          {
            title: "shoes",
            url: "/src/components/shoes.html",
            links: "",
          },
          {
            title: "toys",
            url: "/src/components/toys.html",
            links: "",
          },
          {
            title: "toys",
            url: "/src/components/toys.html",
            links: "",
          },
          {
            title: "toys",
            url: "/src/components/toys.html",
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
            title: "9-12years",
            url: "/src/components/912.html",
            links: "",
          },
          {
            title: "about",
            url: "/src/components/about.html",
            links: "",
          },
          {
            title: "toys",
            url: "/src/components/toys.html",
            links: "",
          },
          {
            title: "toys",
            url: "/src/components/toys.html",
            links: "",
          },
          {
            title: "toys",
            url: "/src/components/toys.html",
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
            title: "9-12years",
            url: "/src/components/912.html",
            links: "",
          },
          {
            title: "about",
            url: "/src/components/about.html",
            links: "",
          },
        ],
      },
      {
        title: "outdoor",
        url: "/src/components/outdoor.html",
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
          {
            title: "age",
            url: "/src/components/age.html",
            links: "",
          },
          {
            title: "blog",
            url: "/src/components/blog.html",
            links: "",
          },
          {
            title: "bottoms",
            url: "/src/components/bottoms.html",
            links: "",
          },
          {
            title: "contacts",
            url: "/src/components/contacts.html",
            links: "",
          },
        ],
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
        links: [
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
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
  {
    title: "13-16 years",
    url: "/src/components/1316.html",
    links: [],
  },
];

const MOBILEWIDTH = 360;
const TABLETWIDTH = 768;
const DESCTOPWIDTH = 1440;

if (menuButton) {
  menuButton.addEventListener("click", () => {
    if (!openMenuBtnIcon) return;
    if (!closeMenuBtnIcon) return;
    if (!mainMenu) return;
    if (!mainMenuWrap) return;
    toggleButton();
  });
}

function toggleButton() {
  if (menuButton.classList.contains("visible")) {
    menuButton.classList.toggle("visible");
    closeMenu();
  } else {
    menuButton.classList.toggle("visible");
    openMenu();
  }
}

if (mainMenu && mainMenuWrap) render(catalog);

if (window.innerWidth >= DESCTOPWIDTH) {
  makeVisible(mainMenuWrap);
}

function openMenu() {
  openMenuBtnIcon.classList.add("is-hidden");
  closeMenuBtnIcon.classList.remove("is-hidden");
  makeVisible(mainMenuWrap);
}

function closeMenu() {
  openMenuBtnIcon.classList.remove("is-hidden");
  closeMenuBtnIcon.classList.add("is-hidden");
  makeHidden(mainMenuWrap);
  const secondaryMenuWrap = document.querySelectorAll(".secondary-menu-wrap");
  secondaryMenuWrap.forEach((item) => makeHidden(item));
}

export function makeVisible(el) {
  el.classList.remove("is-hidden");
  el.classList.add("active");
}

export function makeHidden(el) {
  el.classList.remove("active");
  el.classList.add("is-hidden");
}
