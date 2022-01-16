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
  setTimeout(showSlides, 5000); // Change image every 7 seconds
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

// contact form

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


(function() {

  'use strict';

  document.querySelector('.material-design-hamburger__icon').addEventListener(
    'click',
    function() {      
      var child;
      
      document.body.classList.toggle('background--blur');
      this.parentNode.nextElementSibling.classList.toggle('menu--on');

      child = this.childNodes[1].classList;

      if (child.contains('material-design-hamburger__icon--to-arrow')) {
        child.remove('material-design-hamburger__icon--to-arrow');
        child.add('material-design-hamburger__icon--from-arrow');
      } else {
        child.remove('material-design-hamburger__icon--from-arrow');
        child.add('material-design-hamburger__icon--to-arrow');
      }

    });

})();

//


function resizeNav() {
  // Set the nav height to fill the window
  $("#nav-fullscreen").css({"height": window.innerHeight});

  // Set the circle radius to the length of the window diagonal,
  // this way we're only making the circle as big as it needs to be.
  var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
  var diameter = radius * 2;
  $("#nav-overlay").width(diameter);
  $("#nav-overlay").height(diameter);
  $("#nav-overlay").css({"margin-top": -radius, "margin-left": -radius});
}

// Set up click and window resize callbacks, then init the nav.
$(document).ready(function() {
  $("#nav-toggle").click(function() {
      $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
  });

  $(window).resize(resizeNav);

  resizeNav();

window.setTimeout(function() {
   $("#nav-toggle").click();
}, 1000)
});
