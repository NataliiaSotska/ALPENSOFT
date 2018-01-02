(function ($) {
    'use strict';

    var App = {
        SMALL_SCREEN_WIDTH: 540,
        MEDIUM_SCREEN_WIDTH: 768,
        LARGE_SCREEN_WIDTH: 1024,
        XLARGE_SCREEN_WIDTH: 1200
    };

    window.debounce = function(func, ms) {

        var shouldExec = true;

        return function() {
            if (!shouldExec) {
                return;
            }

            func.apply(this, arguments);

            shouldExec = false;

            setTimeout(function() { shouldExec = true; }, ms);
        };
    };

    $(document).ready(function () {

        // ----- Fixed section -----

        var $fixedSection = $('.fixedSection');
        var $fixedSectionContent = $fixedSection.find('.fixedSectionContent');
        var $fixedSectionPlaceholder = $fixedSection.find('.fixedSectionPlaceholder');

        function makeFixedSection() {

            if (window.innerWidth > App.MEDIUM_SCREEN_WIDTH) {
                $fixedSectionContent.css({
                    'position': 'fixed',
                    'top': 0,
                    'left': 0,
                    'right': 0,
                    'z-index': 0
                });

                $fixedSectionPlaceholder.css({
                    'height': $fixedSectionContent.outerHeight(true)
                });
            } else {
                $fixedSectionContent.css({
                    'position': 'relative'
                });

                $fixedSectionPlaceholder.css({
                    'height': 'auto'
                });
            }
        }

        if ($fixedSection && $fixedSectionContent && $fixedSectionPlaceholder) {

            makeFixedSection();

            $(window).on('resize', debounce(makeFixedSection, 200));
        }

        // ----- Header -----

        var $html = $('html');
        var $headerMenuMobileButton = $('.hamburgerBtn');
        var $headerMenu = $('.nav-wrap');

        $(window).on('load resize', function () {

            if ($headerMenuMobileButton.hasClass('is-active') && $html.hasClass('overflow-hidden')) {
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

        // ----- Libs initialization -----

        var $phoneNumber = $('#phoneNumber');

        if ($phoneNumber) {
            $phoneNumber.inputmask({ "mask": "+3 (80) 9999-99999" });
        }

        $(function () {
            $('select').selectric();
        });

        // ----- Modal -----

        // var $popup         = $('.popup');
        // var $popupBackdrop = $('.popup-backdrop');
        //
        // $(document).ready(function () {
        //     $popupBackdrop.on('click', function () {
        //         $popup.toggleClass('hide');
        //         $popupBackdrop.toggleClass('hide');
        //     });
        // });
        //
        // $(document).on('click', '[data-popup-id]', function () {
        //     var $popupId = $(this).attr('data-popup-id');
        //
        //     $('#' + $popupId).toggleClass('hide');
        //     $popupBackdrop.toggleClass('hide');
        // });
    });

})(jQuery);
