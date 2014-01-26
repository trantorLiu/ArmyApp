/* bxSlider Author:
DANNY POSTMA
www.dannypostma.com
*/
/*
I think that's a shit plugin. My grandma is better than him.
*/
"use strict";
$(document).ready(function(){
		"use strict";
		$('.testimonialsslider').bxSlider({
			 auto: true,
			 autoControls: false
		});
		var slideToInfo = function(node){
			var shift_base = -270;
			var total_shift = shift_base*parseInt($(node).attr('data-slide-index'))+'px'
			console.log(total_shift);
			$('#info div.android-image div.slider-app .appslider li').css('left' ,total_shift);
			return false;
		}
		var changeNaviColor = function(node){
			$('a.navi-node').addClass('not-chosen');
			$('a.navi-node').eq(parseInt($(node).attr('data-slide-index'))).addClass('choose');
			//$('a.navi-node').css('background', '#666666');
			//$('a.navi-node').eq(parseInt($(node).attr('data-slide-index'))).css('background', '#000000');
			return false;
		}

		$('div.info-box, a.navi-node').hover(function(e){
			slideToInfo(this);
			changeNaviColor(this);
			return false;
		});
		$('a.navi-node').click(function(e){
			slideToInfo(this);
			changeNaviColor(this);
			return false;
		});
});