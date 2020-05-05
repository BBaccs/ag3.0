$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});


var carouselState = false;

$('.pause-btn').click(function () {
  if(carouselState){
    $('#homeCarousel').carousel('cycle');
  } else {
    $('#homeCarousel').carousel('pause');
  }
  $('#home-pause').toggleClass('play-btn');
  carouselState = !carouselState;
});

conditionizr.on('safari', function () {
  $('.sticky-top').removeClass('nav-border');
});

//Picture element HTML5 shiv
document.createElement("picture");