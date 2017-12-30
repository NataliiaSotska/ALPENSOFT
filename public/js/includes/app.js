'use strict';

const App = {
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

        setTimeout(function() { shouldExec = true }, ms);
    }
};