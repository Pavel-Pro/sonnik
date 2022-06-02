$(document).ready(function() {
	// $('.burger').click(function() {
	// 	$('.menu-right').toggleClass('active-menu')
	// 	$('.menu-left').toggleClass('active-menu');
	// 	$(this).toggleClass('open');
		// $('.burger__item:first-child').toggleClass('burger__item-top')
		// $('.burger__item:nth-child(2)').toggleClass('burger__item-middle')
		// $('.burger__item:last-child').toggleClass('burger__item-bottom');
	// });
	// $('.testimonials__slider').slick({
	//     slidesToShow: 1,
	//     dots: true    
	// });
	$('.main__sonnik').delay(800).animate({left: "0px" },1200,"linear");
	new WOW().init();
});

