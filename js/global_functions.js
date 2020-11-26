// Rodapé - aparição pós rolagem  - HOME -------------------------------------------

$(window).scroll(function(){
			  
	$('.btn-top').click(function() 
		{ $('body,html').stop().animate({scrollTop:0},800);
		})  

	if ($(window).scrollTop() >= 2800 && window.innerWidth >= 992) {
	 $('.footer1').fadeIn('slow');
		setTimeout(
			function() {
			$('.btn-top').stop().fadeIn('slow');
			
		},
		500);
	
	}
	
	else{
	   $('.footer1, .btn-top').fadeOut('fast');
	  
	}



});


// Rodapé - aparição pós rolagem  - HISTÓRICO -------------------------------------------

$(window).scroll(function(){
			  
	$('.btn-top2').click(function() 
		{ $('body,html').stop().animate({scrollTop:0},800);
		})  

	if ($(window).scrollTop() >= 5800 && window.innerWidth >= 992) {
	 $('.footer2').fadeIn('slow');
		setTimeout(
			function() {
			$('.btn-top2').stop().fadeIn('slow');
		},
		500);
	
	}
	
	else{
	   $('.footer2, .btn-top2').fadeOut('fast');
	}



});

// Rodapé - aparição pós rolagem  - PROJETOS -------------------------------------------

$(window).scroll(function(){
			  
	$('.btn-top3').click(function() 
		{ $('body,html').stop().animate({scrollTop:0},800);
		})  

	if ($(window).scrollTop() >= 2800 && window.innerWidth >= 992) {
	 $('.footer3').fadeIn('slow');
		setTimeout(
			function() {
			$('.btn-top3').stop().fadeIn('slow');
		},
		500);
	
	}
	
	else{
	   $('.footer3, .btn-top3').fadeOut('fast');
	}



});

// Rodapé - aparição pós rolagem  - GALERIA -------------------------------------------

$(window).scroll(function(){
			  
	$('.btn-top4').click(function() 
		{ $('body,html').stop().animate({scrollTop:0},800);
		})  

	if ($(window).scrollTop() >= 3800 && window.innerWidth >= 992) {
	 $('.footer4').fadeIn('slow');
		setTimeout(
			function() {
			$('.btn-top4').stop().fadeIn('slow');
		},
		500);
	
	}
	
	else{
	   $('.footer4, .btn-top4').fadeOut('fast');
	}



});

// Rodapé - aparição pós rolagem  - GALERIA -------------------------------------------

$(window).scroll(function(){
			  
	$('.btn-top5').click(function() 
		{ $('body,html').stop().animate({scrollTop:0},800);
		})  

	if ($(window).scrollTop() >= 500 && window.innerWidth >= 992) {
	 $('.footer5').fadeIn('slow');
		setTimeout(
			function() {
			$('.btn-top5').stop().fadeIn('slow');
		},
		500);
	
	}
	
	else{
	   $('.footer5, .btn-top5').fadeOut('fast');
	}



});

		
// menu exibe imgens -------------------------------------------

$(function () {

	$('#link01').mouseover(function() 
		{ $('#img01').stop().fadeIn();
		  $('#img02, #img03, #img04, #img05').hide();
	});
	
	$('#link01').mouseout(function() 
		{ $('#img01').hide();
	}); 
	
		$('#link02').mouseover(function() 
		{ $('#img02').stop().fadeIn();
		$('#img01, #img03, #img04, #img05').hide();
	});
	
	$('#link02').mouseout(function() 
		{ $('#img02').hide();
	}); 
	
		$('#link03').mouseover(function() 
		{ $('#img03').stop().fadeIn();
		$('#img01, #img02, #img04, #img05').hide();
	});
	
	$('#link03').mouseout(function() 
		{ $('#img03').hide();
	}); 
	
		$('#link04').mouseover(function() 
		{ $('#img04').stop().fadeIn();
		$('#img01, #img02, #img03, #img05').hide();
	});
	
	$('#link04').mouseout(function() 
		{ $('#img04').hide();
	}); 
	
		$('#link05').mouseover(function() 
		{ $('#img05').stop().fadeIn();
		$('#img01, #img02, #img03, #img04').hide();
	});
	
	$('#link05').mouseout(function() 
		{ $('#img05').hide();
	}); 
});


