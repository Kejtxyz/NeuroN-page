(function ($) {
    var hidden = false;

    var defaults = {
        selector: null,
        element: null,
        primaryMenuSelector: null,
        closeIconSelector: null,
        searchButtonSelector: null,
        hideableElementsSelector: null,
        hideAnimation: 'zoomOut',
        showAnimation: 'zoomIn',
        searchInputSelector: 'input[name="search"]',
        delayBetweenShowPrimaryMenuAnimationStart: 250,
        delayBetweenSearchBarAnimationStart: 250
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

    var hideCloseIcon = function() {
        $(settings.closeIconSelector).css('display','none');
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
        $searchButton.removeClass("animated fadeOut");
        $searchButton.addClass("animated fadeIn delay-1s");
    };

    var showCloseIcon = function() {
        var $closeIcon = $(settings.closeIconSelector);

        $closeIcon.css('display','block');
        $closeIcon.addClass("animated fadeIn");
    };

    var hidePrimaryMenu = function() {
        var $hideableElements = $(settings.primaryMenuSelector).find(settings.hideableElementsSelector);
        $hideableElements.addClass("animated " + settings.hideAnimation);

        hidden = true;
    };

    var showPrimaryMenu = function() {
        var $elements = $(settings.primaryMenuSelector).find(settings.hideableElementsSelector);
        $elements.removeClass("animated " + settings.hideAnimation);
        $elements.addClass("animated " + settings.showAnimation);

        hidden = false;
    };

    var showSearchbar = function() {
        hideSearchButton();

        var $searchInput    = $(settings.searchInputSelector);
        $searchInput.removeClass("d-none");
        $searchInput.addClass("animated slow stretch");

        showCloseIcon();
    };

    var hideSearchbar = function() {
        var $searchInput    = $(settings.searchInputSelector);
        var isInvisible     = $searchInput.hasClass("d-none");
        if(!isInvisible) {
            $searchInput.removeClass("stretch");
            $searchInput.addClass("squash");
            return setTimeout(function() {
                $searchInput.addClass("d-none");
            }, 1000);
        }

        return null;
    };

    var onCloseIconClick = function() {
        if(hideSearchbar() !== null) {
            showSearchButton();
            hideCloseIcon();
            showPrimaryMenu();
        }
    };

    var onAnyClick = function(e) {
        var currentElement = $(e.target)[0];

        var keepOpenList = [
            $(settings.closeIconSelector)[0],
            settings.element[0]
        ];

        for(var i=0; i < keepOpenList; i++) {
            if(currentElement === keepOpenList[i]) {
                return;
            }
        }

        onCloseIconClick();
    };

    $.fn.magicSearch = function(options) {
        settings = $.extend(defaults, options);
        validate(settings);

        settings.element = (settings.selector !== null) ? $(settings.selector) : $(this);

        if(settings.selector !== null) {
            $(document).on('click', settings.selector, onSearchClick);
        } else {
            $(this).on('click', onSearchClick);
        }

        if(typeof settings.closeIconSelector !== "undefined" && settings.closeIconSelector !== null) {
            $(document).on('click', settings.closeIconSelector, onCloseIconClick);
        }

        $(document).on('click', onAnyClick);
    };
}(jQuery));