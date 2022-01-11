// slider

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide-show");
  var dott = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dott.length; i++) {
    dott[i].className = dott[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dott[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 7 seconds
}

// scroll function

$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.button_container').fadeIn();
  } else {
    $('.button_container').fadeOut();
  }
});

$("#overlay").mouseenter(function(){
  $("body").css("overflow", "hidden"); 
}).mouseleave(function(){
  $("body").css("overflow", "visible");
});

// contact

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

//scroll reveal
//ScrollReveal().reveal('.testing');
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName("typewriter");
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
              addClass(animatedBox, "fade-in");
          }
      });
  });
});

function addClass(element, className) {
  const arrayClasses = element.className.split(" ");
  if (arrayClasses.indexOf(className) === -1) {
      element.className += " " + className;
  }
}