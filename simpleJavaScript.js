// There is a bug in safari dealing with the navbar's border image. Check if Safari = true & chrome = false, then remove the class with the border image.
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
  $('.nav-border').removeClass('nav-border');      
}

// Fallback for browsers that don't support the HTML5 Picture element
document.createElement("picture");