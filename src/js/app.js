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

});