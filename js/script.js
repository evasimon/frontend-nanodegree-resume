// Click event on to the Humburger Icon; slide in horizontal menu bar; 

$('#menu').click(function() {
	$('#slideOut').addClass('open');
	$("body").append('<div id="mainOverlay" style="opacity: 1;"></div>');
	$('#mainOverlay').click(function() {
		$('#slideOut').removeClass('open');
		$(this).remove();
	});
	event.stopPropagation();
});
