$(document).ready(function() {

    //select смена языка
    $('.header__select').styler();

    //слайдер большой
    if($('.slider')) {
        $('.slider').slick({
            infinite: true,
            arrows: true,
            prevArrow: '<a href="#" class="slider__arrow slider-arrow__prev"></a>',
            nextArrow: '<a href="#" class="slider__arrow slider-arrow__next"></a>',
        });
    }

   // слайдер в сайдбаре
    if($('.sidebar__slider')) {
        $('.sidebar__slider').slick({
            arrows: false,
            appendDots: $('.sidebar-slider__dots'),
            infinite: true,
            dots: true,
            // autoplay: true,
            autoplaySpeed: 3000
    });
    }
});

