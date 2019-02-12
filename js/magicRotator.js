var documentComputedStyle   = window.getComputedStyle(window.document.documentElement);
var documentWidth           = documentComputedStyle.width.replace('px', '');
var previousScrollTop       = document.documentElement.scrollTop;

var viewport = {
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
};

function getElementData(selector) {
    var element = document.querySelector(selector);
    var height  = window.getComputedStyle(element)['height'].replace('px', '');

    return {
        element:    element,
        height:     height,
        scrollOffsets: [ (viewport.height - height), (viewport.height - height) ],
        deviations: [ -15, 15 ]
    };
}

var elements = [
    getElementData('#section-container-img-1 > img')
    /*
    {
        element: document.querySelector('#section-container-img-2 > img'),
        angle: 0
    },
    {
        element: document.querySelector('#section-container-img-3 > img'),
        angle: 0
    }
    */
];
if(documentWidth >= 1200) {
    var onScrollDown = function(e, currentScrollTop) {

        var currentElement = elements[0];
        var offset          = currentElement.element.getBoundingClientRect().top + (currentElement.height / 2);
        var scrollOffset    = currentElement.scrollOffsets[(offset > 0) ? 0 : 1];
        var deviation       = currentElement.deviations[(offset > 0) ? 0 : 1];
        var angle = (offset * deviation) / scrollOffset;


        currentElement.element.style.transform = 'rotate(' + angle + 'deg)';
    };

    var onScrollUp = function(e, currentScrollTop) {

        var currentElement = elements[0];
        var offset          = currentElement.element.getBoundingClientRect().top + (currentElement.height / 2);
        var scrollOffset    = currentElement.scrollOffsets[(offset > 0) ? 0 : 1];
        var deviation       = currentElement.deviations[(offset > 0) ? 0 : 1];
        var angle = (offset * deviation) / scrollOffset;


        currentElement.element.style.transform = 'rotate(' + angle + 'deg)';
    };

    var onScroll = function(e) {

        var currentScrollTop = document.documentElement.scrollTop;

        if (previousScrollTop > currentScrollTop) {
            onScrollUp(e, currentScrollTop);
        } else {
            onScrollDown(e, currentScrollTop);
        }
        previousScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', onScroll);
}


