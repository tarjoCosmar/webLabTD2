import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

new Swiper(".swiper-container", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
        },
        
    autoplay: {
        delay: 10000,
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },

    breakpoints: {
        // when window width is <= 640px
        762: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});