// ----------- Serviços ----------------

$('#DD').click(function () {
	$('.select_serv').stop().fadeOut(700);
	setTimeout(
		function() {
		$('#DD_detalhe').stop().fadeIn('slow');
	},
	700);
});
	
$('#DG').click(function () {
	$('.select_serv').stop().fadeOut(700);
	setTimeout(
		function() {
		$('#DG_detalhe').stop().fadeIn('slow');
	},
	700);
});		

$('#UX').click(function () {
	$('.select_serv').stop().fadeOut(700);
	setTimeout(
		function() {
		$('#UX_detalhe').stop().fadeIn('slow');
	},
	700);
});	

$('#DI').click(function () {
	$('.select_serv').stop().fadeOut(700);
	setTimeout(
		function() {
		$('#DI_detalhe').stop().fadeIn('slow');
	},
	700);
});	

$('#IL').click(function () {
	$('.select_serv').stop().fadeOut(700);
	setTimeout(
		function() {
		$('#IL_detalhe').stop().fadeIn('slow');
	},
	700);
});		
	
$('#AP').click(function () {
	$('.select_serv').stop().fadeOut(700);
	setTimeout(
		function() {
		$('#AP_detalhe').stop().fadeIn('slow');
	},
	700);
});		
	
	
$('.volta_serv').click(function () {
	$('#DD_detalhe, #DG_detalhe, #UX_detalhe, #DI_detalhe, #IL_detalhe, #AP_detalhe').stop().fadeOut(400);
	setTimeout(
		function() {
		$('.select_serv').stop().fadeIn('fast');
	},
	400);
});

//  Diplomas e news Home  ----------------------------------


	$(function () {

		$('#img_dip1, #img_dip2, #img_dip3, #img_dip4, #img_dip5, #img_dip6, #new_1, #new_2').css({display: 'none'});
		
		$('.close, .modal, .modal-body, .modal-header').click(function () {
			$('#img_dip1, #img_dip2, #img_dip3, #img_dip4, #img_dip5, #img_dip6, #new_1, #new_2').delay(500).fadeOut();
		})
		
		$('#diploma01').click(function () {
			$('#img_dip1').delay(500).slideDown('slow');
		});
		
		$('#diploma02').click(function () {
			$('#img_dip2').delay(500).slideDown('slow');
		});
		
		$('#diploma03').click(function () {
			$('#img_dip3').delay(500).slideDown('slow');
		});
		
		$('#diploma04').click(function () {
			$('#img_dip4').delay(500).slideDown('slow');
		});
		
		$('#diploma05').click(function () {
			$('#img_dip5').delay(500).slideDown('slow');
		});
		
		$('#diploma06').click(function () {
			$('#img_dip6').delay(500).slideDown('slow');
		});




		$('#ver1').click(function () {
			$('#new_1').delay(500).slideDown('slow');
		});

		$('#ver2').click(function () {
			$('#new_2').delay(500).slideDown('slow');
		});
		
	});


//  Projetos   ----------------------------------



// galeria  -------------------------



$(document).ready(function() {
	$(".close, .modal, .modal-body, .modal-header").click(function(e) {
	  e.preventDefault();
	  $("#vid01").attr("src", $('.modal-body a').attr("href"));
   })
 });


// exibir Compartilhamentos  -------------------------

$(window).scroll(function(){

	if ($(window).scrollTop() >= 800) {
		$('.compartilhe').css({opacity: '1', transition:'0.5s'});	
	}
	
	else{
	  $('.compartilhe').css({opacity: '0', transition:'0.3s'});
	}



});