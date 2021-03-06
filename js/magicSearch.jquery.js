(function ($) {
    var useDeviceJs = (typeof DEVICE !== "undefined");
    var disableOnSmallAndMediumDevices = true;

    var hidden = false;

    var defaults = {
        selector: null,
        element: null,
        primaryMenuSelector: null,
        searchButtonSelector: null,
        hideableElementsSelector: null,
        searchInputWrapperSelector: null,
        additionalNoHideIdSelectors: [],
        hideAnimation: 'zoomOut',
        showAnimation: 'zoomIn',
        searchInputSelector: 'input[name="search"]',
        delayBetweenShowPrimaryMenuAnimationStart: 250,
        delayBetweenSearchBarAnimationStart: 400
    };

    var settings = defaults;

    var onSearchClick = function(e) {
        if(hidden) {
            hideSearchbar();
            setTimeout(showPrimaryMenu, settings.delayBetweenShowPrimaryMenuAnimationStart);
        } else {
            hidePrimaryMenu();
            setTimeout(showSearchbar, settings.delayBetweenSearchBarAnimationStart);
        }
    };

    var hideSearchButton = function() {
        var $searchButton = $(settings.searchButtonSelector);
        $searchButton.removeClass("delay-1s");
        $searchButton.addClass("animated faster fadeOut");
        $searchButton.css("pointer-events", "none");
    };

    var showSearchButton = function() {
        var $searchButton = $(settings.searchButtonSelector);
        $searchButton.css("pointer-events", "auto");
        $searchButton.removeClass("animated fadeOut d-none");
        //$searchButton.addClass("animated fadeIn");
    };

    var hidePrimaryMenu = function() {
        var windowWidth = $(window).width();

        var $hideableElements = $(settings.primaryMenuSelector).find(settings.hideableElementsSelector);
        $hideableElements.addClass("animated " + settings.hideAnimation);

        $($hideableElements[0]).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $hideableElements.each(function() {
                if(windowWidth > 360) {
                    $(this).removeClass('d-sm-block');
                }
                $(this).addClass('d-none');
            });
            $(settings.searchInputWrapperSelector).css('display', 'block');
            $($hideableElements[0]).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){});

            hidden = true;
        });
    };

    var showPrimaryMenu = function() {
        var $elements = $(settings.primaryMenuSelector).find(settings.hideableElementsSelector);
        $elements.removeClass("d-none " + settings.hideAnimation);

        hidden = false;
    };

    var showSearchbar = function() {
        hideSearchButton();

        var $searchInputWrapper     = $(settings.searchInputWrapperSelector);
        var $searchInput            = $(settings.searchInputSelector);

        $searchInputWrapper.removeClass("d-none");
        $searchInput.addClass("animated fast stretch");
        setTimeout(function() {
            $searchInput.removeClass("d-none");
            $(settings.searchInputSelector).focus();
        }, 100);
    };

    var isSearchBarHidden = function() {
        return !$(settings.searchInputSelector).is(":visible");
    };

    var hideSearchbar = function(callback) {
        var $searchInputWrapper     = $(settings.searchInputWrapperSelector);
        var $searchInput            = $(settings.searchInputSelector);
        var isInvisible             = $searchInput.hasClass("d-none");
        if(!isInvisible) {
            $searchInput.removeClass("stretch");
            $searchInput.addClass("squash");
            return setTimeout(function() {
                $searchInputWrapper.addClass("d-none");
                $searchInput.addClass("d-none");
                callback();
            }, 1000);
        }

        return null;
    };

    var onAnyClick = function(e) {
        if(isSearchBarHidden()) {
            return;
        }

        var $currentElement = $(e.target);

        if($currentElement.parent()[0] === $(settings.searchInputWrapperSelector)[0]) {
            return;
        }

        var clickedId = $currentElement.attr('id') || $currentElement.parent().attr('id');
        clickedId = '#' + clickedId;

        for(var i=0; i<settings.additionalNoHideIdSelectors.length; i++) {
            if(clickedId === settings.additionalNoHideIdSelectors[i]) {
                return;
            }
        }

        hideSearchbar(function() {
            showSearchButton();
            showPrimaryMenu();
        });
    };

    $.fn.magicSearch = function(options) {
        if(useDeviceJs && disableOnSmallAndMediumDevices && DEVICE.SIZE <= DEVICE.DEVICE_SIZE_MEDIUM) {
            console.log('Aborting usage of magic search');
            return;
        }

        settings = $.extend(defaults, options);

        settings.element = (settings.selector !== null) ? $(settings.selector) : $(this);

        if(settings.selector !== null) {
            $(document).on('click', settings.selector, onSearchClick);
        } else {
            $(this).on('click', onSearchClick);
        }

        $(document).on('click', onAnyClick);
    };
}(jQuery));