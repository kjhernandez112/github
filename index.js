$(document).ready(function(){

// //respond to a click of button-1

// var button = $('#button-1');
// button.click(function(){
// 	//grab the value of input

// var value =	$('#field-1').val()
// $('#display').append("<li class='input-1'>" + value + "</li>");	
// 	});

	

// $('#button-2').click(function() {
// 	var value =	$('#field-2').val()
// 	$('#display').append("<li class='input-1'>" + value + "</li>");	

// })
// //you can copy lines 15-19 for the first button as well//

// });

//can also use this as well instead of above

$('#button-1').click(function() {
	var value =	$('#field-1').val()
	display(value);
});

$('#button-2').click(function() {
	var value =	$('#field-2').val()
	display(value);


})

// // //must define value 
// // display(must be defined) on lines 33 and 28
// argument must be defined on line 41 and 42
	
function display(argument){
	$('#display').append("<li class='input-1'>" + argument + "</li>");	
	}
});


//$('h1').css('background-color', 'yellow');	
//button.html('do not click');