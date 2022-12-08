

// Slide list image tin tuc
$(document).ready(function () {
$('.image-tintuc').slick({
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows:true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
	nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
});
});