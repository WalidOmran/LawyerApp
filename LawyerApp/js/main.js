$(function (){
    "use strict";
    // Caching The Scroll Top Element 
	$(window).scroll(function () {
		
		if ($(this).scrollTop() >= 60) {
			$('.nav-home').css('background','rgba(80, 60, 90,1)');
		} else {
			$('.nav-home').css('background','transparent');
		}
	});
    // Smoothly Scroll To Element
    $('.nav-link').click(function (e){
        e.preventDefault();
        $('html,body').animate({ scrollTop: $($(this).data('value')).offset().top},1000);
        
    });  
    
    // pupup
    $('.our-video .play .show').click(function(){
        $('.popup').fadeIn(1000);
    });
    $('.popup .inner .close').click(function(){
        $('.popup').fadeOut(1000);
    });
    
    // Elevator 
    $.elevator();

    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    // FitText
    $('.navbar-brand , h1').fitText(.6, { minFontSize: '25px', maxFontSize: '35px' });
    $('.slider h1').fitText(.6, { minFontSize: '25px', maxFontSize: '34px' });
    $('.h1').fitText(.6, { minFontSize: '30px', maxFontSize: '37px' });
    $('p').fitText(.6, { minFontSize: '13px', maxFontSize: '15px' });
   

   
});



