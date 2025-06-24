let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("proj_img");
  if (n > slides.length) {slideIndex = 1} // if we are past the end, reset to first   
  if (n < 1) {slideIndex = slides.length} //wrap around
  for (i = 0; i < slides.length; i++) {//set all slides to display as none
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  //set the one we want to display
}