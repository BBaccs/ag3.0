$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});


var carouselState = false;

$('#home-pause').click(function () {

 
  if(carouselState){
    $('#homeCarousel').carousel('cycle');
  } else {
    $('#homeCarousel').carousel('pause');
  }
  
  $('#home-pause').toggleClass('play-btn');
  carouselState = !carouselState;
});



// $("home-pause").click(function() {
//   if ($(this).attr("id") === "home-pause") {
//     $('#homeCarousel').carousel('pause');
//     $(this).attr("id", "home-play");
//     $("button", this).toggleClass("glyphicon-play glyphicon-pause");
//   } else {
//     $('#homeCarousel').carousel('cycle');
//     $(this).attr("id", "home-pause");
//     $("button", this).toggleClass("glyphicon-pause glyphicon-play");
//   }
// });

//Picture element HTML5 shiv
document.createElement("picture");