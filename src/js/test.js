const openButton = document.querySelector(".open-button");
const wrapInner = document.querySelector(".wrap-inner");

openButton.addEventListener("click", () => {
  wrapInner.classList.remove("is-hidden");
});
