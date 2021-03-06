$(document).magicArrow({
    primarySelector:    '#scroll-top',
    secondarySelector:  '#scroll-down',
    animationDuration:  500,
    animationType:      'swing',
    animatePrimary:     true,
    animateSecondary:   true
});

$('#magicSearch').magicSearch({
    primaryMenuSelector:                    '#collapsibleNavbar',
    hideableElementsSelector:               '.hide-when-search',
    searchInputWrapperSelector:             '#searchInputListElement',
    searchButtonSelector:                   '#magicSearchWrapper',   // Used to hide search button
    additionalNoHideIdSelectors:         [
        '#left-toggler',
        '#right-toggler',
        '#magic-search'
    ]
});

$(window).magicNav({
    navSelector: '#nav2'
});

$(document).ready(function() { 

	$('a[href^="#news-section"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

});

// $('div.get-icon-text').mouseenter(function() {
//     $('i.get-icon').addClass('gradiented');
//     $('p.get-p').addClass('gradiented');
// });
// $('div.get-icon-text').mouseleave(function() {
//     $('i.get-icon').removeClass('gradiented');
//     $('p.get-p').removeClass('gradiented');
// });