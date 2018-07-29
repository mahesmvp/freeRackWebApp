var $ = jQuery.noConflict();

$('document').ready(function(){


	$("#btnSignUp").click(function(e){

		e.preventDefault();
		var form_data = {

			"fname" : $("#fname").val(),
			"lname" : $("#lname").val(),
			"dob" : $("#dob").val(),
			"email" : $("#email").val(),
			"password" : $("#password").val(),
			"contact_info" : parseInt($("#contact").val())
		};

		$.ajax({
			url: "http://ec2-34-215-161-202.us-west-2.compute.amazonaws.com/FreeRack/api/actions/createUsersDetails.php",
			method: "POST",
			dataType: "json",
			data: form_data,
			success: function(data) {
				alert(data);
			}
		});

	});

});