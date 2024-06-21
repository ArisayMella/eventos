// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//const buttonElement = document.getElementById('button');

//const printClick = () => {
//console.log('CLICK');
//};

//const printClick = event => {
// console.log(event);
//};

//buttonElement.addEventListener('click', printClick);

//#2
/*
const hearingElement = document.getElementById('hearing');

const changeTextEnter = () => {
  hearingElement.textContent = 'Quita de encima';
};

const changeTextOut = () => {
  hearingElement.textContent = 'Soy un título';
};

hearingElement.addEventListener('mouseover', changeTextEnter);
hearingElement.addEventListener('mouseout', changeTextOut);*/

//#3

const ventanaAltura = window.innerHeight;
const ventanaAncho = window.innerWidth;

console.log(ventanaAltura, ventanaAncho);
