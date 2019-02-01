(function($) {
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

        if (currentScrollTop <= 75) {
            $(settings.nav).css('animation-duration', '0s');
        } else {
            $(settings.nav).css('animation-duration', '1s');
        }

        if (previousScrollTop > currentScrollTop) {
            onScrollUp(e);
        } else {
            onScrollDown(e);
        }
        previousScrollTop = currentScrollTop;
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
