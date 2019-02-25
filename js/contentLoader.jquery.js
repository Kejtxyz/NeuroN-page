(function($) {
    var defaults = {
        rootUrl:        null,
        primaryUrl:     null,
        fallbackUrl:    null
    };

    var settings = defaults;

    $.fn.contentLoader = function(options, url, template, selector, parser, after, scrollTop) {
        if(typeof scrollTop === "undefined") {
            scrollTop = true;
        }

        settings = $.extend(defaults, options, {
            template: template
        });

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
                        var prefix = '';
                        if(window.location.host.indexOf('github') !== -1) {
                            prefix = '/NeuroN-page';
                        }

                        var contentHtml;
                        var newsHtml;
                        var defaultHtml;
                        $.when(
                            $.ajax({ // First Request
                                url: prefix + '/templates/default_content_template.html',
                                success: function(html){
                                    contentHtml = html;
                                }
                            }),

                            $.ajax({ //Seconds Request
                                url: prefix + '/templates/default_news_template.html',
                                success: function(html){
                                    newsHtml = html;
                                }
                            }),

                            $.ajax({ //Seconds Request
                                url: prefix + '/templates/' + settings.template + '.html',
                                success: function(html){
                                    defaultHtml = html;
                                }
                            })

                        ).then(function() {
                            var html = Mustache.render(defaultHtml, response, {
                                content: contentHtml,
                                news: newsHtml
                            });
                            $('html, body').animate({
                                scrollTop: (scrollTop ? 0 : $(selector).offset().top)
                            }, 1000);
                            setTimeout(function() {
                                $(selector).addClass("fadeIn");
                                $(selector).removeClass("fadeOut");
                                $(selector).html(html);
                                after();
                            }, 500);
                        });
                    }
                });
            });
        } else {
            $.ajax(settings.rootUrl + url, {
                success: function(response) {
                    response = parser(response);
                    var prefix = '';
                    if(window.location.host.indexOf('github') !== -1) {
                        prefix = '/NeuroN-page';
                    }

                    var contentHtml;
                    var newsHtml;
                    var defaultHtml;
                    $.when(
                        $.ajax({ // First Request
                            url: prefix + '/templates/default_content_template.html',
                            success: function(html){
                                contentHtml = html;
                            }
                        }),

                        $.ajax({ //Seconds Request
                            url: prefix + '/templates/default_news_template.html',
                            success: function(html){
                                newsHtml = html;
                            }
                        }),

                        $.ajax({ //Seconds Request
                            url: prefix + '/templates/' + settings.template + '.html',
                            success: function(html){
                                defaultHtml = html;
                            }
                        })

                    ).then(function() {
                        var html = Mustache.render(defaultHtml, response, {
                            content: contentHtml,
                            news: newsHtml
                        });
                        $('html, body').animate({
                            scrollTop: (scrollTop ? 0 : $(selector).offset().top)
                        }, 1000);
                        setTimeout(function() {
                            $(selector).addClass("fadeIn");
                            $(selector).removeClass("fadeOut");
                            $(selector).html(html);
                            after();
                        }, 500);
                    });
                }
            });
        }
    };
})(jQuery);