window.onload = function() {
  var $get = $('#container');

$.getJSON('hvordan.json', function(data) {
  $get.html('');

  //json to array decreasing
  var arr = Object.keys(data.Articles).map(function(k) { return data.Articles[k] });
  //sort array
  arr.sort(function(a, b) {
    return parseFloat(b.Views) - parseFloat(a.Views);
  });
  console.log(arr);

  //json to array decreasing sort
  var arr2 = Object.keys(data.Articles).map(function(k) { return data.Articles[k] });

  arr2.sort(function(a, b) {
    return parseFloat(b.Date) - parseFloat(a.Date);
  });

  //main menu categories
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

  //main content
  $.each(arr2, function(key, val) {
    if(val.Image === 'Car1.jpg') {
      $('.articles').append('<div class="otherimg"><img class="other" src="./images/Car1.jpg" />' +
      '<h3 class="title">' + val.Title + '</h3><p class="desc">' + val.Intro + '</p></div>');
    }
    else if(val.Image === 'Car3.jpg') {
      $('.articles').append('<div class="otherimg"><img class="other" src="./images/Car3.jpg" />' +
      '<h3 class="title">' + val.Title + '</h3><p class="desc">' + val.Intro + '</p></div>');
    }
  });

  //sidemenu
  $.each(arr, function(key, val) {
    if(val.Image === 'Paintingfloor.jpg') {
      $('.sidediv').append('<div class="imgs"><img class="other" src="./images/Paintingfloor.jpg" /><h3>'+val.Title+'</h3></div>');
    }
    else if(val.Image === 'Car3.jpg') {
      $('.sidediv').append('<div class="imgs"><img class="other" src="./images/Car3.jpg" /><h3>'+val.Title+'</h3></div>');
    }
    else if(val.Image === 'Boat1.jpg') {
      $('.sidediv').append('<div class="imgs"><img class="other" src="./images/Boat1.jpg" /><h3>'+val.Title+'</h3></div>');
    }
    else if(val.Image === 'Boat2.jpg') {
      $('.sidediv').append('<div class="imgs"><img class="other" src="./images/Boat2.jpg" /><h3>'+val.Title+'</h3></div>');
    }
    else if(val.Image === 'Appletree.jpg') {
      $('.sidediv').append('<div class="imgs"><img class="other" src="./images/Appletree.jpg" /><h3>'+val.Title+'</h3></div>');
    }

  });
});

//for the menu
$(document).ready(function(){
	$('#hamburger').click(function(){
    $('#hamburger').css('display', 'none');
    $('#exit').css('display', 'block');
		$('.cat').slideToggle();
	});
  $('#exit').click(function() {
    $('#exit').css('display', 'none');
    $('#hamburger').css('display', 'block');
    $('.cat').slideToggle();
  });
});
};
