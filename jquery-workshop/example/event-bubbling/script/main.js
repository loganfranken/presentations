$(function() {

	$('.bubble-container').click(function() {
		$(this).addClass('bubbled');
	});
	
	$('.bubble-clear').click(function() {
		$('.bubble-container').removeClass('bubbled');
	});

});