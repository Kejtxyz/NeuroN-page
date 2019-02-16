var DEVICE = (function () {
    var DEVICE_SIZE_SMALL       = 'xs';
    var DEVICE_SIZE_MEDIUM      = 'md';
    var DEVICE_SIZE_LARGE       = 'lg';
    var DEVICE_SIZE_EXTRA_LARGE = 'xlg';

    var getDeviceSize = function() {
        var DEVICE_CHECK = (function(breakpoint) {
            var testBreakpoint = function() {

                return document.documentElement.clientWidth >= breakpoint
            };

            return testBreakpoint();
        });

        var IS_SMALL_DEVICE         = DEVICE_CHECK(576);
        var IS_MEDIUM_DEVICE        = DEVICE_CHECK(768);
        var IS_LARGE_DEVICE         = DEVICE_CHECK(992);
        var IS_EXTRA_LARGE_DEVICE   = DEVICE_CHECK(1200);

        if(IS_EXTRA_LARGE_DEVICE) {
            return DEVICE_SIZE_EXTRA_LARGE;
        }

        if(IS_LARGE_DEVICE) {
            return DEVICE_SIZE_LARGE;
        }

        if(IS_MEDIUM_DEVICE) {
            return DEVICE_SIZE_MEDIUM;
        }

        return DEVICE_SIZE_SMALL;
    };

    // Dont recalculate every time we get the screen size
    var resized     = false;
    var lastSize    = getDeviceSize();

    window.addEventListener('resize', function() {
        resized = true;
    });

    var result = {
        SIZE: getDeviceSize,
        DEVICE_SIZE_SMALL:          DEVICE_SIZE_SMALL,
        DEVICE_SIZE_MEDIUM:         DEVICE_SIZE_MEDIUM,
        DEVICE_SIZE_LARGE:          DEVICE_SIZE_LARGE,
        DEVICE_SIZE_EXTRA_LARGE:    DEVICE_SIZE_EXTRA_LARGE
    };

    Object.defineProperty(result, "SIZE", {
        get: function() {
            if(resized) {
                resized = false;
                return getDeviceSize();
            }
            return lastSize;
        }
    });

    return result;
})();