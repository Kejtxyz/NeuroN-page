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

function loadContactContent() {
    $(document).contentLoader(
        config,
        '/api/tab/about_us',
        'contact',
        '#main',
        function(response) {
            return {
                projects: [
                    {
                        code: "neuron-foundation",
                        text: "NeuroN Foundation"
                    },
                    {
                        code: "new-neuropsychiatry",
                        text: "New Neuropsychiatry"
                    },
                    {
                        code: "neuron-direction",
                        text: "NeuroN Direction"
                    },
                    {
                        code: "oakes-innovate",
                        text: "Oakes Innovate"
                    },
                    {
                        code: "ntv-channel",
                        text: "NTV Channel"
                    },
                    {
                        code: "oakes-clinic",
                        text: "Oakes Clinic"
                    },
                    {
                        code: "oak-atlantis",
                        text: "Oak Atlantis"
                    }
                ],
                contacts: [
                    {
                        name:   'NeuroN Foundation',
                        email:  'biuro@neuronfoundation.com',
                        phone:  '‭+48 514 438 369‬'
                    },
                    {
                        name:   'New Neuropsychiatry',
                        email:  'biuro@newneuropsychiatry.com',
                        phone:  '+48 795 553 121'
                    },
                    {
                        name:   'NeuroN Direction',
                        email:  'biuro@neurondirection.com',
                        phone:  '+48 797 620 025'
                    },
                    {
                        name:   'Oakes Innovate',
                        email:  'biuro@oakesinnovate.com',
                        phone:  '+48 889 222 988'
                    },
                    {
                        name:   'NTV Channel',
                        email:  'biuro@ntv.com',
                        phone:  '‭+48 514 438 369‬'
                    },
                    {
                        name:   'Oakes Clinic',
                        email:  'biuro@oakesclinic.com',
                        phone:  '+48 889 222 988‬'
                    },
                    {
                        name:   'Oak Atlantis',
                        email:  'biuro@oakisland.com',
                        phone:  '+48 889 222 988‬'
                    }
                ]
            };
        },
        function() {

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
$(document).on('click', '[data-content_loader="new_neuropsychiatry"]', loadNewNeuropsychiatryContent);
$(document).on('click', '[data-content_loader="neuron_direction"]', loadNewNeuronDirectionContent);
$(document).on('click', '[data-content_loader="oakes_innovate"]', loadOakesInnovateContent);
$(document).on('click', '[data-content_loader="ntv_channel"]', loadNTVChannelContent);
$(document).on('click', '[data-content_loader="oakes_clinic"]', loadOakesClinicContent);
$(document).on('click', '[data-content_loader="oak_atlantis"]', loadOakAtlantisContent);
$(document).on('click', '[data-content_loader="about_us"]', loadAboutUsContent);
$(document).on('click', '[data-content_loader="contact"]', loadContactContent);
