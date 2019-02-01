(function ($) {
    var getAnimationPercent = function() {
        var current = settings.$context.scrollTop();
        var max     = settings.$element.height();
        var ratio   = current /  max;
        return (ratio > 1) ? 1 : ratio;
    };

    var getAnimationStyle = function(animationPercent, steps) {
        var value = "";

        var startingHeightPercents = {
            left: 50,
            right: 70
        };

        var step = {
            left:   ((100 - startingHeightPercents.left) / steps),
            right:  ((100 - startingHeightPercents.right) / steps),
        };

        var percentageSkip = ((100 / steps) / 100);

        for(var step_ix = 1; step_ix <= steps; step_ix++) {
            var upperBound = percentageSkip * step_ix;
            var lowerBound = percentageSkip * (step_ix - 1);
            if(animationPercent > lowerBound && animationPercent <= upperBound) {

                var lDiff = step_ix * step.left;
                var rDiff = step_ix * step.right;

                var lHeight = startingHeightPercents.left + lDiff;
                var rHeight = startingHeightPercents.right + rDiff;

                value = "0 0, 100% 0, 100% " + lHeight + "%, 25% 100%, 0 " + rHeight + "%";

                return {
                    key:    '-webkit-clip-path',
                    value:  'polygon(' + value + ')'
                };
            }
        }

        return {
            key:    '-webkit-clip-path',
            value:  'polygon(' + value + ')'
        };
    };

    var onScroll = function(e) {
        var currentAnimationPercent = getAnimationPercent();
        if(currentAnimationPercent < 1) {
            var style = getAnimationStyle(currentAnimationPercent, 10);
            settings.$element.css(style.key, style.value);
        }
    };

    var defaults = {
        $context:            null,
        elementSelector:    null,
        $element:           null
    };
    var settings = defaults;


    var validate = function(config) {
        if(config.$context === null) {
            throw "$context cannot be null";
        }
        if(config.elementSelector === null) {
            throw "elementSelector cannot be null";
        }
    };

    $.fn.magicLine = function(options) {
        settings = $.extend(defaults, options);
        settings.$context = $(this);

        validate(settings);

        settings.$element = $(settings.elementSelector);

        $(this).scroll(onScroll);
    };
}(jQuery));