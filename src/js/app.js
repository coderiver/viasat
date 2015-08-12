$(document).ready(function() {
	    
	var width = $('.center').outerWidth();

	// dropdown

	$('.js-dropdown').css('width', width);

	$('.js-drop').hover(
		function() {
			$(this).find('.js-drop-link').addClass('is-open');
			$(this).find('.js-dropdown').slideDown();
		},
		function() {
			$(this).find('.js-drop-link').removeClass('is-open');
			$(this).find('.js-dropdown').slideUp();
		}
	);

	// slick 

	$('.js-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3
	});

	$('.js-channels').slick({
		dots: true,
		slidesToShow: 6,
		slidesToScroll: 6
	});
	$('.js-slick').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.js-recommends').slick({
		slidesToShow: 4,
		slidesToScroll: 1
	});
	$('.js-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// select
	 $(document).click(function() {
        $(".js-select").removeClass("is-active");
	      $(".js-select-list").slideUp(100);
    });
    
  // select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
    	var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
        }
       
    });

    $("body").on("click",".js-select-list li",function() {
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
        selectList.slideUp(100);
        return false;
        
    });

    // popup init
    $('.js-popup-btn').on('click', function() {
    	var link = $(this).data('link');

    	$('[data-popup='+link+']').fadeIn();
    	$('body').addClass('no-scroll');
    });

    $('.overlay span').on('click', function() {
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



});