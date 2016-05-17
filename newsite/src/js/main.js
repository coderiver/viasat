$(document).ready(function() {

    // search

    $(document).click(function() {
        $('.js-search-form').removeClass('is-visible');
    });

    $('.js-search').on('click', function(event) {
        $('.js-search-form').addClass('is-visible');
        $(this).parent().find('input[type=text]').focus();
        event.stopPropagation();
    });
    $('.js-search-form').on('click', function(event) {
        event.stopPropagation();
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

});

