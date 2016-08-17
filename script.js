

var $bg = $('#bg');

$(function(){
  $bg.fadeIn(15000).fadeOut(10).fadeIn(20000).css('color','grey');
console.log('bg delay started');



var text = "Talk To You Soon";

for(var i in text) {
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") );
  } else {
    $(".wavetext").append( $("<span>").text(text[i]) );
  }
}
})
