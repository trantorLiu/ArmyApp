/* Author:
DANNY POSTMA
www.dannypostma.com
*/
$(document).ready(function(){
		"use strict";
		$('.testimonialsslider').bxSlider({
			 auto: true,
			 autoControls: false
		});
		
		
		var sliderTestimonial = $('.appslider').bxSlider({
			 auto: false,
			 autoControls: false
		});


		$('.first-box').hover(function(){
            $('ul.bxslider.appslider').css('transform','translate3d(-270px, 0px, 0px)');
			return false;
		});
		$('.second-box').hover(function(){
            $('ul.bxslider.appslider').css('transform','translate3d(-540px, 0px, 0px)');
			return false;

		});
		$('.third-box').hover(function(){
            $('ul.bxslider.appslider').css('transform','translate3d(0px, 0px, 0px)');
			return false;
		});
});