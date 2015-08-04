(function() {
	
	var width = $('.center').outerWidth();

	// dropdown

	$('.js-dropdown').css('width', width);

	$('.js-drop').hover(
		function() {
			$(this).find('.js-drop-link').addClass('is-open');
			$(this).find('.js-dropdown').slideDown('fast');
		},
		function() {
			$(this).find('.js-drop-link').removeClass('is-open');
			$(this).find('.js-dropdown').slideUp('fast');
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

})();