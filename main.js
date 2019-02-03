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

$('#section-container-img-1 > img').magicRotator();
$('#section-container-img-2 > img').magicRotator();
$('#section-container-img-3 > img').magicRotator();