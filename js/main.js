$(document).ready(function() {
	$('.burger').click(function() {
		$('.menu').slideToggle('500');
		$('.header').toggleClass('header__bg', 500);
		$('.logo__inner').toggleClass('display-none');
		$('.social').toggleClass('display-block');
		$(this).toggleClass('open');
	});
	$('.main__sonnik').delay(800).animate({left: "0px" },1200,"linear");
	new WOW().init();
});

