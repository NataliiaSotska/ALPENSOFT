!function(o){"use strict";var t=o(".popup"),i=o(".popup-backdrop");o(document).ready(function(){i.on("click",function(){t.toggleClass("hide"),i.toggleClass("hide")})}),o(document).on("click","[data-popup-id]",function(){var t=o(this).attr("data-popup-id");o("#"+t).toggleClass("hide"),i.toggleClass("hide")})}(jQuery);