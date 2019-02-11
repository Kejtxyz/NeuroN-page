var availableGradientClasses = [
    'gradient-1',
    'gradient-2',
    'gradient-3',
    'gradient-4',
    'gradient-5',
    'gradient-6',
    'gradient-7',
    'gradient-8'
];

function estate($element) {
    $('.stateable').removeClass('link-active');

    $element.addClass('link-active');

    var cssClass = $element.data('gradient_class');
    if(typeof cssClass !== "undefined") {
        $('#main-header').removeClass(availableGradientClasses);
        $('#main-header').addClass(cssClass);
    }
}

$(document).on('click', '.stateable', function() {
    estate($(this));
});

estate($('#neuron-foundation-href'));