const menuHamburger = document.querySelector(".burger-icon");
const navLinks = document.querySelector(".nav-links");
const imageSources = ['./assets/burger.svg', './assets/burgerx.svg'];

let currentImageIndex = 0; // Start with the first image

// Function to toggle the image source
function toggleImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length; // Cycle through image sources
    const newImageSrc = imageSources[currentImageIndex];
    menuHamburger.src = newImageSrc;
}

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
    toggleImage();
});
