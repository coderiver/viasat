$(document).ready(function() {

    $(document).click(function() {
        $(".js-select").removeClass("is-active");
        $(".js-select-list").slideUp(300);
        $('.js-mob-menu').removeClass('is-open');
        $('.js-dropdown').removeClass('is-open');
        $('.js-search-form').removeClass('is-visible');
        $('.js-filters').removeClass('is-open');
    });

    // filters mobile view

    $('.js-filters-btn').on('click', function(event) {
        $('.js-filters').addClass('is-open');
        event.stopPropagation();
    });
    $('.js-filters').on('click', function(event) {
        event.stopPropagation();
    });

    // search

    $('.js-search').on('click', function(event) {
        $('.js-search-form').addClass('is-visible');
        $(this).parent().find('input[type=text]').focus();
        event.stopPropagation();
    });
    $('.js-search-form').on('click', function() {
        event.stopPropagation();
    });

    // dropdown
    function dropdownResize() {
        var width = $('.center').outerWidth();
        $('.js-dropdown').css('width', width);
        if ($(window).width() < 768) {
            $('.js-dropdown').css('width', '100%');
        };
    }
    dropdownResize();
    $(window).resize(function() {
        dropdownResize();
    });

    if ($(window).width() >= 768) {

        $('.js-drop').hover(
            function() {
                if (!$('.js-drop').hasClass('is-open')) {
                    $(this).find('.js-drop-link').addClass('is-open');
                    $(this).find('.js-dropdown').fadeIn('fast');
                    $(this).addClass('is-open');
                };
            },
            function() {
                $(this).find('.js-drop-link').removeClass('is-open');
                $(this).find('.js-dropdown').fadeOut('fast');
                setTimeout(function() {
                    $('.js-drop').removeClass('is-open');
                }, 300);
            }
        );

    }
    else {
        $('.js-dropdown').show();

        $('.js-drop').on('click', function() {
            $(this).find('.js-dropdown').addClass('is-open');
        })
    }

    // mobile menu

    $('.js-mob-menu-close').on('click', function() {
        $('.js-mob-menu').removeClass('is-open');
    });

    $('.js-hamburger').on('click', function(event) {
        $('.js-mob-menu').addClass('is-open');
        $('.js-filters').removeClass('is-open');
        event.stopPropagation();
    });
    $('.js-mob-menu').on('click', function(event) {
        event.stopPropagation();
    });
    $('.js-dropdown-back').on('click', function(event) {
        $(this).parent().removeClass('is-open');
        event.stopPropagation();
    })


    // slick

    $('.js-slider').on('init', function(slick) {
        setTimeout(function(){
            $('.js-slider').addClass("is-loaded");
        },200);
    });
    $('.js-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.js-channels').slick({
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-slick').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    $('.js-recommends').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // select list
    $('.js-select').on('click',function(event) {
        event.stopPropagation();
    });

    $('.js-select-text').on('click', function(event) {
        var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(300);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(300);
            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
        }
    });

    $('.js-select-list li').on('click', function() {
        var val = $(this).attr("data-val");
        var text = $(this).text();
        var select = $(this).parents(".js-select");
        var selectList = $(this).parents(".js-select-list");
        select.find(".js-select-text").text(text);
        select.find("option").removeAttr("selected");
        select.find('option[value="'+val+'"]').attr("selected", "selected");
        selectList.find("li").removeClass("is-active");
        $(this).addClass("is-active");
        select.removeClass("is-active");
        selectList.slideUp(300);
        return false;

    });

    // popup init
    $('.js-popup-btn').on('click', function() {
        var link = $(this).data('link');

        $('[data-popup='+link+']').fadeIn();
        $('body').addClass('no-scroll');
        return false;
    });

    $('.overlay > span').on('click', function() {
        $(this).parent().fadeOut();
    });
    $('.js-popup-close').on('click', function() {
        $(this).parents('.overlay').fadeOut();
    });

    // gallery

    $('.js-gallery').on('click', function() {
        var slideNumber = $(this).data('slide');

        $('.gallery-overlay').fadeIn();

        if ($('.gallery').hasClass('is-inited')) {
            $('.js-gallery-view').slick('slickGoTo', slideNumber);
            $('.js-gallery-thumbnail').slick('slickGoTo', slideNumber);
        }
        else {
            $('.js-gallery-view').slick({
                speed: 1000,
                infinite: false,
                initialSlide: slideNumber,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                adaptiveHeight: true,
                asNavFor: '.js-gallery-thumbnail'
            });

            $('.js-gallery-view').on('afterChange', function(event, slick, currentSlide){
                $('.js-gallery-thumbnail').find('.slick-slide').removeClass('slick-current');
                $('.js-gallery-thumbnail').find('.slick-slide[data-slick-index='+currentSlide+']').addClass('slick-current');
            });

            $('.js-gallery-thumbnail').slick({
                slidesToShow: 8,
                slidesToScroll: 1,
                initialSlide: slideNumber,
                arrows: false,
                infinite: false,
                focusOnSelect: true,
                asNavFor: '.js-gallery-view'
            });
            $('.gallery').addClass('is-inited');
        }

        return false;
    });

    $('.js-gallery-close').on('click', function() {
        $(this).parent().fadeOut();
    });

    // google map

    function initialize() {
        var mapOptions = {
            center: { lat: 48.898442, lng: 31.929940},
            zoom: 6,
            scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        // markers
        var marker1 = new google.maps.LatLng(50.449936, 30.533377);
        var marker2 = new google.maps.LatLng(51.500378, 31.297854);
        var marker3 = new google.maps.LatLng(49.992040, 36.236208);
        var marker4 = new google.maps.LatLng(49.585093, 34.554947);
        var marker5 = new google.maps.LatLng(49.434208, 32.076301);
        var marker6 = new google.maps.LatLng(48.503718, 32.269945);
        var marker7 = new google.maps.LatLng(50.907518, 34.818304);
        var marker8 = new google.maps.LatLng(48.575517, 39.326342);
        var marker9 = new google.maps.LatLng(48.008638, 37.808171);
        var marker10 = new google.maps.LatLng(48.454749, 35.049652);
        var marker11 = new google.maps.LatLng(47.831637, 35.148529);
        var marker12= new google.maps.LatLng(46.624188, 32.619411);
        var marker13 = new google.maps.LatLng(46.962062, 32.006046);
        var marker14 = new google.maps.LatLng(46.478735, 30.722914);
        var marker15 = new google.maps.LatLng(50.252344, 28.655763);
        var marker16 = new google.maps.LatLng(49.230071, 28.476674);
        var marker17 = new google.maps.LatLng(48.283618, 25.934206);
        var marker18 = new google.maps.LatLng(49.420755, 27.001663);
        var marker19 = new google.maps.LatLng(48.918085, 24.726963);
        var marker20 = new google.maps.LatLng(49.540471, 25.603803);
        var marker21 = new google.maps.LatLng(49.826653, 24.002967);
        var marker22 = new google.maps.LatLng(48.611100, 22.292231);

        var locations = [marker1, marker2, marker3, marker4,
            marker5, marker6, marker7, marker8, marker9, marker10,
            marker11, marker12, marker13, marker14, marker15,
            marker16, marker17, marker18, marker19, marker20, marker21, marker22];

        var markers = [];

        for(var i=0; i < locations.length; i++) {
            var marker = new google.maps.Marker({
                position: locations[i],
                map: map,
                icon: '../img/marker.png'
            });
        };
    }

    if ($('#map-canvas').length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    };



    // lists

    var letters = "abcdefghijklmnoprstuvwxyz";
    $.each($('ol'), function() {
        var item = $(this).find('li');
        item.each(function(i){
            $(this).attr("mark", letters[i] + ")");
        });
    });

    // horizontal mousewheel scroll event
    //  $('.js-tvguide').mousewheel(function(event, delta) {

    //    this.scrollLeft -= (delta * 25);

    //    event.preventDefault();

    // });

    var tapeCounters = new Array();
    $.each($('.btn_more_tape'), function () {
        if ($(this).data('url')) {
            $(this).click(function () {
                var _cont = $(this).parent();
                if (typeof(tapeCounters[$(this).data('url')]) == 'undefined') {
                    tapeCounters[$(this).data('url')] = 1;
                } else {
                    tapeCounters[$(this).data('url')]++;
                }
                $.get($(this).data('url') + '?offsetPage=' + tapeCounters[$(this).data('url')], function (data) {
                    if (data != '' && data != 'error') {
                        $(data).insertBefore(_cont);
                        if (data.indexOf('HIDE_BTN') != -1) {
                            _cont.hide();
                        }
                    }
                });
            });
        }
    });

    $.each($('.rate_btn'), function () {
        $(this).click(function () {
            if ($(this).data('url') && !$(this).attr('rated')) {
                $.post($(this).data('url'),
                    {
                        'model': $(this).data('model'),
                        'itemId': $(this).data('itemId'),
                        'likeType': $(this).data('likeType'),
                        '_csrf': $('meta[name="csrf-token"]').attr("content")
                    },
                    function (data) {
                        if (data != '' && data.result && typeof(data.counters) != 'undefined') {
                            for (var i in data.counters) {
                                $('.rate_btn[data-like-type="' + i + '"]').attr('rated', true).find('span:first').html(data.counters[i]);
                            }
                        }
                    }
                );
            }
        });
    });

    $('#subscribe_form').submit(function(e){
        e.preventDefault();
        var _e = e;
        $.post('/tv/subscribe/index', {
            'Subscribe[email]': $('#subscribe-email-fld').val(),
            '_csrf': $('meta[name="csrf-token"]').attr("content")
        }, function(data){
            if(data == 'OK') {
                ga('send','event','button','click',$(_e.target).attr('ga_event'));

                alert('На указанный E-mail отправлено письмо с подтверждением');
                $('div.overlay[data-popup="subscribe-popup"]').fadeOut();
            } else {
                alert(data);
            }
        });
    });

    $('#contact_form').submit(function(e){
        e.preventDefault();

        $.post('/site/contact', {
            'Contact[email]': $('#contact-email-fld').val(),
            'Contact[text]': $('#contact-text-fld').val(),
            'Contact[phone]': $('#contact-phone-fld').val(),
            '_csrf': $('meta[name="csrf-token"]').attr("content")
        }, function(data){
            if(data == 'OK') {
                ga('send','event','button','click','svasatsa_s_nami');

                alert('Благодарим Вас за обращение. Мы ответим Вам как можно скорее.');
                $('div.overlay[data-popup="contact-popup"]').fadeOut();
            } else {
                alert(data);
            }
        });
    });


    $('.trailer-play-btn').click(function(){
        $('.trailer__play_btn').hide();
        $('.trailer__container').html($('.trailer__play_code').html());
    });

    function ellipse(){
        var p=$('.schedule__descr p');
        var divh=$('.schedule__descr').height();
        while (p.outerHeight()>divh) {
            p.text(function (index, text) {
                return text.replace(/[^A-Za-zА-Яа-яё0-9_]*\s(\S)*$/, '...');
            });
        }
    }
    if ($('.schedule').length) {
        ellipse();
    };
    $(window).resize(function(){
        if ($('.schedule').length) {
            ellipse();
        };
    });


});

