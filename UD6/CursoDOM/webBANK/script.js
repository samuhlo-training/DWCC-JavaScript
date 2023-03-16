'use strict';
/*
//////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////

//SELECTIN ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//CREATING AND INSERTING ELEMENTS
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent =
// 'We use cookies 🍪 for improved funtionality and analytics.';
message.innerHTML =
  'We use cookies 🍪 for improved funtionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
// Solo se puede usar una vez, si esta en un sitio no puede estar en otro.
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

//DELETE

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
    //OldForm
    //message.parentElement.removeChild(message);
  });

//STYLES

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor); // Solo funciona para estilos en linea puestos por nosotros
console.log(getComputedStyle(message).color);getAttributeNodeNS // Propiedades del elemento
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orange'); // Cambiar las propiedades almacenadas en variables de css

//ATTRIBUTES

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.designer); // not work
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data Attributes
console.log(logo.dataset.versionNumber);

//CLASES

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

*/

////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////

//Scroll

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //OLD VERSION
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //NEW FORM
  section1.scrollIntoView({ behavior: 'smooth' });
});

//EVENTS AND EVENTS HANDLERs

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading 😀');
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//OLD TIMES VERSION
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading 😀');
// };

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

//for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
