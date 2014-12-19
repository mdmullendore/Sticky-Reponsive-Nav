$(document).ready(function(){

	$('.icon-bars').on('click', function(){
		$('nav ul:nth-child(3)').toggle();
		$(this).toggleClass('active');
	});

	$(window).on('resize', function(){
		if( $(window).width() > 768 && $('nav ul:nth-child(3)').css({"display":"none"}) ){
			$('nav ul:nth-child(3)').css({
				"display": 'inline-block'
			});
		}
	});

});