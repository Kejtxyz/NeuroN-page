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

    var validate = function(config) {

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
        $(settings.searchButtonSelector).css('display', 'none');
    };

    var showSearchButton = function() {
        $(settings.searchButtonSelector).css('display', 'block');
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

    var showResultsPanel = function() {

    };

    var showSearchbar = function() {
        var $searchInput    = $(settings.searchInputSelector);
        $searchInput.removeClass("d-none");
        $searchInput.addClass("animated stretch");

        showCloseIcon();
        hideSearchButton();
    };

    var hideSearchbar = function() {
        var $searchInput    = $(settings.searchInputSelector);
        var isInvisible     = $searchInput.hasClass("d-none");
        if(!isInvisible) {
            $searchInput.removeClass("stretch");
            $searchInput.addClass("squash");
            setTimeout(function() {
                $searchInput.addClass("d-none");
            }, 1000);
        }
    };

    var onCloseIconClick = function() {
        hideSearchbar();
        showSearchButton();
        hideCloseIcon();
        showPrimaryMenu();
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
    };
}(jQuery));