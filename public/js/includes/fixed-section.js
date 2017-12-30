(function ($) {
    'use strict';

    $(document).ready(function () {

        var $fixedSection = $('.fixedSection');
        var $fixedSectionContent = $fixedSection.find('.fixedSectionContent');
        var $fixedSectionPlaceholder = $fixedSection.find('.fixedSectionPlaceholder');

        function makeFixedSection() {

            if(window.innerWidth > App.MEDIUM_SCREEN_WIDTH) {
                $fixedSectionContent.css({
                    'position': 'fixed',
                    'top': 0,
                    'left': 0,
                    'right': 0
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

        if($fixedSection && $fixedSectionContent && $fixedSectionPlaceholder) {

            makeFixedSection();

            $(window).on('resize', debounce(makeFixedSection, 150));
        }
    });

})(jQuery);