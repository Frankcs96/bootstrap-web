

//W3SCHOOL Smooth scroll
$(document).ready(function(){

  $("a").on('click', function(event) {


    if (this.hash !== "") {

      event.preventDefault();

      // Store hash
      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){


        window.location.hash = hash;
      });
    }
  });
});


  // Closes mobile menu when you click a link
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


// Change navbar when you scroll down
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);




