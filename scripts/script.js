// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}



// End of Your Code . Don't delete that line below!!
});


let y = document.getElementsByTagName("h2");
let i;
for (i = 0; i < y.length; i++) {
	const circleType = new CircleType(y[i]).radius(200)
}