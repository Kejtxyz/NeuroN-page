var documentComputedStyle   = window.getComputedStyle(window.document.documentElement);
var documentWidth           = documentComputedStyle.width.replace('px', '');
var previousScrollTop       = document.documentElement.scrollTop;

var elements = [
    {
        element: document.querySelector('#section-container-img-1 > img'),
        angle: 0
    },
    {
        element: document.querySelector('#section-container-img-2 > img'),
        angle: 0
    },
    {
        element: document.querySelector('#section-container-img-3 > img'),
        angle: 0
    }
];

if(documentWidth >= 1200) {
    var skip = 0.25;

    var limitFactor = 60;
    var limitRight  = 30;//(skip * (1 * limitFactor));
    var limitLeft   = -30;//(skip * (-1 * limitFactor));

    var onScrollDown = function(e) {
        var currentElement = elements[0];
        if(currentElement.angle + skip <= limitRight) {
            currentElement.angle += skip;
            currentElement.element.style.transform = 'rotate(' + currentElement.angle + 'deg)'
        }
    };

    var onScrollUp = function(e) {
        var currentElement = elements[0];
        if(currentElement.angle - skip >= limitLeft) {
            currentElement.angle -= skip;
            currentElement.element.style.transform = 'rotate(' + currentElement.angle + 'deg)'
        }
    };

    var onScroll = function(e) {
        console.log('triggered');
        var currentScrollTop = document.documentElement.scrollTop;

        if (previousScrollTop > currentScrollTop) {
            onScrollUp(e);
        } else {
            onScrollDown(e);
        }
        previousScrollTop = currentScrollTop;
    };

    document.addEventListener('scroll', onScroll);
}


