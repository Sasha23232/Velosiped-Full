$('.castom-slider').slick({
    arrows: false,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 2500
});

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.body
burger.addEventListener('click', () => {
    menu.classList.toggle('open')
    body.classList.toggle('hidden')
})