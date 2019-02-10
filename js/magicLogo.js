var header                  = document.getElementById('main-header');
var headerCaption           = document.querySelector('div.header-caption');

var documentComputedStyle   = window.getComputedStyle(window.document.documentElement);
var headerComputedStyle     = window.getComputedStyle(header);
var headerComputedHeight    = headerComputedStyle.height.replace('px', '');

function getBreakpoint() {
    var documentWidth = documentComputedStyle.width.replace('px', '');

    if(documentWidth > 1200) {
        return {
            top: 50,
            bottom: 450
        };
    }
    if(documentWidth > 992) {
        return {
            top: 70,
            bottom: 525
        };
    }
    if(documentWidth > 768) {
        return {
            top: 70,
            bottom: 350
        };
    }
    if(documentWidth > 576) {
        return {
            top: 60,
            bottom: 350
        };
    }

    return {
        top: 20,
        bottom: 300
    };
}

var breakpoints = getBreakpoint();

var reposition = function() {
    var units = document.documentElement.scrollTop;
    if(units < breakpoints.top) {
        units = breakpoints.top;
    }
    if(units > headerComputedHeight || units > breakpoints.bottom) {
        units = breakpoints.bottom;
    }
    headerCaption.style.transform = 'translateY(' + (units + 'px') + ')';
};

var debounced = debounce(reposition, 10);
document.addEventListener('scroll', debounced);

reposition();