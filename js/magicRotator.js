var documentComputedStyle   = window.getComputedStyle(window.document.documentElement);
var documentWidth           = documentComputedStyle.width.replace('px', '');
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

    return {
        element:    element,
        height:     height,
        top:        top,
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

if(documentWidth >= 1200) {
    var rotate = function(element) {
        var currentScrollTop    = document.documentElement.scrollTop;

        var currentAttitude     = -1 * (currentScrollTop - (element.top + (element.height/2)));
        var landingAttitude     = element.rotation.maxAttitude;
        var maximumLandingAngle = element.rotation.max;
        var currentLandingAngle = -1 * ((currentAttitude * maximumLandingAngle) / landingAttitude);
        var rotationFix         = 9;

        currentLandingAngle += rotationFix;

        if(currentLandingAngle < -1 * maximumLandingAngle) {
            currentLandingAngle = -1 * maximumLandingAngle;
        }
        if(currentLandingAngle > maximumLandingAngle) {
            currentLandingAngle = maximumLandingAngle;
        }

        element.element.style.transform = 'rotate(' + currentLandingAngle + 'deg)';
    };

    var onScroll = function(e) {
       for(var i = 0; i < elements.length; i++) {
           rotate(elements[i]);
       }
    };

    window.addEventListener('scroll', onScroll);
}


