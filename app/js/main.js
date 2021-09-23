$(function () {
  $(".menu-btn").on("click", function() {
		$(".header-bottom").fadeToggle();
		$(".menu-btn").toggleClass("open-menu");
		$(".header-wrapper").toggleClass("open-menu");
		$("body").toggleClass("noscroll");
});

$(window).on("scroll", function() {
		var height = $(document).scrollTop().valueOf();
		/*Если сделали скролл на 50px задаём новый класс для header*/
		if (height >= 50) {
				$("header").addClass("sticky");
		} else {
				/*Если меньше 50px удаляем класс для header*/
				$("header").removeClass("sticky");
		}
});
$(".masked-phone").inputmask({
	mask: "+7 (999) 999-99-99",
	clearIncomplete: true,
	showMaskOnHover: false,
});
$('.tan').on('click', function() {
	$('.tan').toggleClass('open-menu');

});
});
