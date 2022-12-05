$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    autoplay: true,
    autoplayTimeout:5000,
    autopplaySpeed: 1000,
    smartSpeed: 500,
    autoplayHoverPause: true,
    nav:true,
    center: false,
    mergeFit: true,
    lazyLoad: true,
    dots:false,
    // mouseDrag: true,
    // touchDrag:true,
    navText: ['<i class="fas fa-chevron-left"></i>',"<i class='fas fa-chevron-right'></i>"],
    // responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});