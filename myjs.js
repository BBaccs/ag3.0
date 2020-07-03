$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

// Pause / play btn funtionality
var carouselState = false;

$('.pause-button').click(function () {
  
  if(!carouselState){
    $('#home-carousel').carousel('pause');
  } else {
    $('#home-carousel').carousel('cycle');
  }
  carouselState = !carouselState;
});

// Fallback for browsers that don't support the HTML5 Picture element
document.createElement("picture");