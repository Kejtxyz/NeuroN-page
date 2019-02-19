(function($) {
    var defaults = {
        rootUrl:        null,
        primaryUrl:     null,
        fallbackUrl:    null
    };

    var settings = defaults;

    $.fn.contentLoader = function(options, url, template, selector, parser, after) {
        settings = $.extend(defaults, options);

        if(settings.rootUrl === null) {
            $.ajax(settings.primaryUrl, {
                success: function() {
                    settings.rootUrl = settings.primaryUrl;
                },
                error: function() {
                    settings.rootUrl = settings.fallbackUrl;
                }
            }).done(function(server) {
                $.ajax(settings.rootUrl + url, {
                    success: function(response) {

                        response = parser(response);

                        var template = '/templates/' + template + '.html';

                        if(window.location.host.contains('github')) {
                            template = '/NeuroN-page' + template;
                        }

                        $.ajax('/templates/' + template + '.html', {
                            success: function(template) {
                                var html = Mustache.render(template, response);
                                $(selector).html(html);
                                after();
                            }
                        });
                    }
                });
            });
        } else {
            $.ajax(settings.rootUrl + url, {
                success: function(response) {
                    $(selector).addClass("animated fadeOut");
                    response = parser(response);
                    $.ajax('/templates/' + template + '.html', {
                        success: function(template) {
                            var html = Mustache.render(template, response);
                            $('html, body').animate({
                                scrollTop: $(selector).offset().top
                            }, 1000);
                            setTimeout(function() {
                                $(selector).addClass("fadeIn");
                                $(selector).removeClass("fadeOut");
                                $(selector).html(html);
                                after();
                            }, 500);
                        }
                    });
                }
            });
        }
    };
})(jQuery);