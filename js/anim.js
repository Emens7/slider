let slideIndex = 0;

const showSlides = () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter += 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

setTimeout(showSlides, 2000);


const dots = document.querySelector('.dot');