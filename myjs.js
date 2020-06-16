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


// This bugfix was removed because the nav border was removed but it will remain here in case we decide to bring it back.
// There is a bug in safari dealing with the navbar's border image. Check if Safari = true & chrome = false, then remove the class with the border image.
// if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
// {
//   $('.nav-border').removeClass('nav-border');      
// }