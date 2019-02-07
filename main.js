$(document).magicArrow({
    primarySelector:    '#scroll-top',
    secondarySelector:  '#scroll-down',
    animationDuration:  500,
    animationType:      'swing',
    animatePrimary:     true,
    animateSecondary:   true
});

$('#magicSearch').magicSearch({
    primaryMenuSelector:        '#collapsibleNavbar',
    hideableElementsSelector:   '.hide-when-search',
    searchInputWrapperSelector: '#searchInputListElement',
    searchButtonSelector:       '#magicSearchWrapper'   // Used to hide search button
});

$(window).magicNav({
    navSelector: '#nav2'
});

$(document).magicLine({
    elementSelector:    '#main-header'
});

var rotatorConfig = {
    rotationDegrees: 1,
    rotationDurationMs: 300
};

$('#section-container-img-1 > img').magicRotator(rotatorConfig);
$('#section-container-img-2 > img').magicRotator(rotatorConfig);
$('#section-container-img-3 > img').magicRotator(rotatorConfig);