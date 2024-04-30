"user strict";

$(document).ready(function () {

    //menu top fixed bar
    var fixed_top = $(".main__header, .header__section__two");
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 220) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
            fixed_top.removeClass("slideInUp");
            $("body").addClass("body-padding");
        } else {
            fixed_top.removeClass("menu-fixed fadeInDown");
            fixed_top.addClass("slideInUp");
            $("body").removeClass("body-padding");
        }
    });
    //menu top fixed bar

    //--Header Menu
    $(".header-bar").on("click", function(e) {
        $(".main-menu, .header-bar").toggleClass("active");
    });
    $(".main-menu li a").on("click", function(e) {
        var element = $(this).parent("li");
        if (element.hasClass("open")) {
            element.removeClass("open");
            element.find("li").removeClass("open");
            element.find("ul").slideUp(300, "swing");
        } else {
            element.addClass("open");
            element.children("ul").slideDown(300, "swing");
            element.siblings("li").children("ul").slideUp(300, "swing");
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
            element.siblings("li").find("ul").slideUp(300, "swing");
        }
    });
    $(".scrollToTop").on("click", function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            700
        );
        return false;
    });
    //--Header Menu--

    //search-area-start-here
   var $searchWrap = $(".search-wrap");
   var $navSearch = $(".nav-search");
   var $searchClose = $("#search-close");

   $(".search-trigger").on("click", function (e) {
       e.preventDefault();
       $searchWrap.animate({ opacity: "toggle" }, 500);
       $navSearch.add($searchClose).addClass("open");
   });

   $(".search-close").on("click", function (e) {
       e.preventDefault();
       $searchWrap.animate({ opacity: "toggle" }, 500);
       $navSearch.add($searchClose).removeClass("open");
   });

   function closeSearch() {
       $searchWrap.fadeOut(200);
       $navSearch.add($searchClose).removeClass("open");
   }

   $(document.body).on("click", function (e) {
       closeSearch();
   });

   $(".search-trigger, .main-search-input").on("click", function (e) {
       e.stopPropagation();
   });
   //search-area-end-here

    

    //odometer-area-start-here
    $(".odometer-item").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (
                    var i = 0;
                    i < document.querySelectorAll(".odometer").length;
                    i++
                ) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    //odometer-area-start-end

     // slide-active start
     $('.slide-active').owlCarousel({
        loop:true,
        autoplay:true,
        items:1,
        margin: 10,
        nav:false,
        dots:false,
    })
    // slide-active end

   //service-slide-area-start-here
   $('.service__wrapper').owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    autoplayTimeout: 3000,
    smartSpeed: 700,
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive:{
    0:{
        items:1
    },
        576:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1199:{
            items:3
        }
    }
   })
   //service-slide-area-start-End

   //client-slide-area-start-here
   $('.client__wrapper').owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    autoplayTimeout: 3000,
    smartSpeed: 700,
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive:{
    0:{
        items:1
    },
        576:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
        1199:{
            items:5
        }
    }
   })
   //client-slide-area-start-End

   //gallery-slide-area-start-here
   var swiper = new Swiper(".gallery__items", {
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".gallery-pagination",
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 3,
        },
    },
   });
   //gallery-slide-area-start-End

   //image and video-popup-area-start-here
   $('.video-btn').magnificPopup({
    type: 'iframe',
    callbacks: {
      }
    });
    $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });
   //image and video-popup-area-end-here

   //testimonial-slide-area-start-here
   $('.testi__wrapper').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
   })
   //testimonial-slide-area-start-End

   //project-slide-area-start-here
   $('.project__wrapper').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    autoplayTimeout: 3000,
    smartSpeed: 700,
    navText: [
        '<i class="fa-solid fa-chevron-right"></i>',
        '<i class="fa-solid fa-chevron-left"></i>'
    ],
    responsive:{
    0:{
        items:1
    },
        576:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1199:{
            items:4
        }
    }
   })
   //project-slide-area-start-End

   // Blog slider area start here ***
	var swiper = new Swiper(".testi__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 1200,
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".testi__dot",
			clickable: true,
		},
	});
	// Blog slider area end here ***

     //Wow-animation-area-start-here
	 new WOW().init();
     //Wow-animation-area-start-End

   //Back-to-top-area-start-here
   var scrollPath = document.querySelector(".scroll-up path");
   var pathLength = scrollPath.getTotalLength();
   scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
   scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
   scrollPath.style.strokeDashoffset = pathLength;
   scrollPath.getBoundingClientRect();
   scrollPath.style.transition = scrollPath.style.WebkitTransition =
       "stroke-dashoffset 10ms linear";
   var updatescroll = function () {
       var scroll = $(window).scrollTop();
       var height = $(document).height() - $(window).height();
       var scroll = pathLength - (scroll * pathLength) / height;
       scrollPath.style.strokeDashoffset = scroll;
   };
   updatescroll();
   $(window).scroll(updatescroll);
   var offset = 50;
   var duration = 950;
   jQuery(window).on("scroll", function () {
       if (jQuery(this).scrollTop() > offset) {
           jQuery(".scroll-up").addClass("active-scroll");
       } else {
           jQuery(".scroll-up").removeClass("active-scroll");
       }
   });
   jQuery(".scroll-up").on("click", function (event) {
       event.preventDefault();
       jQuery("html, body").animate(
           {
               scrollTop: 0,
           },
           duration
       );
       return false;
   });
   //Back-to-top-area-end-here
   // Loder  //
   $(function() {
    $('body').addClass('loaded');
});
//contact form js
$(function () {
    // Get the form.
    var form = $("#contact-form");
    // Get the messages div.
    var formMessages = $(".form-message");
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
            type: "POST",
            url: $(form).attr("action"),
            data: formData,
        })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass("error");
                $(formMessages).addClass("success");
                // Set the message text.
                $(formMessages).text(response);
                // Clear the form.
                $("#form input, #form textarea").val("");
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass("success");
                $(formMessages).addClass("error");
                // Set the message text.
                if (data.responseText !== "") {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text(
                        "Oops! An error occured and your message could not be sent."
                    );
                }
            });
    });
});


});

