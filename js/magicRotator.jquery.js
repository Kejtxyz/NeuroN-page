(function ($) {
    var Rotator = function($element, rotationDegrees, maxRotationDegrees, rotationDurationMs, rotationDirection) {
        $element.css('transition-duration', (rotationDurationMs / 1000) + 's');
        $element.css('animation-duration', (rotationDurationMs / 1000) + 's');

        var previousScrollTop   = $(window).scrollTop();
        var animationLocked     = false;

        var lockAnimationChange = function() {
            animationLocked = true;
        };
        var unlockAnimationChange = function() {
            animationLocked = false;
        };

        var changeAnimation = function(direction) {
            if(animationLocked === false) {
                lockAnimationChange();
                var currentRotationDegrees  = getRotationDegrees($element, false);
                var nextRotationDegrees     = null;

                if(direction === 'left') {
                    nextRotationDegrees     = currentRotationDegrees - rotationDegrees;
                    if(nextRotationDegrees <= (-1 * maxRotationDegrees)) {
                        setTimeout(unlockAnimationChange, rotationDurationMs);
                        return;
                    }
                }
                if(direction === 'right') {
                    nextRotationDegrees     = currentRotationDegrees + rotationDegrees;
                    if(nextRotationDegrees >= maxRotationDegrees) {
                        setTimeout(unlockAnimationChange, rotationDurationMs);
                        return;
                    }
                }

                $element.css('transform', 'rotate(' + nextRotationDegrees + 'deg)');

                setTimeout(unlockAnimationChange, rotationDurationMs);
            }
        };

        var getScrollDownDirection = function() {
            if(rotationDirection === 'auto') {
                return ($(document).width() / 2 < $element.offset().left ? 'left' : 'right');
            }
            return rotationDirection;
        };

        var getScrollUpDirection = function() {
            return (getScrollDownDirection() === 'left' ? 'right' : 'left');
        };

        var onScrollDown = function(e) {
            changeAnimation(getScrollDownDirection());
        };

        var onScrollUp = function(e) {
            changeAnimation(getScrollUpDirection());
        };

        var onScroll = function(e) {
            var currentScrollTop = $(this).scrollTop();

            if (previousScrollTop > currentScrollTop) {
                onScrollUp(e);
            } else {
                onScrollDown(e);
            }
            previousScrollTop = currentScrollTop;
        };

        /**
         * Bit modified version of
         * https://stackoverflow.com/a/11840120/2010246
         *
         * @param obj
         * @param absolute
         * @returns {number}
         */
        function getRotationDegrees(obj, absolute) {
            if(typeof absolute === "undefined") {
                absolute = true;
            }
            var angle = 0;

            var matrix = obj.css("-webkit-transform") ||
                obj.css("-moz-transform")    ||
                obj.css("-ms-transform")     ||
                obj.css("-o-transform")      ||
                obj.css("transform");
            if(matrix !== 'none') {
                var values = matrix.split('(')[1].split(')')[0].split(',');
                var a = values[0];
                var b = values[1];
                angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
            }
            if(absolute) {
                return (angle < 0) ? angle + 360 : angle;
            }
            return angle;
        }

        return {
            onScroll: onScroll
        }
    };

    var defaults = {
        $element:           null,
        rotationDegrees:    1,
        rotationDurationMs: 1,
        maxRotationDegrees: 10,
        direction:          'auto'
    };

    var validate = function(config) {
        if(config.direction !== 'auto' && config.direction !== 'left' && config.direction !== 'right') {
            throw 'A direction must be either auto, left, or right';
        }
        if(isNaN(config.rotationDegrees)) {
            throw 'A rotationDegrees must be numeric';
        }
        if(isNaN(config.rotationDurationMs)) {
            throw 'A rotationDurationMs must be numeric';
        }
        if(isNaN(config.maxRotationDegrees)) {
            throw 'A maxRotationDegrees must be numeric';
        }
    };

    var settings = defaults;

    $.fn.magicRotator = function(options) {
        if(typeof options === "undefined") {
            options = {};
        }

        settings = $.extend(defaults, options);
        validate(settings);

        settings.$element    = $(this);

        var rotator = new Rotator(
            settings.$element,
            settings.rotationDegrees,
            settings.maxRotationDegrees,
            settings.rotationDurationMs,
            settings.direction
        );
        $(window).scroll(rotator.onScroll);
    };
}(jQuery));