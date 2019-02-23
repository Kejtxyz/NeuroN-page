var config = {
    primaryUrl:     'https://api.oak.protean.pl/',
    fallbackUrl:    'http://localhost:8095'
};

function loadDefault() {
    $(document).contentLoader(
        config,
        '/api/tab/neuron_foundation',
        'default_template',
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

function loadNeuronFoundationContent() {
    loadDefault();
    return false;
}

function loadNewNeuropsychiatryContent() {
    loadDefault();
    return false;
}

function loadNewNeuronDirectionContent() {
    loadDefault();
    return false;
}

function loadOakesInnovateContent() {
    loadDefault();
    return false;
}

function loadNTVChannelContent() {
    loadDefault();
    return false;
}

function loadOakesClinicContent() {
    loadDefault();
    return false;
}

function loadOakAtlantisContent() {
    loadDefault();
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
$(document).on('click', '[data-content_loader="new_neuropsychiatry"]', loadNewNeuropsychiatryContent);
$(document).on('click', '[data-content_loader="neuron_direction"]', loadNewNeuronDirectionContent);
$(document).on('click', '[data-content_loader="oakes_innovate"]', loadOakesInnovateContent);
$(document).on('click', '[data-content_loader="ntv_channel"]', loadNTVChannelContent);
$(document).on('click', '[data-content_loader="oakes_clinic"]', loadOakesClinicContent);
$(document).on('click', '[data-content_loader="oak_atlantis"]', loadOakAtlantisContent);
$(document).on('click', '[data-content_loader="about_us"]', loadAboutUsContent);