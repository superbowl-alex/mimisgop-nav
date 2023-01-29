// function creating markup for one element
export const markupItems = ({ title, url, links }, id) => {
  const data = JSON.stringify(links);
  const goToInnerMenu =
    links.length > 0
      ? `<button class="menu__item-link" type="button" data-inner=${data}
      data-id=${id}
      >></button>`
      : "";
  return `<li class="menu__item">
              <a
                class="menu__link"
                href="${url}"
                >${title}</a
                    >
                ${goToInnerMenu}
           </li>`;
};
