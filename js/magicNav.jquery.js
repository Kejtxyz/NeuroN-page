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

        if ($(settings.nav).width() > 540) {
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
        }
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

    var onLeftTogglerClick = function(e) {
        $('#collapsibleNavbar').collapse('toggle');
    };

    var onLeftMenuShowing = function(e) {
        $('body').addClass('noscroll');

        $('#grey-layer').css('z-index', 50);
        $('#grey-layer').removeClass('animated fadeOut');
    };

    var onLeftMenuShown = function(e) {

    };

    var onLeftMenuHiding = function(e) {
        $('body').removeClass('noscroll');
    };

    var onLeftMenuHidden = function(e) {
        //$('#grey-layer').css('z-index', -1);
        if(!isRightMenuOpen()) {
            $('#grey-layer').addClass('animated fadeOut');
        }
    };

    // RIGHT MENU

    var onRightMenuShowing = function(e) {
        $('body').addClass('noscroll');

        $('#grey-layer').css('z-index', 50);
        $('#grey-layer').removeClass('animated fadeOut');
    };

    var onRightMenuShown = function(e) {

    };

    var onRightMenuHiding = function(e) {
        $('body').removeClass('noscroll');
    };

    var onRightMenuHidden = function(e) {
        //$('#grey-layer').css('z-index', -1);
        if(!isLeftMenuOpen()) {
            $('#grey-layer').addClass('animated fadeOut');
        }
    };

    var onRightTogglerClick = function(e) {
        $('#collapsibleNavbar2').collapse('toggle');
    };

    var isLeftMenuOpen = function() {
        return $('#collapsibleNavbar').hasClass('show');
    };

    var isRightMenuOpen = function() {
        return $('#collapsibleNavbar2').hasClass('show');
    };

    $.fn.magicNav = function(options) {
        settings = $.extend(defaults, options);
        validate(settings);

        settings.nav = $(settings.navSelector);

        $(this).scroll(onScroll);

        $('#left-toggler').on('click', onLeftTogglerClick);
        $('#right-toggler').on('click', onRightTogglerClick);

        $('#collapsibleNavbar').on('hide.bs.collapse', onLeftMenuHiding);
        $('#collapsibleNavbar').on('hidden.bs.collapse', onLeftMenuHidden);
        $('#collapsibleNavbar').on('show.bs.collapse', onLeftMenuShowing);
        $('#collapsibleNavbar').on('shown.bs.collapse', onLeftMenuShown);

        $('#collapsibleNavbar2').on('hide.bs.collapse', onRightMenuHiding);
        $('#collapsibleNavbar2').on('hidden.bs.collapse', onRightMenuHidden);
        $('#collapsibleNavbar2').on('show.bs.collapse', onRightMenuShowing);
        $('#collapsibleNavbar2').on('shown.bs.collapse', onRightMenuShown);

        // $('#right-toggler').on('click', onRightTogglerClick);

    };
})(jQuery);
