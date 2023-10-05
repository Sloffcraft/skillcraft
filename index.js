// Author: Rohit Mehta
import './styles.css';

const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerContent = document.getElementById("hamburger-content");
const hamburgerClose = document.getElementById("hamburger-close");

hamburgerMenu.addEventListener('click', _ => {
    console.log('hamburger clicked');
    hamburgerContent.classList.remove('hidden');
    hamburgerMenu.classList.add('hidden');
    hamburgerClose.classList.remove('hidden');
});

hamburgerClose.addEventListener('click', _ => {
    console.log('close clicked');
    hamburgerContent.classList.add('hidden');
    hamburgerMenu.classList.remove('hidden');
    hamburgerClose.classList.add('hidden');
});




const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    autoplay: {
        delay: 3000,
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
