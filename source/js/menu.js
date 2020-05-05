var header = document.querySelector('.page-header');
var navBtn = document.querySelector('.page-header__toggle');
var headerToggled = 'page-header--toggled';

header.classList.remove('page-header--nojs');

navBtn.addEventListener('click', function() {
  if (header.classList.contains(headerToggled)) {
    header.classList.remove(headerToggled);
  } else {
    header.classList.add(headerToggled);
  }
});
