(function ($) {
    'use strict';

    var $html = $('html');
    var $headerMenuMobileButton = $('.hamburgerBtn');
    var $headerMenu = $('.nav-wrap');

    $(window).on('load resize', function () {

        if ($headerMenuMobileButton.hasClass('is-active') && $html.hasClass('overflow-hidden')){
            $headerMenuMobileButton.removeClass('is-active');
            $html.removeClass('overflow-hidden');
            $headerMenu.slideUp('fast');
        }
    });

    $headerMenuMobileButton.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $html.toggleClass('overflow-hidden');
        $headerMenu.slideToggle('fast');
    });
})(jQuery);
