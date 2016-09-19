$(function() {

  // IDs for each major section and its corresponding link in the navbar
  var sectionLinkIDs = [
    {
      section: "#header",
      link: "#link-profile"
    }, {
      section: "#workExperience",
      link: "#link-work"
    }, {
      section: "#projects",
      link: "#link-projects"
    }, {
      section: "#education",
      link: "#link-education"
    }, {
      section: "#lets-connect",
      link: "#link-contact"
    }
  ];

  // Update the active link in the navbar according to the page's vertical
  // offset.
  $(window).scroll(function() {
    // The minimum distance the top of a section must be from the top of
    // the browser window in order for its corresponding link in the navbar
    // to have the "active" class.
    var minDistanceForActiveLink = 150;
    var currentWindowOffset = window.pageYOffset;
    var shouldActivateLink, distanceFromWindowTop;

    // Check through each section to see if its corresponding link
    // should be set to 'active'.
    for (var i = 0; i < sectionLinkIDs.length; ++i) {
      var ids = sectionLinkIDs[i];

      // Check this section
      if ( ids.section === "#lets-connect") {
        // Special logic for "Let's Connect" section in footer because it will never
        // reach top of window.
        var connectSectionVisible = ( window.pageYOffset + window.innerHeight - $(ids.section).offset().top ) > 0;
        shouldActivateLink = !$(ids.section).hasClass("active") && connectSectionVisible;
      } else {
        distanceFromWindowTop = Math.abs( $(ids.section).offset().top - currentWindowOffset );
        shouldActivateLink = !$(ids.link).hasClass("active") && distanceFromWindowTop < minDistanceForActiveLink;
      }

      if ( shouldActivateLink ) {
        $(".nav-item").removeClass("active");
        $(ids.link).addClass("active");
        break;
      }
    }
  });

  // Update the 'current' section in the navbar when a link
  // is clicked
  $(".nav-link").click(function() {
    $(".nav-link").parent().removeClass("active");
    $(this).parent().addClass("active");

    $(".navbar-toggler").click();
  });

});
