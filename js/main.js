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


//formulario mensaje
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Formulario enviado con éxito:', data);
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
});


