(function ($) {
    var onPrimarySelectorClick = function(e) {
        if(settings.animatePrimary) {
            var $target = $(e.target);
            $target.css('pointer-events', 'none');
            $('html, body').stop().animate(
                {
                    scrollTop: 0
                },
                settings.animationDuration,
                settings.animationType,
                function() {
                    $target.css('pointer-events', 'auto');
                }
            );
        } else {
            $(window).scrollTop(0);
        }
    };

    var onSecondarySelectorClick = function(e) {
        var currentPosition = $(window).scrollTop();
        var visibleAreaHeight = window.innerHeight;

        if(settings.animateSecondary) {
            var $target = $(e.target);
            $target.css('pointer-events', 'none');
            $('html, body').stop().animate(
                {
                    scrollTop: currentPosition + visibleAreaHeight
                },
                settings.animationDuration,
                settings.animationType,
                function() {
                    $target.css('pointer-events', 'auto');
                }
            );
        } else {
            $(window).scrollTop(currentPosition + visibleAreaHeight);
        }
    };

    var onScroll = function(e) {
        var currentOffset = $(this).scrollTop();
        if(currentOffset <= settings.hideOffsetTop) {
            $(settings.primarySelector).css('visibility', 'hidden');
        } else {
            $(settings.primarySelector).css('visibility', 'visible');
        }

        if($(window).scrollTop() + $(window).height() > $(document).height() - settings.hideOffsetBottom) {
            $(settings.secondarySelector).css('visibility', 'hidden');
        } else {
            $(settings.secondarySelector).css('visibility', 'visible');
        }
    };

    var defaults = {
        primarySelector:    null,
        secondarySelector:  null,
        primaryCallback:    onPrimarySelectorClick,
        secondaryCallback:  onSecondarySelectorClick,
        animationDuration:  500,
        animationType:      'swing',        // swing || linear, more with jquery-ui
        animatePrimary:     false,
        animateSecondary:   false,
        hideOffsetTop:      50,
        hideOffsetBottom:   50
    };

    var validate = function(config) {
        if(config.primarySelector === null) {
            throw "Primary selector cannot be null";
        }
        if(config.secondarySelector === null) {
            throw "Secondary selector cannot be null";
        }
        if(config.primaryCallback === null) {
            throw "Primary callback cannot be null";
        }
        if(config.secondaryCallback === null) {
            throw "Secondary callback cannot be null";
        }
    };

    var settings = defaults;

    $.fn.magicArrow = function(options) {
        settings = $.extend(defaults, options);
        validate(settings);

        $(this).on('click', settings.primarySelector, settings.primaryCallback);
        $(this).on('click', settings.secondarySelector, settings.secondaryCallback);
        $(document).on('scroll', onScroll);
    };
}(jQuery));