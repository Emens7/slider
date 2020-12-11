const showSlides = () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter += 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}


export default showSlides

setInterval(showSlides, 4000);