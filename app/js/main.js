(function() {
	$("#nav_section3").swipe({
		swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection){
        	if (currentDirection == 'left') {
        		$("#nav_section3").scrollLeft($("#nav_section3").scrollLeft() + 10);
        	} else if(currentDirection == 'right') {
        		$("#nav_section3").scrollLeft($("#nav_section3").scrollLeft() - 10);
        	}
        }
	});

}())

