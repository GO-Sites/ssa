$(document).ready(function() {
    $('.school-slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        nextArrow: false,
        prevArrow: false,
        arrows: false,
    });
    $('.testimonials-slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        dots: true,
        nextArrow: false,
        prevArrow: false,
        arrows: false,
    });
});