/* Theme Name: Larix - Responsive One Page HTML5 Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main JS file of the template
*/


! function ($) {
    "use strict";

    var Larix = function () { };

    Larix.prototype.initStickyMenu = function () {
        // Add scroll class
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

        Larix.prototype.initSmoothLink = function () {
            // Smooth scroll
            $('.navbar-nav a').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        Larix.prototype.initTestimonials = function () {
            //Owl Carousel
            $("#owl-demo").owlCarousel({
                autoPlay: 3000,
                stopOnHover: true,
                navigation: false,
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                autoHeight: true,
            });
        },

        Larix.prototype.initScrollspy = function () {
            //Scrollspy
            $(".navbar-nav").scrollspy({
                offset: 50
            });
        },

        Larix.prototype.initPortfolioFilter = function () {
            // Portfolio filter
            $(window).on('load', function () {
                var $container = $('.projects-wrapper');
                var $filter = $('#filter');
                // Initialize isotope 
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                // Filter items when filter link is clicked
                $filter.find('a').on("click", function () {
                    var selector = $(this).attr('data-filter');
                    $filter.find('a').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            });
        },

        Larix.prototype.initMagnificPopup = function () {
            // Magnific Popup
            $('.mfp-image').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                }
            });
        },

        Larix.prototype.initContact = function () {
            //Contact Form
            $('#contact-form').submit(function () {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function () {
                    $('#message').hide();

                    $('#submit')
                        .before('')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                        function (data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('#cform img.contact-loader').fadeOut('slow', function () {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                            if (data.match('success') != null) $('#cform').slideUp('slow');
                        }
                    );

                });

                return false;

            });
        },

        Larix.prototype.init = function () {
            this.initStickyMenu();
            this.initSmoothLink();
            this.initTestimonials();
            this.initScrollspy();
            this.initPortfolioFilter();
            this.initMagnificPopup();
            this.initContact();
        },
        //init
        $.Larix = new Larix, $.Larix.Constructor = Larix
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.Larix.init();
    }(window.jQuery);

//Reading form data
function formData() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("sub").value,
        message: document.getElementById("comments").value,
    };
    return params
}

//Validating Form
function validateForm() {
    params = formData();
    var email = params.email;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (params.name == null || params.name == "") {
        alert('Name Cannot be blank!')
    }
    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
    }
    else if (params.subject == null || params.subject == "") {
        alert('Subject Cannot be blank!')
    }
    else if (params.message == null || params.message == "") {
        alert('message Field Cannot be blank!')
    }
    else {
        sendMail();
        addToBase();
    }
}

//Integrating Email Js Functionalities
function sendMail() {
    params = formData();
    const serviceID = "service_42k8hkj";
    const templateID = "template_jhq0q1s";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Your message sent successfully!!")
        })
        .catch(err => console.log(err));

    event.preventDefault();
}

//firebase config
function firebaseConfig() {
    var firebaseConfig = {
        apiKey: "AIzaSyB6HDdFsb8yfa7lVRBMstjZ0SZbxCcUJpM",
        authDomain: "ztooanalytics.firebaseapp.com",
        databaseURL: "https://ztooanalytics-default-rtdb.firebaseio.com",
        projectId: "ztooanalytics",
        storageBucket: "ztooanalytics.appspot.com",
        messagingSenderId: "77996250847",
        appId: "1:77996250847:web:280c0cd5280626c84bfb6a",
    };

    firebase.initializeApp(firebaseConfig);
}

//firebase Init
function fireInitialize() {
    firebaseConfig();
}

//Adding Form Data
function addToBase() {
    params = formData();
    event.preventDefault();
    // firebaseConfig();

    var messagesRef = firebase.database().ref("Collected Data");

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: params.name,
        email: params.email,
        subject: params.subject,
        message: params.message,
    });
}

//Adding Subscriber list
function subscribe() {
    let subscriber = {
        to_email: document.getElementById("subEmail").value,
    }
    console.log(subscriber.to_email)
    var atposition = subscriber.to_email.indexOf("@");
    var dotposition = subscriber.to_email.lastIndexOf(".");
    event.preventDefault();

    // firebaseConfig();

    var subscribeRef = firebase.database().ref("Subscriber List");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= subscriber.to_email.length) {
        alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
    }
    else {
        var newSubscribeRef = subscribeRef.push();
        newSubscribeRef.set({
            subscriber_email: subscriber.to_email,
        });

        emailjs.send("service_42k8hkj", "template_m8rt5k8", subscriber)
            .then(res => {
                alert(`You've subscribed Successfully`)
            })
            .catch(err => console.log(err));
    }
}
