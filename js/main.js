(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


   // Service-carousel
   $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
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
            items:2
        },
        1200:{
            items:2
        }
    }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            }
        }
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// header

 // Toggle Mega Menu for "Services"
  function toggleMegaMenu(event) {
    event.preventDefault();
    const menu = document.getElementById('megaMenu');
    menu.classList.toggle('show');
  }

  // Toggle Mobile Menu (hamburger ↔ X)
  function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const btn = document.getElementById('menuBtn');
    nav.classList.toggle('show');
    btn.innerHTML = nav.classList.contains('show')
      ? '<i class="bi bi-x-lg"></i>'
      : '<i class="bi bi-list"></i>';
  }

  // Close mega menu if clicked outside
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('megaMenu');
    const nav = document.getElementById('mainNav');
    if (!e.target.closest('.navmenu') && !e.target.closest('#megaMenu') && !e.target.closest('#menuBtn')) {
      menu.classList.remove('show');
    }
  });

  // ✅ Close mobile menu when a link is clicked
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navmenu ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const nav = document.getElementById('mainNav');
        const btn = document.getElementById('menuBtn');

        if (nav.classList.contains('show')) {
          nav.classList.remove('show');
          btn.innerHTML = '<i class="bi bi-list"></i>';
        }
      });
    });
  });

//   header



// banner

 const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: true, // allow swipe gestures manually too
  });

  let timeoutId;

  function playCurrentVideo() {
    clearTimeout(timeoutId); // cancel any previously queued auto-slide

    const currentSlide = swiper.slides[swiper.activeIndex];
    const video = currentSlide.querySelector("video");

    if (!video) return;

    video.pause();
    video.currentTime = 0;

    video.onloadedmetadata = () => {
      const duration = video.duration;
      video.play();

      // Slide after video duration
      timeoutId = setTimeout(() => {
        swiper.slideNext();
      }, duration * 1000);
    };

    // If video already loaded, call manually
    if (video.readyState >= 1) {
      video.onloadedmetadata();
    }
  }

  // Initial autoplay after load
  window.addEventListener("load", () => {
    setTimeout(playCurrentVideo, 500);
  });

  // Re-trigger play when user navigates manually
  swiper.on("slideChange", () => {
    // Wait a bit to ensure DOM settles before calling play
    setTimeout(playCurrentVideo, 300);
  });

//   banner