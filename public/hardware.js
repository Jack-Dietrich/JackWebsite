let slideIndex = 1;
showSlides(slideIndex);
//no is used for the number of the current slide so if a page has multiple slideshows, it only cycles thru one at a time
function plusSlides(n,no) {
  showSlides(slideIndex += n,no);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n,no) {
  let i;
  let slides = document.getElementsByClassName("proj_img" + no);
  if (n > slides.length) {slideIndex = 1} // if we are past the end, reset to first   
  if (n < 1) {slideIndex = slides.length} //wrap around
  for (i = 0; i < slides.length; i++) {//set all slides to display as none
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  //set the one we want to display
}