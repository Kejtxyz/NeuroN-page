var viewport = {
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
};

function getElementData(selector) {
    var element                     = document.querySelector(selector);
    var elementComputedStyle        = window.getComputedStyle(element);

    var height                      = elementComputedStyle['height'].replace('px', '');

    var bodyBoundingClientRect      = document.body.getBoundingClientRect();
    var elementBoundingClientRect   = element.getBoundingClientRect();
    var top                         = parseInt(elementBoundingClientRect.top - bodyBoundingClientRect.top);
    var animateLeft                 = element.classList.contains('animate-left');
    return {
        element:            element,
        height:             height,
        direction:          animateLeft ? 'left' : 'right',
        top:                top,
        rotation: {
            max: 15,
            maxAttitude: viewport.height
        }
    };
}

var elements = [
    getElementData('#section-container-img-1 > img'),
    getElementData('#section-container-img-2 > img'),
    getElementData('#section-container-img-3 > img')
];

var rotate = function(element) {
    var currentScrollTop    = $(document).scrollTop();
    var rotationFix         = 9;
    var currentAttitude     = -1 * (currentScrollTop - (element.top + (element.height/2)));
    var landingAttitude     = element.rotation.maxAttitude;
    var maximumLandingAngle = element.rotation.max;
    var currentLandingAngle = (-1 * ((currentAttitude * maximumLandingAngle) / landingAttitude)) + rotationFix;

    if(element.direction === 'left') {
        currentLandingAngle = -currentLandingAngle;
    }

    element.element.style.transform = 'rotate(' + currentLandingAngle + 'deg)';
};

var onScroll = function(e) {
   for(var i = 0; i < elements.length; i++) {
       rotate(elements[i]);
   }
};

window.addEventListener('scroll', onScroll);
