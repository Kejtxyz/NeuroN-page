var leftPolygon     = document.getElementById("left-polygon");
var rightPolygon    = document.getElementById("right-polygon");

var element         = document.getElementById('main-header');
var max             = element.offsetHeight;

function getAnimationPercent(current, max) {
    var ratio   = current /  max;
    return (ratio > 1) ? 1 : ratio;
}

function requestLeftAnimation(element, points) {
    var time = {
        start: performance.now(),
        total: 1200
    };

    var tick = function tick(now) {
        time.elapsed = now - time.start;
        var progress = Math.min(time.elapsed / time.total, 1);
        element.setAttribute("points", points.join(" "));

        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
}

document.addEventListener('scroll', function() {
    var percent         = getAnimationPercent($(document).scrollTop(), max);
    var scrollPercent   = parseInt(percent*100);

    requestLeftAnimation(leftPolygon, [0,100, 0,scrollPercent+70, 100,100], [0,100, 0,scrollPercent, 100,100]);
    requestLeftAnimation(rightPolygon, [100, 100, 100, scrollPercent+50, 0, 100], [100, 100, 100, scrollPercent+30, 0, 100]);
});