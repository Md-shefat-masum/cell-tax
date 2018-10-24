/************* Custom Js File *******************************

    Template Name: Portfolio Template
    Author: Faisal Ahmed Nahian
    Version: 1.0
    Copyright 2018
    
*************************************************************/


/*-------------------------------------------------------------------------------
    
    
JS INDEX
=============

01 - smooth scroll
02 - scroll js nav bar, comes after scrolling
03 - Skills Progress Bars
04 - Light box js
05 - port-folio part sliding  js
06 - back to top button js
07 - wow activation  js


--------------------------------------------------------------------------------*/


$(function () {

    "use strict";


    /*-------------------------------------
         slick slider js
    -------------------------------------*/
    $('.client').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.left',
  nextArrow: '.right',
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    /*-------------------------------------
    07 - wow activation  js
-------------------------------------*/
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();



});


/*
*
*
*
*


*
*
*/
