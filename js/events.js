$(function() {

    // IDs for each major section and its corresponding link in the navbar
    var sectionLinkIDs = [{
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
    }];
    // Convenience function that returns the section id for the corresponding link or ""
    // if not found
    sectionLinkIDs.sectionIDforLink = function(linkID) {
        var sectionID = "";

        var currentLink;
        for (var i = 0; i < sectionLinkIDs.length; ++i) {
            currentLink = sectionLinkIDs[i].link.slice(1);
            if (currentLink === linkID) {
                sectionID = sectionLinkIDs[i].section;
                break;
            }
        }
        return sectionID;
    };

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
            if (ids.section === "#lets-connect") {
                // Special logic for "Let's Connect" section in footer because it will never
                // reach top of window.
                var connectSectionVisible = (window.pageYOffset + window.innerHeight - $(ids.section).offset().top) > 0;
                shouldActivateLink = !$(ids.section).hasClass("active") && connectSectionVisible;
            } else {
                distanceFromWindowTop = Math.abs($(ids.section).offset().top - currentWindowOffset);
                shouldActivateLink = !$(ids.link).hasClass("active") && distanceFromWindowTop < minDistanceForActiveLink;
            }

            if (shouldActivateLink) {
                $(".nav-item").removeClass("active");
                $(ids.link).addClass("active");
                break;
            }
        }
    });

    // Update the 'current' section in the navbar when a link
    // is clicked
    $(".nav-link").click(function(event) {
        event.preventDefault();

        // Update link in navbar
        $(".nav-link").parent().removeClass("active");
        $(this).parent().addClass("active");

        // Scroll to linked section
        var linkID = $(this).parent().attr("id");
        var section = sectionLinkIDs.sectionIDforLink(linkID);
        if (section.length > 0) {
            $("body").animate({
                scrollTop: $(section).offset().top
            });
        }

    });

    // A transparent overlay is placed over the map in order to prevent the
    // map from reading scrolling events from the mouse or trackpad until
    // the overlay is clicked. This helps prevent the user from getting
    // 'trapped' in the map during scrolling.
    // See: http://stackoverflow.com/questions/21992498/disable-mouse-scroll-wheel-zoom-on-embedded-google-maps
    $(".overlay").click(function() {
        $(this).css("pointer-events", "none");
    });

});
