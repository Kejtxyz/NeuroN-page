(function($) {
    const SCROLL_DIRECTION_DOWN     = 'down';
    const SCROLL_DIRECTION_UP       = 'up';

    var previousScrollDirection     = null;

    var previousScrollTop = $(window).scrollTop();

    var onScrollDown = function(e) {
        if ($(settings.nav).offset().top > 110) {
            $(settings.nav).removeClass('animated slideInDown');
            $(settings.nav).addClass('animated slideOutUp');
        }
    };

    var onScrollUp = function(e) {
        $(settings.nav).removeClass('animated slideOutUp');
        $(settings.nav).addClass('animated slideInDown');
    };

    var onScroll = function(e) {
        var currentScrollTop = $(this).scrollTop();
        var scrollDirection = (previousScrollTop > currentScrollTop) ? SCROLL_DIRECTION_UP : SCROLL_DIRECTION_DOWN;

        if(scrollDirection === previousScrollDirection) {
            return;
        }

        if ($(settings.nav).width() > 540) {
            if (currentScrollTop <= 75) {
                $(settings.nav).css('animation-duration', '0s');
            } else {
                $(settings.nav).css('animation-duration', '1s');
            }

        if (scrollDirection === SCROLL_DIRECTION_UP) {
            onScrollUp(e);
        }
        if (scrollDirection === SCROLL_DIRECTION_DOWN){
            onScrollDown(e);
        }

        previousScrollTop       = currentScrollTop;
        previousScrollDirection = scrollDirection;
    };

    var defaults = {
        navSelector: null,
        nav: null
    };

    var validate = function(config) {
        if (config.navSelector === null) {
            throw 'navSelector cannot be null';
        }
    };

    var settings = defaults;

    $.fn.magicNav = function(options) {
        settings = $.extend(defaults, options);
        validate(settings);

        settings.nav = $(settings.navSelector);

        $(this).scroll(onScroll);
    };
})(jQuery);
