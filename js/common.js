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

    $('.video-item-preview, .video-block-preview').on('click', function () {
       $(this).addClass('hidden');
    });

    $('.person-item').on('mouseenter', function () {
        $(this).addClass('hover');
        var personItemHight = $(this).outerHeight();
        var personItemContHight = $(this).find('.person-item-cont').outerHeight();
        var personItemNameHight = $(this).find('.person-item-name').outerHeight();
        var personItemInfoHight = $(this).find('.person-item-info').outerHeight();
        $(this).find('.person-item-back').css('height', personItemHight - personItemContHight + personItemNameHight + personItemInfoHight);
    }).on('mouseleave', function () {
        $(this).removeClass('hover');
        var personItemHight = $(this).outerHeight();
        var personItemContHight = $(this).find('.person-item-cont').outerHeight();
        var personItemNameHight = $(this).find('.person-item-name').outerHeight();
        var personItemInfoHight = $(this).find('.person-item-info').outerHeight();
        $(this).find('.person-item-back').css('height', personItemHight);
    });

    $('.article-cont-in ol li, .content-in ol li').each(function () {
       $(this).prepend('<span>' + ($(this).index() + 1) +'</span>');
    });


    $('.article-cont-side-in').stick_in_parent();

    $('.article-cont-side-wrap').each(function () {
        $(this).find('.owl-nav').prependTo($(this));
    });

    $('select').customSelect();

    $('.comments-item-button-answer').on('click', function () {
       $(this).closest('.comments-item').next('.comments-item-answer').slideToggle('fast');
    });

    $('.comments-item-close').on('click', function () {
        $(this).closest('.comments-item-answer').slideUp('fast');
    });

    $('.comments-item-answers-link').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).closest('.comments-item').next('.comments-item-answers').slideToggle('fast').find('.comments-item-answer').slideUp('fast');
    });

    $('.product-lang-list button').on('click', function () {
       $(this).addClass('active').removeClass('inactive').siblings().removeClass('active').addClass('inactive');
    });

    $('.product-price-btn-checkout').on('click', function () {
       $(this).closest('.product-price-wrap').addClass('active');
    });

    $('.product-item-price.horizontal .product-price-btn-checkout').on('click', function () {
       $(this).closest('.product-item-price').find('.product-price-checkout').show();
    });

    $('.article-list-1 .article-item').on('mouseover', function () {
       $(this).addClass('higher');
    }).on('mouseleave', function () {
        var article = $(this);
        setTimeout(function () {
            article.removeClass('higher');
        }, 300);
    });

    $(window).on('load resize', function () {
       $('.person-item-cont').each(function () {
          var personCont = $(this).outerHeight();
          $(this).css('height', personCont);
       });
       $('.faq-item').each(function () {
          var faqItemWidth = $(this).outerWidth();
          $(this).height(faqItemWidth);
       });
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    $('.qty-block').each(function () {
        $(this).append('<button class="qty-less" type="button">-</button><div class="qty-val"></div><button class="qty-more" type="button">+</button>');
        var numInput = $(this).find('input');
        var inputVal = numInput.val();
        var qtyLess = $(this).find('.qty-less');
        var qtyMore = $(this).find('.qty-more');
        var qtyVal = $(this).find('.qty-val');
        qtyVal.text(inputVal);
        qtyLess.on('click', function () {
            if(parseInt(inputVal) !== 1){
                inputVal = inputVal - 1;
            }
            numInput.val(inputVal);
            qtyVal.text(inputVal);
            $('[name=update_cart]').removeAttr('disabled');
        });
        qtyMore.on('click', function () {
            inputVal = parseInt(inputVal) + 1;
            numInput.val(inputVal);
            qtyVal.text(inputVal);
            $('[name=update_cart]').removeAttr('disabled');
        });
    });

    $('.cart-promo-btn.to-form').on('click', function () {
       $(this).remove();
       $('.cart-promo-form').addClass('active');
    });

    $('.form-check input').on('change', function () {
       var inputId = $(this).attr('id');
       if(inputId === 'payment_cod'){
           $('.checkout-bottom').addClass('cod');
       }else if(inputId === 'payment_card'){
           $('.checkout-bottom').removeClass('cod');
       }
    });

    $('.slider-double .item').each(function () {
       var itemIndex = $(this).index();
       $(this).attr('data-id', itemIndex);
    });

    var sliderMain = $('.slider-double-main');
    sliderMain.each(function () {
       $(this).clone().removeClass('slider-double-main').addClass('slider-double-nav').insertAfter($(this));
       $(this).addClass('slider-nav').owlCarousel({
           items: 1,
           nav: true,
           dots: true,
           mouseDrag: false,
           touchDrag: false,
           video: true,
           smartSpeed: 100
       });
        $(this).find('.owl-dot').each(function(){
            $(this).attr('data-id', $(this).index());
        });
    });

    var sliderNav = $('.slider-double-nav');
    sliderNav.owlCarousel({
        items: 6,
        dots: false,
        margin: 8,
        mouseDrag: false,
        touchDrag: false,
        video: true
    });

    $('.slider-double .owl-item').each(function () {
        var itemIndex = $(this).find('.item').attr('data-id');
        $(this).attr('data-id', itemIndex);
    });

    sliderMain.on('translated.owl.carousel', function() {
        var slideActive = $(this).find('.owl-item.active').attr('data-id');
        sliderNav.trigger('to.owl.carousel', [slideActive, 100]);
        sliderNav.find('.owl-item[data-id="' + slideActive +'"]').addClass('current').siblings().removeClass('current');
    });

    sliderNav.each(function () {
       $(this).find('.owl-item:first-child').addClass('current');
       $(this).find('.owl-item').on('click', function () {
           $(this).addClass('current').siblings().removeClass('current');
           var slideActive = $(this).attr('data-id');
           sliderMain.find('.owl-dot[data-id="' + slideActive +'"]').trigger('click');
       })
    });

    $('.acc-item-title').on('click', function () {
       $(this).toggleClass('active').siblings().slideToggle('fast').parent().siblings().find('.acc-item-title').removeClass('active').siblings().slideUp('fast');
    });

    $('.order-info-change').on('click', function () {
        $(this).hide().closest('.order-info').find('.order-info-in').hide().siblings('form').show();
    });

    $('.modal-open').on('click', function (e) {
        e.preventDefault();
       var modalTarget = $(this).attr('data-target');
       $('.modal[data-id=' + modalTarget +']').addClass('open');
       $(this).closest('.modal').removeClass('open');
    });

    $('.modal-close, .modal-back').on('click', function () {
       $(this).closest('.modal').removeClass('open');
    });

    $('.modal').each(function () {
        var totalPrice = $('<span class="visible"></span>');
        totalPrice.insertBefore($(this).find('.cart-total span'));
    });

    $('.modal-select select').on('change', function () {
        var selectVal = $(this).val();
        var selectValNum = parseInt(selectVal);
        var price = $(this).closest('.modal').find('.cart-total span:not(.visible)').hide().text();
        var priceNum = parseInt(price);
        if(selectVal === '12'){
            $(this).closest('.modal-select').addClass('sale');
        }else{
            $(this).closest('.modal-select').removeClass('sale');
        }
        $(this).closest('.modal').find('.cart-total span.visible').text(selectValNum*priceNum);
    });

});
