// alert('JavaScript is linked!');

//select an element using getElement
// const h1Element = document.getElementById('title');
// console.log(h1Element);


//select an element using querySelector
// works like a css selector
const h1Element = document.querySelector('.main-title');
// console.log(h1Element);

const pEl = document.querySelector('.cool');

//how to change the content of a DOM element

//innerHTML - used for setting text and html

pEl.innerHTML = "Comments for <strong>today</strong>";


//textContent - used for setting text only

// pEl.textContent = "Comments for <strong>today</strong>";

//changing css style of an element using JavaScript

h1Element.style.color = 'red';
h1Element.style.fontFamily = 'Helvetica';
h1Element.style.textAlign = 'center';

pEl.style.color = 'rebeccapurple';


//working with HTML attributes and the DOM
console.log(pEl.hasAttribute('class'));

pEl.setAttribute('id', 'not-cool');

console.log(h1Element.getAttribute('id'));

const aEl = document.querySelector('a');
aEl.setAttribute('href', 'https://google.com');
aEl.setAttribute('target', '_blank');



