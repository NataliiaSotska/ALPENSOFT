(function ($) {
    'use strict';

    var App = {
        SMALL_SCREEN_WIDTH: 540,
        MEDIUM_SCREEN_WIDTH: 768,
        LARGE_SCREEN_WIDTH: 1024,
        XLARGE_SCREEN_WIDTH: 1200
    };

    window.debounce = function (func, ms) {

        var shouldExec = true;

        return function () {
            if (!shouldExec) {
                return;
            }

            func.apply(this, arguments);

            shouldExec = false;

            setTimeout(function () {
                shouldExec = true;
            }, ms);
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

        // ----- Header navigation -----

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

        // ----- Anchor scroll animation -----

        $('a[href^="#"]').on("click", function (e) {
            var anchor = $(this);
            var offsetTop = $(anchor.attr("href")).offset().top - 56;

            e.preventDefault();

            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 1000);

            if (window.innerWidth < App.LARGE_SCREEN_WIDTH) {
                $headerMenuMobileButton.removeClass('is-active');
                $html.removeClass('overflow-hidden');
                $headerMenu.slideUp('fast');
            }
        });

        // ----- Libs initialization -----

        var $phoneNumber = $('#phoneNumber');
        var select = $('select');

        if ($phoneNumber) {
            $phoneNumber.inputmask({ "mask": "+3 (80) 9999-99999" });
        }

        select.selectric({
            disableOnMobile: false,
            nativeOnMobile: false
        });

        // var $selectricWrapper = $('.selectric-wrapper');
        // var $selectricLabel = $('.label');
        //
        // select.on('selectric-open selectric-select', function() {
        //     $selectricWrapper.next().addClass('active');
        // });
        //
        // select.on('selectric-close', function() {
        //     if ($selectricLabel.text() !== '') {
        //         $selectricWrapper.next().addClass('active');
        //     } else {
        //         $selectricWrapper.next().removeClass('active');
        //     }
        // });

        // ----- Check inputs -----

        $('input').change(function () {
            var $input = $(this);

            if ($input.val() !== '') {
                $input.next().addClass('active');
            } else {
                $input.next().removeClass('active');
            }
        });

        // ----- Modal -----

        var $modal = $('#ctaForm');
        var $modalBackdrop = $('.modal-backdrop');
        var $openCtaButton = $('.openConversionForm');

        $(document).ready(function () {

            $openCtaButton.on('click', function () {
                $modal.toggleClass('hide');
                $html.toggleClass('overflow-hidden');
            });

            $modalBackdrop.on('click', function () {
                $modal.toggleClass('hide');
                $html.toggleClass('overflow-hidden');
            });
        });
    });

})(jQuery);
