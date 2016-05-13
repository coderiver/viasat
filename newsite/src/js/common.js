$(document).ready(function() {

    // menu

    $('.js-menu-btn').on('click', function () {
        $(this).toggleClass('is-active');
        $('.js-menu').toggleClass('is-active');
    });

    //slider init
    var slider = {

        initSlider: function(selector, opts) {
            var slider = $(selector);

            if (!slider.length) {
                return ;
            }

            slider.on('init', function() {
                setTimeout(function(){
                    slider.addClass('loaded');
                }, 200);
            });
            slider.slick(opts);
        }

    };

    // promo
    slider.initSlider('.js-promo', {
        dots: true
    });

    // premiers
    slider.initSlider('.js-blog', {
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
                arrows: false,
                dots: true
            }
        }]
    });

    // default slider
    slider.initSlider('.js-slider', {
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

    // watch at channel slider
    slider.initSlider('.js-tvshow', {
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

    // channels slider
    slider.initSlider('.js-channels', {
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

    // facts slider
    slider.initSlider('.js-facts', {
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

    // quotes slider
    slider.initSlider('.js-quotes', {
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 766,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });

    // posters slider
    slider.initSlider('.js-posters', {
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

    // js-slick
    slider.initSlider('.js-slick', {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // js-slick
    slider.initSlider('.js-interesting', {
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // carousel at promo page

    if ($('.js-carousel').length) {

        var promoSlider = $('.js-carousel');

        promoSlider.on('init', function (event, slick) {
            promoSlider.addClass('loaded');
            var centerSlide = $(this).find('.slick-center');
            var slideBeforeCenter = centerSlide.prev();
            var slideAfterCenter = centerSlide.next();

            slideBeforeCenter.addClass('prev-slide');
            slideAfterCenter.addClass('next-slide');
        });

        promoSlider.slick({
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: false,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        promoSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var centerSlide = $(this).find('.slick-center');
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
    }

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
        
        $('.js-filters-reset').on('click', function () {
           var form = $(this).closest('.js-filters-form');

            $('.js-select').select2('val', '');
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

    // text ellipsis

    $('.js-ellip').each(function () {
       var target = $(this);

        if(target){
            var lines = target.data('lines') || 2;

            target.ellipsis({
                lines: lines,
                responsive: true
            });
        }


    });



});