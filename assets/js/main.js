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
    // mobile menu 
	var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	var tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.tp-submenu, .tp-mega-menu').length != 0) {
		$(tpSideMenu).find('.tp-submenu, .tp-mega-menu').parent().append
			('<button class="tp-menu-close"><i class="fi-chevron-right"></i></button>');
	}
	var sideMenuList =
		$('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.tp-submenu, .tp-mega-menu').slideDown();
		} else {
			$(this).siblings('.tp-submenu, .tp-mega-menu').slideUp();
			$(this).parent().removeClass('active');
		}
	});

	// offcanvas
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tp-offcanvas-close-btn").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	// // 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
    // mobile-menu-end////


    // scrollToTop//
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
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        nav:true,
        dots:false,
        navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            992:{
                nav:true,
            },
        }
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
        768:{
            items:2
        },
        992:{
            items:3
        },
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
    type: 'iframe'
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
    margin:10,
    autoplayTimeout: 3000,
    smartSpeed: 700,
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive:{
    0:{
        items:1
    },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
   })
   //project-slide-area-start-End

   // Blog slider area start here ***
	// testimonial-active//
    if($('.testi-active').length > 0){
        $('.testi-active').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          arrows: false,
          dots:true,
          infinite: true,
          fade: false,
          asNavFor: '.testi-nav',
      });
    }
    if($('.testi-nav').length > 0){
      $('.testi-nav').slick({
          slidesToShow:1,
          slidesToScroll: 1,
          asNavFor: '.testi-active',
          dots: false,
          centerMode: true,
          infinite: true,
          fade: true,
          initialSlide:0,
          focusOnSelect: true,
          centerPadding:'0px',
          arrows: false,
          responsive: [
              {
                  breakpoint: 767,
                      settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:false,
                  }
              }
          ]
      });
    }
	// Blog slider area end here ***

    // progressbar-start////

    function showProgress(){
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(skillBar=> {
            const value = skillBar.dataset.progress;
            skillBar.style.opacity = 1;
            skillBar.style.width = `${value}%`;
            
        });
    }
    if($('#about-section').length > 0){
        const aboutSection = document.getElementById('about-section');
        window.addEventListener('scroll',() => {
            const sectionPos = aboutSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight /3;
    
            if(sectionPos < screenPos){
                showProgress();
            }else{
                // hideProgress();
            }
        });
    }
    // progressbar-end////

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

