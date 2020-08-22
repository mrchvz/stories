$(document).ready(function(){
	$('body').append('<div id="sidr">' +
					 	'<ul>' +
					 		'<li><a href="/home">Home</a></li>' +
					 		'<li><a href="/about">About</a></li>' +
					 		'<li><a href="/signups/new">Contact</a></li>' +
					 		'<a id="btnClose" href=""><img src="/assets/close-white.svg"></button></a>' +
					 	'</ul>' +
					 '</div>');

	$('#menu').sidr({
		displace:false
	});

    $('#btnClose').click(function(){ // when 'btnClose' is clicked…
        $.sidr('close', 'sidr');  // close the div with the ID of "sidr"
    });
})

$(document).ready(function() {

});
