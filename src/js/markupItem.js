// function creating markup for one element
export const markupItems = ({ title, url, links }) => {
  const data = JSON.stringify(links);
  const buttonGoBack =
    "<button class='back-button' type='button'>Go back</button>";
  const goToInnerMenu = `<button class="menu__item-link" type="button">></button>`;

  if (links.length > 0) {
    return `<li class="menu__item"  data-inner=${data} >
              <a class="menu__link" href="${url}">${title}</a>
              ${goToInnerMenu}
              <ul class='secondary-menu is-hidden'>
              ${buttonGoBack}              
              </ul>
            </li>`;
  } else {
    return `<li class="menu__item" >
    <a
      class="menu__link"
      href="${url}"
      >${title}</a
          >
 </li>`;
  }
};
