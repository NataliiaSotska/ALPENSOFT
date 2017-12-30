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

(function ($) {
    'use strict';

    var $phoneNumber = $('#phoneNumber');

    $(document).ready(function () {

        if($phoneNumber) {
            $phoneNumber.inputmask({"mask": "+3 (80) 9999-99999"});
        }
    });

})(jQuery);
// (function ($) {
//     'use strict';
//
//     var $popup         = $('.popup');
//     var $popupBackdrop = $('.popup-backdrop');
//
//     $(document).ready(function () {
//         $popupBackdrop.on('click', function () {
//             $popup.toggleClass('hide');
//             $popupBackdrop.toggleClass('hide');
//         });
//     });
//
//     $(document).on('click', '[data-popup-id]', function () {
//         var $popupId = $(this).attr('data-popup-id');
//
//         $('#' + $popupId).toggleClass('hide');
//         $popupBackdrop.toggleClass('hide');
//     });
//
// })(jQuery);
