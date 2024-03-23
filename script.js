// script.js
const animatedImage = document.getElementById('animated-image');

function animateImage() {
    // Уменьшение изображения
    animatedImage.style.transform = 'scale(0.8)';
    setTimeout(() => {
        // Возврат к исходному размеру
        animatedImage.style.transform = 'scale(1)';
    }, 500); // Подождите 1 секунду

    // Покачивание изображения
    animatedImage.style.transform += ' rotate(5deg)';
    setTimeout(() => {
        animatedImage.style.transform = 'rotate(-100deg)';
    }, 50); // Подождите еще 2 секунды
}

// Запустите анимацию при загрузке страницы
animateImage();
