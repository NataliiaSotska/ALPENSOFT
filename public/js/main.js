!function(e){"use strict";var t={SMALL_SCREEN_WIDTH:540,MEDIUM_SCREEN_WIDTH:768,LARGE_SCREEN_WIDTH:1024,XLARGE_SCREEN_WIDTH:1200};window.debounce=function(e,t){var i=!0;return function(){i&&(e.apply(this,arguments),i=!1,setTimeout(function(){i=!0},t))}},e(document).ready(function(){function i(){window.innerWidth>t.MEDIUM_SCREEN_WIDTH?(o.css({position:"fixed",top:0,left:0,right:0,"z-index":0}),s.css({height:o.outerHeight(!0)})):(o.css({position:"relative"}),s.css({height:"auto"}))}var n=e(".fixedSection"),o=n.find(".fixedSectionContent"),s=n.find(".fixedSectionPlaceholder");n&&o&&s&&(i(),e(window).on("resize",debounce(i,200)));var a=e("html"),l=e(".hamburgerBtn"),c=e(".nav-wrap");e(window).on("load resize",function(){l.hasClass("is-active")&&a.hasClass("overflow-hidden")&&(l.removeClass("is-active"),a.removeClass("overflow-hidden"),c.slideUp("fast"))}),l.on("click",function(t){t.preventDefault(),e(this).toggleClass("is-active"),a.toggleClass("overflow-hidden"),c.slideToggle("fast")}),e('a[href^="#"]').on("click",function(i){var n=e(this),o=e(n.attr("href")).offset().top-56;i.preventDefault(),e("html, body").stop().animate({scrollTop:o},1e3),window.innerWidth<t.LARGE_SCREEN_WIDTH&&(l.removeClass("is-active"),a.removeClass("overflow-hidden"),c.slideUp("fast"))});var r=e("#phoneNumber"),d=e("select");r&&r.inputmask({mask:"+3 (80) 9999-99999"}),d.selectric({disableOnMobile:!1,nativeOnMobile:!1});var f=e(".selectric-wrapper"),v=e(".label");d.on("selectric-open selectric-select",function(){f.next().addClass("active")}),d.on("selectric-close",function(){""!==v.text()?f.next().addClass("active"):f.next().removeClass("active")}),e("input").change(function(){var t=e(this);""!==t.val()?t.next().addClass("active"):t.next().removeClass("active")});var u=e("#ctaForm"),h=e(".modal-backdrop"),C=e(".openConversionForm");e(document).ready(function(){C.on("click",function(){u.toggleClass("hide"),a.toggleClass("overflow-hidden")}),h.on("click",function(){u.toggleClass("hide"),a.toggleClass("overflow-hidden")})})})}(jQuery);