'use strict';

const text = document.querySelector('.text');
const button = document.querySelector('.button');
let buttonValue = button.value;
let textInner = text.innerHTML;


function fAgrega() { document.querySelector('.text').innerHTML = document.querySelector('.button').value;}

button.addEventListener('keypress', fAgrega);

console.log()