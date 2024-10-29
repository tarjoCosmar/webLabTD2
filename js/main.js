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
        762: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    },

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    }
});

//fotos
$('#photoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    //var slideTo = button.data('slide-to');
    var imgSrc = button.data('img');
    var modal = $(this);
    //var carousel = modal.find('.carousel');
    //carousel.carousel(slideTo);
    var modalImage = modal.find('.modal-body img'); // Asume que tienes una imagen en el cuerpo del modal
    modalImage.attr('src', imgSrc); // Establece la fuente de la imagen
  });
  

// videos
$('#videoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var videoUrl = button.data('video');
    var modal = $(this);
    modal.find('#videoFrame').attr('src', videoUrl);
});

$('#videoModal').on('hide.bs.modal', function () {
    var modal = $(this);
    modal.find('#videoFrame').attr('src', '');
});


  
  

