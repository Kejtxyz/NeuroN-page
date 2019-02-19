var leftPolygon     = document.getElementById("left-polygon");
var rightPolygon    = document.getElementById("right-polygon");

var element         = document.getElementById('main-header');
var max             = element.offsetHeight;

// Tu obliczamy procent animacji
// current - aktualny scrolltop
// max - wysokość elementu w którym mamy SVG, tj. #main-header
// Tak więc jeżeli max = 500px a scrolltop to 250px, to jesteśmy w 50% animacji
function getAnimationPercent(current, max) {
    var ratio   = current /  max;
    return (ratio > 1) ? 1 : ratio;
}

// Wrzuca request animacji do kolejki (raf)
// Element to element <polygon>, np.
// <polygon id="left-polygon" fill="white" points="0 100,0 70,100 100" ></polygon>
// Ten polygon jest tak dostosowany, że pointsy to efektywnie procenty elementu wrapującego go
// Zerknij na left-corner i right-corner w index.html
function requestAnimation(element, points) {
    var time = {
        start: performance.now(),
        total: 1200
    };

    var tick = function tick(now) {
        time.elapsed = now - time.start;
        var progress = Math.min(time.elapsed / time.total, 1);

        // Ustawiamy pointsy dla polygonu
        element.setAttribute("points", points.join(" "));

        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
}

// A tu scroll event
document.addEventListener('scroll', function() {
    var percent         = getAnimationPercent($(document).scrollTop(), max);
    var scrollPercent   = parseInt(percent*100);

    requestAnimation(leftPolygon, [0,100, 0, (scrollPercent/3.75)+70, 100,100], [0,100, 0,scrollPercent, 100,100]);
    requestAnimation(rightPolygon, [100, 100, 100, (scrollPercent/2.50)+50, 0, 100], [100, 100, 100, scrollPercent+30, 0, 100]);
});