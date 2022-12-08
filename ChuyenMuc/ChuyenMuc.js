//Chạy hình ảnh và 2 nút icon di chuyển

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

//xử lý 2 tab khi nhấn vào thay đổi 

const itemClick = $('.chuyenmuc .mtab li');
const chuyenMuc = $('.chuyenmuc .tab-content')

itemClick.on('click', (e)=> {
  var eTarget = e.currentTarget;
  if(!$(eTarget).hasClass('active-tab')){
    $(itemClick).removeClass('active-tab')
    $(eTarget).addClass('active-tab');
    let numberActive = $(eTarget).attr('data-value')
    $(chuyenMuc).css("cssText","display:none !important");
    $(chuyenMuc).each((e, index) => {
      if($(index).attr('data-t1b') === numberActive) {
        $(index).attr('data-t1b', numberActive).css("cssText","display:block !important");
      }
    })
  } 
})
});


