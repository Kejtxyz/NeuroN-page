var config = {
    primaryUrl:     'http://protean.pl:8088',
    fallbackUrl:    'http://localhost:8095'
};

function loadNeuronFoundationContent() {
    $(document).contentLoader(
        config,
        '/api/tab/neuron_foundation',
        'neuron_foundation',
        '#main',
        function(response) {
            $.each(response.articles, function(index) {
                this.isEven = (index % 2 === 0);
                this.index  = (index+1);
            });
            $.each(response.news, function(index) {
                this.isEven         = (index % 2 === 0);
            });

            return {
                articles:   response.articles,
                news:       response.news
            };
        },
        function() {
            $('<script src="js/magicRotator.js"><\/script>').appendTo(document.body);
        }
    );
    return false;
}

function loadAboutUsContent() {
    $(document).contentLoader(
        config,
        '/api/tab/about_us',
        'about_us',
        '#main',
        function(response) {
            return response;
        },
        function() {

        }
    );
    return false;
}

$(document).ready(loadNeuronFoundationContent);

$(document).on('click', '[data-content_loader="neuron_foundation"]', loadNeuronFoundationContent);
$(document).on('click', '[data-content_loader="about_us"]', loadAboutUsContent);