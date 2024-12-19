// Carousel Functionality
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

const registerButtons = document.querySelectorAll('.register-btn');

registerButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert("You've successfully registered for this event!");
    });
});
