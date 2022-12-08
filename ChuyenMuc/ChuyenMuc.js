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
const tab1Item = $('.chuyenmuc .tab1');
const tab2Item = $('.chuyenmuc .tab2');
const tab3Item = $('.chuyenmuc .tab3');

itemClick.on('click', (e)=> {
  var eTarget = e.currentTarget;
  console.log(eTarget);
  if(!$(eTarget).hasClass('active-tab')){
    $(itemClick).removeClass('active-tab')
    $(eTarget).addClass('active-tab');
    if($(eTarget).hasClass('clicktab1')){
      $(tab1Item).css("display","block")
      $(tab2Item).css("display","none")
    } else {
      $(tab2Item).css("display","block")
      $(tab1Item).css("display","none")
    }
    if($(eTarget).hasClass('clicktab2')){
      $(tab2Item).css("display","block")
      $(tab3Item).css("display","none")
    } else {
      $(tab3Item).css("display","block")
      $(tab2Item).css("display","none")
    }


  } else {
    $(itemClick).removeClass('active-tab')
    $(eTarget).addClass('active-tab');

  }
})
});


