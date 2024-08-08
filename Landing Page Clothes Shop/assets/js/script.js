const slider = document.querySelector('.slider');
const images = Array.from(slider.querySelectorAll('img'));
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 4000); // Change image every 4 seconds
showNextImage(); // Call the function immediately to start the animation

const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    const thumbnails = container.querySelectorAll('.thumbnail');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.style.animationDelay = `${index * 2.5}s`; // تاخیر انیمیشن برای هر عکس
    });

    container.addEventListener('mouseenter', () => {
        thumbnails.forEach(thumbnail => {
            thumbnail.style.animationPlayState = 'running'; // شروع انیمیشن
        });
    });

    container.addEventListener('mouseleave', () => {
        thumbnails.forEach(thumbnail => {
            thumbnail.style.animationPlayState = 'paused'; // توقف انیمیشن
        });
    });
});
const buyButton = document.querySelector('.slider-container a');

buyButton.addEventListener('mouseenter', () => {
  buyButton.innerHTML = '<i class="fa-solid fa-cart-shopping">Buy Now</i>';
});

buyButton.addEventListener('mouseleave', () => {
  buyButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
});
