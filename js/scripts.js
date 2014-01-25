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

		var slideToInfo = function(node){
			var transform_N = -270;
			//alert($(node).attr('data-slide-index'));
			var translate3d_N = 'translate3d('+((parseInt($(node).attr('data-slide-index'))+1)*parseInt(transform_N)).toString()+'px, 0px, 0px)';
			$('ul.bxslider.appslider').css('transition','0.5s');
			$('ul.bxslider.appslider').css('transform', translate3d_N);
			return false;
		}

		$('div.android-image a.bx-pager-link').click(function(e){
			e.preventDefault();
			e.stopPropagation();
			slideToInfo(this);
		});
		$('.first-box').hover(function(){
			//slideToInfo(this);
            $('ul.bxslider.appslider').css('transition','0.5s');
            $('ul.bxslider.appslider').css('transform','translate3d(-270px, 0px, 0px)');
			return false;
		});
		$('.second-box').hover(function(){
			//slideToInfo(this);
            $('ul.bxslider.appslider').css('transition','0.5s');
            $('ul.bxslider.appslider').css('transform','translate3d(-540px, 0px, 0px)');
			return false;

		});
		$('.third-box').hover(function(){
			//slideToInfo(this);
            $('ul.bxslider.appslider').css('transition','0.5s');
            $('ul.bxslider.appslider').css('transform','translate3d(-810px, 0px, 0px)');
			return false;
		});

});