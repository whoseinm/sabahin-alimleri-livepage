$(document).ready(function() {

	var a=false;


	$('#mmw').height($(window).height())

	$('.fa-bars').click(function(event) {

		if(a==false){

			$('#mmw').removeClass('hidden')
			$('#mmw').css('transform', 'translateX(0)')
			a=true

		}else{

			$('#mmw').addClass('hidden')
			$('#mmw').css('transform', 'translateX(-300px)')
			a=false

		}

	});
	
});