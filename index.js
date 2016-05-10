$(document).ready(function(){

//respond to a click of button-1

var button = $('#button-1');

button.click(function(){
	//grab the value of input

var value =	$('#field-1').val()
$('#display').append("<li class='input-1'>" + value + "</li>");

	});

});

//$('h1').css('background-color', 'yellow');	