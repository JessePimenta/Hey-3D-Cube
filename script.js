

var $bg = $('#bg');

$(function(){
  $bg.fadeIn(15000).fadeOut(10).fadeIn(20000).css('color','grey');
console.log('bg delay started');


$('.container').click(function(){
  var self = $(this);
  var Width = 600;
  var Height = 600;

  thisWidth = Math.floor(Math.random()*(Width)) + 1; //+1 to avoid 0px width
  thisHeight = Math.floor(Math.random()*(Height)) + 1; //+1 to avoid 0px height

  $('#n1, #n2, #n3, #n4, #n5, #n6').css({
    "width":thisWidth,
			"height":thisHeight,
  })
  $('.cube').css({
    "width": thisWidth,
    "height": thisHeight
  })
})


var text = "Talk To You Soon";

for(var i in text) {
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") );
  } else {
    $(".wavetext").append( $("<span>").text(text[i]) );
  }
}
})
