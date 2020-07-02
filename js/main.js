$(document).ready(function(){

 	// setTimeout(ocultar,4000);

	function ocultar(){
		$('.loader').addClass('ocultar');
	}




	$(document).scroll(function(){
		var pocision = $(document).scrollTop();


		console.log(pocision)
		if (pocision>=442 && pocision<=642){
			$('.huerta').addClass('salida');
			
		}
	});
});