(function() {

	//Фмксмрование шапок при прокрутке страницы
	var body_scroll = $("html").scrollTop();
	var main_menu_scroll = $(".main_menu").offset().top;
	$(window).scroll(function(){
		if ( $("html").scrollTop() > body_scroll) {
			$('header').css('transform', 'translateY(-100%)')
			$(".main_menu").removeClass('top')
		} else {
			$('header').css('transform', 'translateY(0)')
			$(".main_menu").addClass('top')
		}
		body_scroll = $("html").scrollTop();

		if (body_scroll > main_menu_scroll) {
			$(".main_menu").addClass('fixed')
		} else {
			$(".main_menu").removeClass('fixed')
		}
    })

	//section_1 активация подменю
	$('.dropdown_link').mouseenter(function(){
  		$(this).find('.dropdown_block').addClass('open');
	});
	$('.dropdown_link').mouseleave(function(){
  		$(this).find('.dropdown_block').removeClass('open');
	});

	//section_3 свайп меню
	$("#nav_section3").swipe({
		swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection){
        	if (currentDirection == 'left') {
        		$("#nav_section3").scrollLeft($("#nav_section3").scrollLeft() + 10);
        	} else if(currentDirection == 'right') {
        		$("#nav_section3").scrollLeft($("#nav_section3").scrollLeft() - 10);
        	}
        }
	});

	//section_3 якорное переключение блоков
	$('#nav_section3').find('a').on('click', function(e) {
		e.preventDefault();
		var link = $(this).attr('href');
		$('#nav_section3').find('.active').removeClass('active');
		$(this).parent('li').addClass('active');
		console.log(link);
		$('.nav_contents').find('.active').removeClass('active');
		$('.nav_contents').find(link).addClass('active');
		return false;
	})
}())

