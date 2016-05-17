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

});

