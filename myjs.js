$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

// Pause / play btn funtionality
var carouselState = false;

$('.pause-button').click(function () {
  
  if(carouselState){
    $('.carousel').carousel('cycle');
    console.log('cycle')
  } else {
    $('.carousel').carousel('pause');
    console.log('pause')
  }
  // $('#home-pause').toggleClass('play-btn');
  carouselState = !carouselState;
});