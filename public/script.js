window.onload = function() {
  var $get = $('#container');

$.getJSON('hvordan.json', function(data) {
  $get.html('');

  $.each(data.Categories, function(key, val) {
    $('.cat').append('<p class="pcat" id=' + val.ID + '>' + val.Title + '</p>');
    $('.cat').append('<div class="seperator"></div>');
    if(val.ID === 1) {
      $('#1').css('border-bottom', '4px solid' + val.Color);
    }
    else if(val.ID === 2) {
      $('#2').css('border-bottom', '4px solid' + val.Color);
    }
    else if(val.ID === 3) {
      $('#3').css('border-bottom', '4px solid' + val.Color);
    }
    else if(val.ID === 4) {
      $('#4').css('border-bottom', '4px solid' +val.Color);
    }
    else if(val.ID === 5) {
      $('#5').css('border-bottom', '4px solid' + val.Color);
    }
    else if(val.ID === 6) {
      $('#6').css('border-bottom', '4px solid' + val.Color);
    }
  });

/*
  $.each(data.Articles, function(key, val) {
    $('.articles').append('<p>' + val.Title + '</p>');
  });*/
});

$(document).ready(function(){
	$('#hamburger').click(function(){
		$('.cat').slideToggle();
	});
});
};
