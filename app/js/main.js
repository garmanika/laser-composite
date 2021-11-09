$(window).on("scroll", function() {
	var height = $(document).scrollTop().valueOf();
	/*Если сделали скролл на 50px задаём новый класс для header*/
	if (height >= 81) {
			$("header").addClass("sticky");
	} else {
			/*Если меньше 50px удаляем класс для header*/
			$("header").removeClass("sticky");
	}
});
$(function () {
  $(".menu-btn").on("click", function() {
		$(".header-bottom").fadeToggle();
		$(".menu-btn").toggleClass("open-menu");
		$(".header-wrapper").toggleClass("open-menu");
		$("body").toggleClass("noscroll");
});


$(".masked-phone").inputmask({
	mask: "+7 (999) 999-99-99",
	clearIncomplete: true,
	showMaskOnHover: false,
});
$('.tan').on('click', function() {
	$('.tan').toggleClass('open-menu');

});
const breakpoint = window.matchMedia('(min-width: 575px)');

// keep track of swiper instances to destroy later
let mySwiper;

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const breakpointChecker = function() {

		// if larger viewport and multi-row layout needed
		if (breakpoint.matches === true) {

				// clean up old instances and inline styles when available
				if (mySwiper !== undefined) mySwiper.destroy(true, true);

				// or/and do nothing
				return;

				// else if a small viewport and single column layout needed
		} else if (breakpoint.matches === false) {

				// fire small viewport version of swiper
				return enableSwiper();
		}
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const enableSwiper = function() {
		mySwiper = new Swiper(".tenet-items", {
				slidesPerView: 1,
				spaceBetween: 30,
				pagination: {
						el: ".tenet-items-pagination",
						clickable: true,
				},
		});


};


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);

// kickstart
breakpointChecker();

//
$(".up").click(function(event) {
	event.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});
$(window).scroll(function() {
	if ($(this).scrollTop() > 500) {
		$(".up").fadeIn();
	} else {
		$(".up").fadeOut();
	}
});
const swiper = new Swiper('.catalog-detail-slider', {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 30,
	// If we need pagination
	pagination: {
	  el: '.catalog-detail-slider > .swiper-pagination',
	  clickable: true,
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.catalog-detail-slider-wrapper > .swiper-button-next',
	  prevEl: '.catalog-detail-slider-wrapper > .swiper-button-prev',
	},
  
	// And if we need scrollbar

  });
	$("[data-fancybox=images]").fancybox({
		backFocus: false,
});
});
