'use strict';

const imgParts = ['rope', 'hanger', 'rod', 'floor', 'head', 'trunk', 'armL', 'armR', 'legL', 'legR']
let mistakes = 0;


for (let i = 0; i < imgParts.length; i++) {
    document.querySelector(`.${imgParts[i]}`).classList.add('hide');
}


const btn = document.querySelector('.button');

function display(){
    document.querySelector(`.${imgParts[mistakes]}`).classList.remove('hide');
    mistakes++;
}

btn.addEventListener('click', display);