// function creating markup for one element
export const markupItems = ({ title, url }) => {
  return `<li class="menu__item">
              <a
                class="menu__link"
                href="${url}"
                >${title}</a
                    >
           </li>`;
};
