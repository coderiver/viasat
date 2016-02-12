head.ready(function() {

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
				slidesToShow: 5
			});
		};
	}());

	// premiers
	(function () {
		var sl = $('.js-premiers');
		if (sl.length) {
			sl.slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true
			});
		};
	}());

	// slider
	(function () {
		var sl = $('.js-slider');
		if (sl.length) {
			sl.slick({
				slidesToShow: 6,
				slidesToScroll: 6,
				dots: true
			});
		};
	}());

});