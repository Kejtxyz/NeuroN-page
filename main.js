$(document).magicArrow({
    primarySelector:    '#scroll-top',
    secondarySelector:  '#scroll-down',
    animationDuration:  500,
    animationType:      'swing',
    animatePrimary:     true,
    animateSecondary:   true
});

$('#magicSearch').magicSearch({
    primaryMenuSelector:        '#right-itemlist',
    hideableElementsSelector:   '.hide-when-search',
    closeIconSelector:          '.input-close-icon',
    searchButtonSelector:       '#magicSearchWrapper'   // Used to hide search button
});

$(window).magicNav({
    navSelector: '#nav2'
});

$(document).magicLine({
    elementSelector:    '#main-header'
});

var rotatorConfig = {
    rotationDegrees:        1,
    rotationDurationMs:     150,
    minimalWindowWidthPx:   540
};

$('#section-container-img-1 > img').magicRotator(rotatorConfig);
$('#section-container-img-2 > img').magicRotator(rotatorConfig);
$('#section-container-img-3 > img').magicRotator(rotatorConfig);