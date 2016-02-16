head.ready(function() {

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
					breakpoint: 1023,
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

	// premiers
	(function () {
		var sl = $('.js-premiers');
		if (sl.length) {
			sl.slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
				responsive: [{
					breakpoint: 1023,
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

	// slider
	(function () {
		var sl = $('.js-slider');
		if (sl.length) {
			sl.slick({
				slidesToShow: 6,
				slidesToScroll: 6,
				dots: true,
				responsive: [{
					breakpoint: 1023,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}]
			});
		};
	}());

});