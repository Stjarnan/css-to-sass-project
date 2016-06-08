$(document).ready(function() {
	// When a user clicks the menu icon, the navigation should show. 
	// When the user clicks the icon again it should hide again. 
	$("#menubutton").click(function(event) {
		event.preventDefault();
		$(".main-nav ul").slideToggle('slow');
	});
})
