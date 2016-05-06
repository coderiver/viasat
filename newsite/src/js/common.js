$(document).ready(function() {

    // menu
    (function () {
        var btn  = $('.js-menu-btn'),
            menu = $('.js-menu');
        btn.on('click', function () {
            btn.toggleClass('is-active');
            menu.toggleClass('is-active');
        });
    }());

    // promo
    (function () {
        var sl = $('.js-promo');
        if (sl.length) {
            sl.slick({
                dots: true
            });
        };
    }());

    // premiers
    (function () {
        var sl = $('.js-blog');
        if (sl.length) {
            sl.slick({
                slidesToShow: 5,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true
                    }
                },{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }]
            });
        };
    }());

    // default slider
    (function () {
        var sl = $('.js-slider');
        if (sl.length) {
            sl.slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
        };
    }());

    // watch at channel slider
    (function () {
        var sl = $('.js-tvshow');
        if (sl.length) {
            sl.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3
                    }
                },{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },{
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        };
    }());

    // channels slider
    (function () {
        var sl = $('.js-channels');
        if (sl.length) {
            sl.slick({
                slidesToShow: 6,
                slidesToScroll: 6,
                dots: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
        };
    }());

    // facts slider
    (function () {
        var sl = $('.js-facts');
        if (sl.length) {
            sl.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }]
            });
        };
    }());

    // quotes slider
    (function () {
        var sl = $('.js-quotes');
        if (sl.length) {
            sl.slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 766,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }]
            });
        };
    }());

    // quotes slider
    (function () {
        var sl = $('.js-posters');
        if (sl.length) {
            sl.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    }
                }]
            });
        };
    }());

    // carousel at promo page
    (function () {
        var sl = $('.js-carousel');
        if (sl.length) {

            sl.on('init', function (event, slick) {
                let centerSlide = $(this).find('.slick-center');
                let slideBeforeCenter = centerSlide.prev();
                let slideAfterCenter = centerSlide.next();

                slideBeforeCenter.addClass('prev-slide');
                slideAfterCenter.addClass('next-slide');
            });

            sl.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                //infinite: false,
                centerMode: true
            });

            sl.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                let centerSlide = $(this).find('.slick-center');

                if(currentSlide < nextSlide){
                    $('.prev-slide').removeClass('prev-slide');
                    centerSlide.addClass('prev-slide');
                    centerSlide.prev().removeClass('prev-slide');
                    centerSlide.next().removeClass('next-slide');
                    centerSlide.next().next().addClass('next-slide');
                }
                else {
                    $('.next-slide').removeClass('next-slide');
                    centerSlide.addClass('next-slide');
                    centerSlide.prev().removeClass('prev-slide');
                    centerSlide.prev().prev().addClass('prev-slide');
                    centerSlide.next().removeClass('next-slide');
                }

            });
        };
    }());
    
    // scrolltop btn

    $(document).on('scroll', function () {
       if($(window).scrollTop() >= 500){
           $('.js-scrolltop').addClass('visible');
       }
        else {
           $('.js-scrolltop').removeClass('visible');
       }
    });

    $('.js-scrolltop').on('click', function () {
       $('html, body').animate({
           scrollTop: 0
       })
    });
    
    // custom select with js-scrollpane

    if($('.js-select').length){
        $('.js-select').select2({
            minimumResultsForSearch: -1
        });

        $(document).on("select2:open", ".js-select", function () {
            $('.select2-results').perfectScrollbar();
            setTimeout(function () {
                $('.select2-results').perfectScrollbar('update');
            },100);
        });
    }
    
    // watch list dropdown
    
    $('.js-watch-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).closest('.js-watch').find('.watch__list').slideToggle();
    });

    // hide content on mobile

    $('.js-wrap-btn').on('click', function () {
        var content = $(this).closest('.js-wrap').find('.js-wrap-cont');
        content.slideToggle();
    });

});