const filtersList = document.querySelector(".filters__list");
const filters = filtersList.querySelectorAll("ul > li");

filters.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    filter.classList.toggle("filters__item-acitve");
  });
});
