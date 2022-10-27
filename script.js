let slideIndex = 0;
showSlides();


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
slideIndex = 0;


window.onload = function(e) {
  var offset = document.getElementsByClassName('secnav')[0].offsetTop;
  var menu = document.getElementsByClassName('secnav')[0];
  var text = document.getElementsByClassName('links')[0];

  document.addEventListener('scroll', function() {
      if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
          menu.style.position = 'fixed';
          menu.style.background = 'gray';
          text.style.zIndex = 3;
              } 
              
              else {
          menu.style.position = 'initial';
          menu.style.background = 'transparent';
      }
  });
}