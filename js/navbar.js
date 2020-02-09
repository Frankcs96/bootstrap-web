

  // Add a class to the navbar so when we scroll down it changes
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {

      $("#mainNav").addClass("navbar-shrink");
    } else {

      $("#mainNav").removeClass("navbar-shrink");
    }

  };

  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);






