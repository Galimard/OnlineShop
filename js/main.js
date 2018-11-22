$(document).ready(function() {

    //слайдер
    if($('.slider')) {
        $('.slider').slick({
            infinite: true,
            arrows: true,
            prevArrow: '<a href="#" class="slider__arrow slider-arrow__prev"></a>',
            nextArrow: '<a href="#" class="slider__arrow slider-arrow__next"></a>',
        });
    }

});

