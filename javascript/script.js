$(document).ready(

	//string of all characters
	//string of user character
	//string of remainig defenders


	function() {
		
	var GameStart = function() {	
		$('.fighter').on('click',
			function() {
			$(this).fadeOut('slow');
			console.log(this);
			});
		};
	GameStart ();

	});