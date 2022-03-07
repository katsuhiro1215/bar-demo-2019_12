"use strict";

$(document).ready(function() {

  $('.menu-toggle').click(function() {
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('active');
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    slidesToShow: 2,
    swipe: false,
    arrows: false,
    pauseOnFoucus: false,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});