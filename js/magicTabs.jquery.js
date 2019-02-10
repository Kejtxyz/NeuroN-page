function estate($element) {
    $('.stateable').removeClass('link-active');

    $element.addClass('link-active');

    var cssClass = $element.data('gradient_class');
    if(typeof cssClass !== "undefined") {
        $('#main-header').addClass(cssClass);
    }
}

$(document).on('click', '.stateable', function() {
    estate($(this));
});

estate($('#neuron-foundation-href'));