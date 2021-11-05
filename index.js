const projects = [{
  title: 'Keeping track of hundreds of components',
  image: 'images/Screenshot(24).png',
  description: "A simple to do list Application which dynamically renders tasks in JavaScript using the Webpack. Projects and tasks can be created and stored in Web browser's local storage.",
  lang1: 'html',
  lang2: 'css',
  lang3: 'JavaScript',
  lang4: 'Bootstrap',
  lang5: 'gpages',
  lang6: 'Terminal',
  lang7: 'Webpack',
  lang8: 'Github',
}];
const [project] = projects;
const button = document.querySelectorAll('.popup');
const popup = document.querySelector('.popup-window');

popup.innerHTML = `<div class="container">
<button class="close-button"><i class="fa fa-times"></i></button>
<img src="${project.image}" alt="project-img" class="popup-img">
<div class="header-container">
    <h2 class="container-title">${project.title}</h2>
    <div class="desktop butt">
<button>See Live<span><img src="./images/Icon-Export.png" alt="github"></span></button>
<button>See Source<span><img src="./images/Git.png" alt="github"></span></button>
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
<button>See Live<span><img src="./images/Icon-Export.png" alt="github"></span></button>
<button>See Source<span><img src="./images/Git.png" alt="github"></span></button>
</div>

</div>`;
const close = document.querySelector('.close-button');
close.addEventListener('click', () => {
  popup.classList.replace('window', 'invisible');
  document.body.classList.remove('isfixed');
});

button.forEach((but) => {
  but.addEventListener('click', () => {
    document.body.classList.add('isfixed');
    popup.classList.replace('invisible', 'window');
  });
});

const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
const menuLis = menu.querySelectorAll('li');

hamburger.addEventListener('click', () => {
  menu.classList.replace('invisible', 'menu');
});
for (let i = 0; i < menuLis.length; i += 1) {
  menuLis[i].addEventListener('click', () => {
    menu.classList.replace('menu', 'invisible');
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
