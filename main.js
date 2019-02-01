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
    hideableElementsSelector:   '.hide-when-search'
});

$(window).magicNav({
    navSelector: '#nav2'
});

$(document).magicLine({
    elementSelector:    '#main-header',
});

function onScroll(e) {
    var scrollTop       = $(this).scrollTop();
    var clientHeight    = document.documentElement.clientHeight;
    var totalHeight     = scrollTop + clientHeight;
    var breakpoints     = [ 1000, 1300, 1600 ];

    var rotate = {
        seconds: 3,
        right: 25,
        left: 15
    };

    for(var image_ix = 1; image_ix <= breakpoints.length; image_ix++) {
        var isEven              = (image_ix % 2 === 0);
        var isImageOnLeftSide   = isEven;

        var multiplier = (isImageOnLeftSide ? -1 : 1);

        if (totalHeight > breakpoints[image_ix-1]) {
            $('#section-container-img-' + image_ix).css("transform","rotate(" + (rotate.right * multiplier) + "deg)");
            $('#section-container-img-' + image_ix).css("transition-duration", rotate.seconds + "s");
        }
        else  {
            $('#section-container-img-' + image_ix).css("transform","rotate(" + (rotate.left * multiplier) + "deg)");
            $('#section-container-img-' + image_ix).css("transition-duration",  rotate.seconds + "s");
        }
    }
}

$(window).scroll(onScroll);