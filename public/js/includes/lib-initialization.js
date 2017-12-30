(function ($) {
    'use strict';

    var $phoneNumber = $('#phoneNumber');

    $(document).ready(function () {

        if($phoneNumber) {
            $phoneNumber.inputmask({"mask": "+3 (80) 9999-99999"});
        }
    });

})(jQuery);