

const carouselSlide = document.querySelector('.carousel__slide');
const carouselImages = document.querySelectorAll('.carousel__slide img');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 1;

const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter += 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter -= 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

const showSlides = () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter += 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}



const dots = () => {
    const b1 = document.querySelector('#dot1');
    b1.addEventListener('click', () => {
        counter = 6;
    });
    const b2 = document.querySelector('#dot2');
    b2.addEventListener('click', () => {
        counter = 1;
    });
    const b3 = document.querySelector('#dot3');
    b3.addEventListener('click', () => {
        counter = 2;
    });
    const b4 = document.querySelector('#dot4');
    b4.addEventListener('click', () => {
        counter = 3;
    } );
    const b5 = document.querySelector('#dot5');
    b5.addEventListener('click', () => {
        counter = 4;
    });
    const b6 = document.querySelector('#dot6');
    b6.addEventListener('click', ()=> {
        counter = 5;
    })
}

   
    


dots();
setInterval(showSlides, 4000);