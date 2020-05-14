var filter = document.querySelector('.filter');
var filterToggle = document.querySelector('.filter__button');
var filterClose = document.querySelector('.filter__close');
var filterToggled = 'filter--expanded';

filterToggle.addEventListener('click', function() {
  if (filter.classList.contains(filterToggled)) {
    filter.classList.remove(filterToggled);
  } else {
    filter.classList.add(filterToggled);
  }
});

filterClose.addEventListener('click', function() {
  filter.classList.remove(filterToggled);
});
