(function($){	
	
	// -------------------------------------------------------------------------------------------------------
	// Form Validation script - used by the Contact Form script
	// -------------------------------------------------------------------------------------------------------
	
	function validateMyAjaxInputs() {
		
		$.validity.start();
		// Validator methods go here:
		$("#name")
			.require()
			.assert(
				( $("#name").val() != 'Your name' ), 
				"Your Name is required."
		  	 );

		$("#email")
			.require()
			.assert(
				( $("#email").val() != 'Your e-mail address' ), 
				"Email is required."
		   )
			.match("email");
			
		$("#subject")
			.require()
			.assert(
				( $("#subject").val() != 'Subject' ), 
				"Subject is required."
		   );
			
		$("#message").require();	

		// End the validation session:
		var result = $.validity.end();
		return result.valid;
	}
	
	// -------------------------------------------------------------------------------------------------------
	// ClearForm 
	// -------------------------------------------------------------------------------------------------------
	
	$.fn.clearForm = function() {
		return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
		return $(':input',this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
		this.value = '';
		else if (type == 'checkbox' || type == 'radio')
		this.checked = false;
		else if (tag == 'select')
		this.selectedIndex = -1;
		});
	};
	

	$(document).ready(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////						   
		
		// -------------------------------------------------------------------------------------------------------
		// Contact Form 
		// -------------------------------------------------------------------------------------------------------
		
		$("#contact-form").submit(function () {
								
			if (validateMyAjaxInputs()) { //  procced only if form has been validated ok with validity
				var str = $(this).serialize();
				$.ajax({
					type: "POST",
					url: "_layout/php/send.php",
					data: str,
					success: function (msg) {
						$(document).ajaxComplete(function (event, request, settings) {
							if (msg == 'OK') { // Message Sent? Show the 'Thank You' message
								result = '<div class="alert alert-success">Your message has been sent. Thank you!</div>';
								$('#contact-form').clearForm();
							} else {
								result = msg;
							}
							$("#formstatus").html(result);
						});
					}
		
				});
				return false;
			}
		});

		 
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	});
	
})(window.jQuery);	

// non jQuery scripts below