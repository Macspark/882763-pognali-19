var filter = document.querySelector('.filter');
var filterToggle = document.querySelector('.filter__button');
var filterClose = document.querySelector('.filter__close');
var filterHeader = document.querySelector('.filter__header');
var filterContinents = document.querySelector('.filter__continents');
var filterTable = document.querySelector('.filter__table');
var filterCurrentCountries = document.querySelector('.filter__item--current .filter__countries');
var filterToggled = 'filter--expanded';

filterToggle.addEventListener('click', function() {
  if (filter.classList.contains(filterToggled)) {
    filter.classList.remove(filterToggled);
    filterHeader.style.marginBottom = '0';
  } else {
    filter.classList.add(filterToggled);
    filterHeader.style.marginBottom = 43 + filterContinents.offsetHeight + 'px';

    if (window.matchMedia("(max-width: 767px)").matches) {
      filterTable.style.marginBottom = 42 + filterCurrentCountries.offsetHeight + 'px';
    } else if (window.matchMedia("(max-width: 1439px)").matches) {
      if (filterCurrentCountries.offsetHeight <= filterTable.offsetHeight) {
        filterTable.style.marginBottom = 35 + 'px';
      } else {
        filterTable.style.marginBottom = 35 + filterCurrentCountries.offsetHeight - filterTable.offsetHeight + 'px';
      }
    }

  }
});

filterClose.addEventListener('click', function() {
  filter.classList.remove(filterToggled);
  filterHeader.style.marginBottom = '0';
});
