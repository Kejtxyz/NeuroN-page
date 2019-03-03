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

function loadDefault() {
    handleMobile();

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
    handleMobile();
    $(document).contentLoader(
        config,
        '/api/tab/neuron_foundation',
        'oakes_innovate_template',
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
				 projects2: [
                    {
                        code: "Białystok",
                        text: "Białystok"
                    },
                    {
                        code: "Bydgoszcz",
                        text: "Bydgoszcz"
                    },
                    {
                        code: "Częstochowa",
                        text: "Częstochowa"
                    },
                    {
                        code: "Gdańsk",
                        text: "Gdańsk"
                    },
                    {
                        code: "Katowice",
                        text: "Katowice"
                    },
                    {
                        code: "Kielce",
                        text: "Kielce"
                    },
                    {
                        code: "Kraków",
                        text: "Kraków"
                    },
					{
                        code: "Lublin",
                        text: "Lublin"
                    },
                    {
                        code: "Łódź",
                        text: "Łódź"
                    },
                    {
                        code: "Olsztyn",
                        text: "Olsztyn"
                    },
                    {
                        code: "Poznań",
                        text: "Poznań"
                    },
                    {
                        code: "Rzeszów",
                        text: "Rzeszów"
                    },
                    {
                        code: "Szczecin",
                        text: "Szczecin"
                    },
					{
                        code: "Toruń",
                        text: "Toruń"
                    },
                    {
                        code: "Warszawa",
                        text: "Warszawa"
                    },
                    {
                        code: "Wrocław",
                        text: "Wrocław"
                    }
                ],
				 projects3: [
                    {
                        code: "Attendo",
                        text: "Attendo"
                    },
                    {
                        code: "Powers",
                        text: "Powers"
                    },
                    {
                        code: "Sanum",
                        text: "Sanum"
                    },
                    {
                        code: "Silva",
                        text: "Silva"
                    },
                    {
                        code: "Manus",
                        text: "Manus"
                    },
                    {
                        code: "Medicor",
                        text: "Medicor"
                    },
                    {
                        code: "Specto",
                        text: "Specto"
                    },
					{
                        code: "Black Oak",
                        text: "Black Oak"
                    },
                    {
                        code: "Fero",
                        text: "Fero"
                    },
                    {
                        code: "Melior",
                        text: "Melior"
                    },
                    {
                        code: "Ambient",
                        text: "Ambient"
                    },
                    {
                        code: "Abyss",
                        text: "Abyss"
                    },
                    {
                        code: "BIOcream",
                        text: "BIOcream"
                    },
                    {
                        code: "Just Juice",
                        text: "Just Juice"
                    },

                ],
                contacts: [
                    {
                        name:   'Media i współpraca',
                        email:  'biuro@smartoakproject.com',
                        phone:  '+48 889 222 988‬'
                    },
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
                        name:   'Pomoc techniczna',
                        email:  'pomoc@smartoakproject.com',
                        phone:  '+48 516 003 690'
                    }
                ]
            };
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
$(document).on('click', '[data-content_loader="download"]', loadDownloadContent);
