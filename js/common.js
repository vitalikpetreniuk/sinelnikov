$(function() {

	$('.slider-1').owlCarousel({
        margin: 30,
        items: 4,
        nav: true,
        dots: false
    });

	$('.slider-2').owlCarousel({
        margin: 30,
        items: 3,
        nav: true,
        dots: false
    });

	$('.slider-vertical').owlCarousel({
        items: 3,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        margin: 22,
        nav: true,
        dots: false,
        autoWidth: true
    });

	$('.menu .last a').on('click', function (e) {
        e.preventDefault();
        $('.menu-hidden').addClass('open');
    });

    $('.menu-hidden-close').on('click', function () {
       $('.menu-hidden').removeClass('open');
    });

    $('.video-item-preview').on('click', function () {
       $(this).addClass('hidden');
    });

    $('.person-item').on('mouseenter', function () {
        $(this).addClass('hover');
    }).on('mouseleave', function () {
        $(this).removeClass('hover');
    });

    $('.article-cont-in ol li').each(function () {
       $(this).prepend('<span>' + ($(this).index() + 1) +'</span>');
    });


    $('.article-cont-side-in').each(function () {
       $(this).find('.owl-nav').prependTo($(this));
    }).stick_in_parent();

    $('select').customSelect();

});
