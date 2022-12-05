$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:5000,
    autopplaySpeed: 1000,
    smartSpeed: 500,
    autoplayHoverPause: true,
    nav:true,
    center: false,
    mergeFit: true,
    lazyLoad: true,
    items:1,
    dots:false,
    // mouseDrag: true,
    // touchDrag:true,
    navText: ['<i class="fas fa-chevron-left"></i>',"<i class='fas fa-chevron-right'></i>"],
})

const itemClick = $('#chuyenmuc .mtab li');
const trongTinhItem = $('#chuyenmuc .trongTinh');
const quocTeItem = $('#chuyenmuc .quocTe');
itemClick.on('click', (e)=> {
  var eTarget = e.currentTarget;
  console.log(eTarget);
  if(!$(eTarget).hasClass('active-tab')){
    $(itemClick).removeClass('active-tab')
    $(eTarget).addClass('active-tab');
    if($(eTarget).hasClass('clickTrongTinh')){
      $(trongTinhItem).css("display","block")
      $(quocTeItem).css("display","none")
    } else {
      $(quocTeItem).css("display","block")
      $(trongTinhItem).css("display","none")
    }
  } else {
    $(itemClick).removeClass('active-tab')
    $(eTarget).addClass('active-tab');

  }
})
});


// $(function() {
//     var timerset;
//     $('.newstabhomejcarousel-items').each(function(k, v) {
//         var jcarousel = $('.newstabhomejcarousel', $(this));
//         var jcarouselcontrolnext = $('.mnav .next a', $(this));
//         var jcarouselcontrolprev = $('.mnav .prev a', $(this));
//         var jcarouselpagination = $('.jcarousel-pagination', $(this));

//         jcarousel.jcarousel({
//             wrap: 'circular',
//         }).jcarouselAutoscroll({
//             interval: 5000,
//             target: '+=1',
//             autostart: false
//         });

//         jcarouselcontrolprev
//             .on('jcarouselcontrol:active', function() {
//                 $(this).removeClass('inactive');
//             })
//             .on('jcarouselcontrol:inactive', function() {
//                 $(this).addClass('inactive');
//             })
//             .jcarouselControl({
//                 target: '-=1'
//             });

//         jcarouselcontrolnext
//             .on('jcarouselcontrol:active', function() {
//                 $(this).removeClass('inactive');
//             })
//             .on('jcarouselcontrol:inactive', function() {
//                 $(this).addClass('inactive');
//             })
//             .on('click', function(e) {
//                 e.preventDefault();
//             })
//             .jcarouselControl({
//                 target: '+=1'
//             });

//         jcarouselpagination
//             .on('jcarouselpagination:active', 'a', function() {
//                 $(this).addClass('active');
//             })
//             .on('jcarouselpagination:inactive', 'a', function() {
//                 $(this).removeClass('active');
//             })
//             .on('click', function(e) {
//                 e.preventDefault();
//             })
//             .jcarouselPagination({
//                 item: function(page) {
//                     return '<a href="#' + page + '">' + page + '</a>';
//                 }
//             });
//         setTimeout(function() {
//             var maxH = 0;
//             $('div.ct', jcarousel).each(function() {
//                 if (maxH < $(this).height()) {
//                     maxH = $(this).height();
//                 }
//             });
//             $('div.ct', jcarousel).height(maxH);
//         }, 100);
//     });
//     setTimeout(function() {
//         $('.newstabhomejcarousel-ctn').hide();
//         $('.newstabhomejcarousel-ctn:first').show();
//         $('.newstabhomejcarousel-ctn').css({
//             'position': 'relative'
//         });
//     }, 150);
// });
