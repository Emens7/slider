import pictures from './pic.js';

const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');
const dot4 = document.querySelector('#dot4');
const dot5 = document.querySelector('#dot5');
const dot6 = document.querySelector('#dot6');

const dotsTextImg = () => {

dot1.addEventListener('click', () => {

    document.querySelector('.img').src = pictures[0].source;
    document.querySelector('.text').innerText = pictures[0].caption;v
});

dot2.addEventListener('click', () => {

    document.querySelector('.img').src = pictures[1].source;
    document.querySelector('.text').innerText = pictures[1].caption;v
});

dot3.addEventListener('click', () => {

    document.querySelector('.img').src = pictures[2].source;
    document.querySelector('.text').innerText = pictures[2].caption;v
});

dot4.addEventListener('click', () => {

    document.querySelector('.img').src = pictures[3].source;
    document.querySelector('.text').innerText = pictures[3].caption;v
});
dot5.addEventListener('click', () => {

    document.querySelector('.img').src = pictures[4].source;
    document.querySelector('.text').innerText = pictures[5].caption;v
});

dot6.addEventListener('click', () => {

    document.querySelector('.img').src = pictures[5].source;
    document.querySelector('.text').innerText = pictures[5].caption;v
});

}

export default dotsTextImg;