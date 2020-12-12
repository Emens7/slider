import pictures from './pic.js';
import imgDuration from './duration.js';

let picIndex = 0;
let timer = null;

const slideShow = () => {
    console.log(picIndex);
    if ( picIndex == pictures.length) {
        picIndex = 0;
    }else if (picIndex < 0) {
        picIndex = pictures.length - 1;
    }



    document.querySelector('.img').src = pictures[picIndex].source;
    document.querySelector('.text').innerText = pictures[picIndex].caption;
    document.querySelector('.numPage').innerText = `${picIndex + 1} / ${pictures.length}`;
   
    timer = setTimeout(() => {
        picIndex += 1;
        slideShow();
    }, imgDuration);
}

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

prevBtn.addEventListener('click', () => {
    picIndex -= 1;
    if (timer != null) {
        clearTimeout(timer);
    }
    slideShow();
});

nextBtn.addEventListener('click', () => {
    picIndex += 1;
    if (timer != null) {
        clearTimeout(timer);
    }
    slideShow();
});


export {slideShow};