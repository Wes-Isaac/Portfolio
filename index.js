const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
const cancelIcon = document.querySelector('.cancel-icon');

hamburger.addEventListener('click', () => {
  menu.classList.replace('invisible', 'menu');
});

cancelIcon.addEventListener('click', () => {
  menu.classList.replace('menu', 'invisible');
});