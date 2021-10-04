const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
const cancel_icon = document.querySelector('.cancel-icon');


hamburger.addEventListener('click', (e) => {
  menu.classList.replace('invisible', 'menu');

});

cancel_icon.addEventListener('click', (e) => {
  menu.classList.replace('menu', 'invisible');

});