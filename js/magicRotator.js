var useDeviceJs = (typeof DEVICE !== "undefined");

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
            max: 10,
            maxAttitude: viewport.height
        }
    };
}

var elements = [
    getElementData('#section-container-img-1 > img'),
    getElementData('#section-container-img-2 > img'),
    getElementData('#section-container-img-3 > img')
];

var rotate = function(element, forceAngle) {
    // Used to reset element position on window resize
    if(typeof forceAngle !== "undefined") {
        element.element.style.transform = 'rotate(' + forceAngle + 'deg)';
        return;
    }

    var currentScrollTop    = $(document).scrollTop();
    var currentAttitude     = -1 * (currentScrollTop - (element.top + (element.height/2)));
    var landingAttitude     = element.rotation.maxAttitude;
    var maximumLandingAngle = element.rotation.max;
    var rotationFix         = 0.6*maximumLandingAngle;
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

window.addEventListener('resize', function() {
    if(useDeviceJs) {
        if(DEVICE.SIZE === DEVICE.DEVICE_SIZE_SMALL || DEVICE.SIZE === DEVICE.DEVICE_SIZE_MEDIUM) {
            window.removeEventListener('scroll', onScroll);
            for(var i = 0; i < elements.length; i++) {
                rotate(elements[i], 0);
            }
        } else {
            window.addEventListener('scroll', onScroll);
        }
    } else {
        // This code should not be reachable unless somebody delete device.js file
        window.addEventListener('scroll', onScroll);
    }
});