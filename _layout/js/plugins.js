(function($){
	
	
	$(document).ready(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////						   
		

		// -------------------------------------------------------------------------------------------------------
		// Imagebox - Responsive Lightbox |
		// -------------------------------------------------------------------------------------------------------
		
		imagebox.build();
		
		// -------------------------------------------------------------------------------------------------------
		// FlexSlider - responsive slider |
		// -------------------------------------------------------------------------------------------------------
		
		$('.flexslider').flexslider({
			animation: "fade",            //String: Select your animation type, "fade" or "slide"
			slideshow: false,              //Boolean: Animate slider automatically
			slideshowSpeed: 7000,         //Integer: Set the speed of the slideshow cycling, in milliseconds
			initDelay: 0,                 //Integer: Set an initialization delay, in milliseconds
			pauseOnAction: true,          //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
			pauseOnHover: true,          //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
			video: false,                 //Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
			// Primary Controls
			controlNav: true,            //Boolean: Create navigation for paging control of each clide?
			directionNav: true,           //Boolean: Create navigation for previous/next navigation? (true/false)
			prevText: "Previous",         //String: Set the text for the "previous" directionNav item
			nextText: "Next"              //String: Set the text for the "next" directionNav item
		});


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	});

})(window.jQuery);

// non jQuery plugins below

