/* bxSlider Author:
DANNY POSTMA
www.dannypostma.com
*/
/*
I think that's a shit plugin. My grandma is better than him.
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

		var slideToInfo = function(node){
			var transform_N = -270;
			var translate3d_N = 'translate3d('+((parseInt($(node).attr('data-slide-index'))+1)*parseInt(transform_N)).toString()+'px, 0px, 0px)';
			$('ul.bxslider.appslider').css('transition','0.5s');
			$('ul.bxslider.appslider').css('transform', translate3d_N);
			return false;
		}

		$('div.android-image a.bx-pager-link').click(function(e){
			e.preventDefault();
			e.stopPropagation();
			$('div.android-image a.bx-pager-link').css('background','none repeat scroll 0 0 #666666');
			$(this).css('background','none repeat scroll 0 0 #000000');
			slideToInfo(this);
		});
		$('div.info-box').hover(function(){
			var phone_button;
			slideToInfo(this);
			$('div.android-image a.bx-pager-link').css('background','none repeat scroll 0 0 #666666');
			$('div.android-image a.bx-pager-link').eq(parseInt($(this).attr('data-slide-index'))).css('background','none repeat scroll 0 0 #000000');
			return false;
		});
});