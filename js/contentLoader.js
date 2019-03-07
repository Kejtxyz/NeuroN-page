var config = {
    primaryUrl:     'https://api.oak.protean.pl/',
    fallbackUrl:    'http://localhost:8095'
};

function handleMobile() {
    var isLeftMenuOpen  = $('#collapsibleNavbar').hasClass('show');
    var isRightMenuOpen = $('#collapsibleNavbar2').hasClass('show');

    if(isLeftMenuOpen) {
        $('#left-toggler').click();
    }

    if(isRightMenuOpen) {
        $('#right-toggler').click();
    }
}

function loadDefault(e, tab) {
    if(typeof tab === "undefined") {
        tab = $(e.target).data('content_loader');
    }
    handleMobile();

    $(document).contentLoader(
        config,
        '/api/tab/' + tab,
        'default_template',
        '#main',
        function(response) {
            console.log(response);
            $.each(response.articles, function(index) {
                this.isEven = (index % 2 === 0);
                this.index  = (index+1);
            });
            $.each(response.news, function(index) {
                this.isEven         = (index % 2 === 0);
            });

            return {
                header:     response.header,
                articles:   response.articles,
                news:       response.news
            };
        },
        function() {
            $('<script src="js/magicRotator.js"><\/script>').appendTo(document.body);
            $('<script src="js/magicLine.js"><\/script>').appendTo(document.body);
        }
    );
    return false;
}

function loadNeuronFoundationContent(e) {
    loadDefault(e);
    return false;
}

function loadNewNeuropsychiatryContent(e) {
    loadDefault(e);
    return false;
}

function loadNewNeuronDirectionContent(e) {
    loadDefault(e);
    return false;
}

function loadOakesInnovateContent(e) {
    loadDefault(e);
    return false;
}

function loadNTVChannelContent(e) {
    loadDefault(e);
    return false;
}

function loadOakesClinicContent(e) {
    loadDefault(e);
    return false;
}

function loadOakAtlantisContent(e) {
    loadDefault(e);
    return false;
}

function loadDownloadContent() {
    handleMobile();
    $(document).contentLoader(
        config,
        '/api/tab/neuron_foundation',
        'download_template',
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

function loadContactContent() {
    handleMobile();
    $(document).contentLoader(
        config,
        '/api/tab/about_us',
        'contact',
        '#main',
        function(response) {
            // Response from API
            response = {
                projects: [
                    {
                        name: "NEURON FOUNDATION",
                        subprojects:  [
                            "Białystok",
                            "Bydgoszcz",
                            "Częstochowa",
                            "Gdańsk",
                            "Katowice",
                            "Kielce",
                            "Kraków",
                            "Lublin",
                            "Łódź",
                            "Olsztyn",
                            "Poznań",
                            "Rzeszów",
                            "Szczecin",
                            "Toruń",
                            "Warszawa",
                            "Wrocław"
                        ]
                    },
                    {
                        name: "OAKES INNOVATE",
                        subprojects: [
                            "Attendo",
                            "Powers",
                            "Sanum",
                            "Silva",
                            "Manus",
                            "Medicor",
                            "Specto",
                            "Black Oak",
                            "Fero",
                            "Melior",
                            "Ambient",
                            "Abyss",
                            "BIOcream",
                            "Just Juice"
                        ]
                    },
                    {
                        name: "New Neuropsychiatry",
                        subprojects: []
                    },
                    {
                        name: "NeuroN Direction",
                        subprojects: []
                    },
                    {
                        name: "NTV Channel",
                        subprojects: []
                    },
                    {
                        name: "Oakes Clinic",
                        subprojects: []
                    },
                    {
                        name: "Oak Atlantis",
                        subprojects: []
                    }
                ],
                contacts: [
                    {
                        name:   'NeuroN Foundation',
                        email:  'biuro@neuronfoundation.com',
                        phone:  '+48 514 438 369‬‬'
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
                        phone:  '‭+48 889 222 988‬'
                    },
                    {
                        name:   'NTV Channel',
                        email:  'biuro@ntv.com',
                        phone:  '+48 514 438 369‬‬'
                    },
                    {
                        name:   'Oakes Clinic',
                        email:  'biuro@oakesclinic.com',
                        phone:  '+48 889 222 988'
                    },
                    {
                        name:   'Oak Atlantis',
                        email:  'biuro@oakisland.com',
                        phone:  '+48 889 222 988'
                    },
                    {
                        name:   'Media i współpraca',
                        email:  'biuro@smartoakproject.com',
                        phone:  '+48 889 222 988‬'
                    },
                    {
                        name:   'Pomoc techniczna',
                        email:  'pomoc@smartoakproject.com',
                        phone:  '+48 516 003 690'
                    }
                ]
            };

            // Malform response for Mustache template purpose
            $.each(response.projects, function() {
                this.isRoot = (this.subprojects.length === 0);
            });

            return response;
        },
        function() {

        },
        false
    );
    return false;
}

function loadAboutUsContent() {
    handleMobile();
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

$(document).ready(function(e) { loadDefault(e, "neuron_foundation"); });

$(document).on('click', '[data-content_loader="neuron_foundation"]', loadNeuronFoundationContent);
$(document).on('click', '[data-content_loader="new_neuropsychiatry"]', loadNewNeuropsychiatryContent);
$(document).on('click', '[data-content_loader="neuron_direction"]', loadNewNeuronDirectionContent);
$(document).on('click', '[data-content_loader="oakes_innovate"]', loadOakesInnovateContent);
$(document).on('click', '[data-content_loader="ntv_channel"]', loadNTVChannelContent);
$(document).on('click', '[data-content_loader="oakes_clinic"]', loadOakesClinicContent);
$(document).on('click', '[data-content_loader="oak_atlantis"]', loadOakAtlantisContent);
$(document).on('click', '[data-content_loader="about_us"]', loadAboutUsContent);
$(document).on('click', '[data-content_loader="contact"]', loadContactContent);
$(document).on('click', '[data-content_loader="download"]', loadDownloadContent);
