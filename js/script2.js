const carousels = document.querySelectorAll('.carousel-container');
const buttons = document.querySelectorAll('.carousel-button');
const items = carousels[0].querySelectorAll('.carousel-item');
let currentIndex = 0;

function nextSlide(index) {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(index);
}

function prevSlide(index) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(index);
}

function updateCarousel(index) {
    const offset = -currentIndex * 300;
    carousels[index].style.transform = `translateX(${offset}px)`;
}