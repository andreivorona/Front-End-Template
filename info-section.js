let el = document.getElementById("card-holder-img");
let slideshowContainer = document.getElementById("slideshow-container");

let xIcon = document.getElementById("x-icon");

slideshowContainer.style.display = "none";

el.addEventListener("click", () => {
    if (slideshowContainer.style.display === "none") {
        slideshowContainer.style.display = "block";
    };  
});

xIcon.addEventListener("click", () => {
    if (slideshowContainer.style.display === "block") {
        slideshowContainer.style.display = "none";
    }   
});

// slideshow js

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}