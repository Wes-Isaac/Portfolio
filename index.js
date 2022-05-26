const projects = [{
  id: '1',
  title: 'To do list app',
  image: 'images/Screenshot24.png',
  description: 'A simple to do list Application which dynamically renders tasks in JavaScript using the Webpack. Projects and tasks can be created and stored in Web browser\'s local storage.',
  lang1: 'html',
  lang2: 'css',
  lang3: 'JavaScript',
  lang4: 'Bootstrap',
  lang5: 'gpages',
  lang6: 'Terminal',
  lang7: 'Webpack',
  lang8: 'Github',
  repo: 'https://github.com/Wes-Isaac/To-do-list',
  live: 'https://wes-isaac.github.io/To-do-list/'
}, {
  id: '2',
  title: 'Space Travelers Hub',
  image: 'images/space.png',
  description: 'This project is for space rockets and missions. You can see available rockets and missions to reserve or join. The project built by using JavaScript, React, Redux, CSS. Built with external api provided by spacex.',
  lang1: 'React',
  lang2: 'Redux',
  lang3: 'CSS',
  lang4: 'React',
  lang5: 'Redux',
  lang6: 'CSS',
  lang7: 'Webpack',
  lang8: 'Github',
  repo: 'https://github.com/Wes-Isaac/space-travelers-hub',
  live: 'https://cranky-cray-0feacf.netlify.app/',
}, {
  id: '3',
  title: 'Vocabulary Game',
  image: 'images/vocab.png',
  description: 'A fun vocabulary game where you can test you\'re vocabulary skills and compare yourself with others in the leaderboard. Built with external apis such as the Meriam Webster dictionary api and a leaderboard api provided by Microverse.',
  lang1: 'html',
  lang2: 'css',
  lang3: 'JavaScript',
  lang4: 'HTML',
  lang5: 'CSS',
  lang6: 'JavaScript',
  lang7: 'Webpack',
  lang8: 'Github',
  repo: 'https://github.com/Wes-Isaac/Vocabulary-game',
  live: 'https://wes-isaac.github.io/Vocabulary-game/',
}, {
  id:'4',
  title: 'Budget App',
  image: 'images/budget.png',
  description: 'This project is created as part of the rails capstone at Microverse. This app is a mobile web application where a user manage their budget: have a list of transactions associated with a category, so that the user can see how much money they spent and on what.',
  lang1: 'RoR',
  lang2: 'CSS',
  lang3: 'Postgresql',
  lang4: 'RoR',
  lang5: 'CSS',
  lang6: 'Postgresql',
  lang7: 'Heroku',
  lang8: 'Capybara',
  repo: 'https://github.com/Wes-Isaac/Budget-App',
  live: 'https://budgetol.herokuapp.com',
}, {
  id:'5',
  title: 'Recipe App',
  image: 'images/recipe.png',
  description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
  lang1: 'RoR',
  lang2: 'CSS',
  lang3: 'Postgresql',
  lang4: 'RoR',
  lang5: 'CSS',
  lang6: 'Postgresql',
  lang7: 'Heroku',
  lang8: 'Capybara',
  repo: 'https://github.com/Wes-Isaac/Recipe-App',
  live: 'https://recipeups.herokuapp.com/',
}, {
  id:'6',
  title: 'Online Mart',
  image: 'images/mart.png',
  description: 'A simple to do list Application which dynamically renders tasks in JavaScript using the Webpack. Projects and tasks can be created and stored in Web browser\'s local storage.',
  lang1: 'PHP',
  lang2: 'JavaScript',
  lang3: 'Stripe JS',
  lang4: 'PHP',
  lang5: 'JavaScript',
  lang6: 'Stripe JS',
  lang7: 'MYSQL',
  lang8: 'CSS',
  repo: 'https://github.com/Wes-Isaac/phpmart-',
  live: 'http://fast-wildwood-31419.herokuapp.com',
}];

const button = document.querySelectorAll('.popup');
const popup = document.querySelector('.popup-window');

const fillPopup = (popup, [project]) => {
  popup.innerHTML = `<div class="container">
  <button class="close-button"><i class="fa fa-times"></i></button>
  <img src="${project.image}" alt="project-img" class="popup-img">
  <div class="header-container">
      <h2 class="container-title">${project.title}</h2>
      <div class="desktop butt">
  <button><a href="${project.live}" target="_blank">See Live</a><img src="./images/Icon-Export.png" alt="github"></button>
  <button><a href="${project.repo}" target="_blank">See Source</a><img src="./images/Git.png" alt="github"></button>
  </div>
  </div>

  <ul class="skillsbar modal-ul">
  <li class="mobile">${project.lang1}</li>
  <li class="mobile">${project.lang2}</li>
  <li class="mobile">${project.lang3}</li>
  <li class="desktop">${project.lang4}</li>
  <li class="desktop">${project.lang5}</li>
  <li class="desktop">${project.lang6}</li>
  <li class="desktop">${project.lang7}</li>
  <li class="desktop">${project.lang8}</li>
  </ul>
  <p class="description">${project.description}</p>
  <div class="buttons mobile">
  <button><a href="${project.llve}" target="_blank">See Live</a><img src="./images/Icon-Export.png" alt="github"></button>
  <button><a href="${project.repo}" target="_blank">See Source</a><img src="./images/Git.png" alt="github"></button>
  </div>

  </div>`;
  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    popup.classList.replace('window', 'invisible');
  });
};

button.forEach((but) => {
  but.addEventListener('click', () => {
    const project = projects.filter((pro) => pro.id === but.id);
    fillPopup(popup, project);
    popup.classList.replace('invisible', 'window');
  });
});

const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
const menuLis = menu.querySelectorAll('li');
const sections = document.querySelectorAll('section');

hamburger.addEventListener('click', () => {
  menu.classList.replace('invisible', 'menu');
  sections.forEach((section) => section.classList.add('blur'));
});
for (let i = 0; i < menuLis.length; i += 1) {
  menuLis[i].addEventListener('click', () => {
    menu.classList.replace('menu', 'invisible');
    sections.forEach((section) => section.classList.remove('blur'));
  });
}

function isLower(str) {
  return !(/[a-z]/.test(str) && !/[A-Z]/.test(str));
}

const form = document.querySelector('.form');
const emailInput = document.querySelector('[type=email]');
const textInput = document.querySelector('[type=text]');
const textArea = document.querySelector('textarea');
const errorInput = document.querySelector('.error');
const formInput = [textInput, emailInput, textArea];

function error() {
  if (emailInput.validity.valueMissing) {
    errorInput.innerHTML = '* Please enter an email address';
    errorInput.classList.replace('invisible', 'error');
  } else if (emailInput.validity.typeMismatch) {
    errorInput.innerHTML = '* Please Enter Valid email (include "@" and a domain name)';
    errorInput.classList.replace('invisible', 'error');
  } else if (isLower(emailInput)) {
    errorInput.innerHTML = '* Your email address should be lowercase letters';
    errorInput.classList.replace('invisible', 'error');
  }
}
form.addEventListener('submit', (e) => {
  if (!emailInput.validity.valid || isLower(emailInput.value)) {
    error();
    e.preventDefault();
  } else {
    localStorage.clear();
  }
});

function populateStorage() {
  const formData = {
    name: textInput.value,
    email: emailInput.value,
    message: textArea.value,
  };
  localStorage.setItem('data', JSON.stringify(formData));
}
formInput.forEach((input) => input.addEventListener('keyup', populateStorage));

function setForm() {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data != null) {
    textInput.value = data.name;
    emailInput.value = data.email;
    textArea.value = data.message;
  }
}

setForm();
