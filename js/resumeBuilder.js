/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
Biography
*/
var bio = {
  name: "Hans Yelek",
  role: "Web Developer",
  contacts: {
    mobile: "303-847-5273",
    email: "hnyelek@gmail.com",
    github: "h-n-y",
    githubURL: "https://github.com/h-n-y",
    location: "Boulder, CO"
  },
  greeting: "Hi! I'm Hans.",
  welcomeMessage: "I develop applications for the web and mobile.",
  skills: ["Front-End Web", "iOS"],
  biopic: "images/me.jpg"
};


/*
  Education
*/
var education = {
  schools: [
    {
      name: "University of Colorado, Boulder",
      location: "Boulder, CO",
      degree: "Computer Science",
      majors: ["BS"],
      dates: "September 2013 - May 2015",
      url: "http://www.colorado.edu"
    },
    {
      name: "Front Range Community College",
      location: "Fort Collins, CO",
      degree: "Computer Science",
      majors: ["AA"],
      dates: "September 2011 - May 2013",
      url: "http://www.frontrange.edu"
    }
  ],
  onlineCourses: [
    {
      title: "Front-End Web Development",
      school: "Udacity",
      dates: "September 2016 - Present",
      url: "http://www.udacity.com",
    }
  ]
};


/*
  Work
*/
var work = {
  jobs: [
    {
      employer: "Woodwright Contracting Corporation",
      title: "Carpenter",
      location: "Boulder, CO",
      dates: "April 2016 - Present",
      description: "I help frame houses and perform remodels and residential homes."
    },
    {
      employer: "Blackjack Pizza",
      title: "Delivery Driver",
      location: "Boulder, CO",
      dates: "October 2013 - April 2016",
      description: "I delivered pizzas and other food in the Boulder area."
    }
  ]
};


/*
  Projects
*/
var projects = {
  projects: [
    {
      title: "OXO",
      dates: "January 2015 - June 2015",
      description: "A tic tac toe application for iOS",
      images: ["images/oxo-square.png", "http://www.placehold.it/300x250"]
    },
    {
      title: "Bloom",
      dates: "July 2016 - Present",
      description: "A coloring book app for iOS",
      images: ["http://www.placekitten.com/300/250"]
    }
  ]
};


/*
  DISPLAY METHODS
*/

// BIO

bio.display = function() {

  // CREATE HTML ELEMENTS FOR HEADER

  // Header
  var elementHeaderName = HTMLheaderName.replace("%data%", bio.name);
  var elementHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  var elementBioPic     = HTMLbioPic.replace("%data%", bio.biopic);
  var elementGreeting = HTMLgreeting.replace("%data%", bio.greeting);
  var elementWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  // Contact Info
  var contacts = bio.contacts;

  var elementContactMobile    = HTMLmobile.replace("%data%", contacts.mobile);
  var elementContactEmail     = HTMLemail.replace("%data%", contacts.email);
  var elementContactGithub    = HTMLgithub.replace("%data%", contacts.github);
  var elementContactLocation  = HTMLlocation.replace("%data%", contacts.location);

  // Skills
  var elementSkills = "";
  bio.skills.forEach(function(skill) {
    var elementSkill = HTMLskills.replace("%data%", skill);
    elementSkills += elementSkill;
  });


  // ADD HEADER AND FOOTER ELEMENTS TO DOM

  // HEADER
  // General
  var $elementHeaderGeneral = $(HTMLheaderGeneral);
  $elementHeaderGeneral.append($(elementHeaderName));
  $elementHeaderGeneral.append($(elementHeaderRole));
  $elementHeaderGeneral.append($(elementContactLocation));
  $elementHeaderGeneral.append($("#topContacts"));
  // About
  var $elementHeaderAbout = $(HTMLheaderAbout);
  var $picContainer = $(HTMLheaderAboutContent).append(elementBioPic);
  var $greetingContainer = $(HTMLheaderAboutContent).append(elementGreeting).append(elementWelcomeMsg).append(HTMLskillsStart);
  $elementHeaderAbout.append($picContainer);
  $elementHeaderAbout.append($greetingContainer);
  // $elementHeaderAbout.append(elementBioPic);
  // $elementHeaderAbout.append(elementGreeting);
  // $elementHeaderAbout.append(elementWelcomeMsg);
  // $elementHeaderAbout.append(HTMLskillsStart);

  $("#header").append($elementHeaderGeneral);
  $("#header").append($elementHeaderAbout);

  // CONTACTS ( add to header and footer )
  [elementContactMobile, elementContactEmail, elementContactGithub].forEach(function(contact) {
    $("#topContacts").append(contact);
    $("#footerContacts").append(contact);
  });

  // SET href ATTRIBUTES FOR CONTACT LINKS
  $(".link-mobile").attr("href", "tel:" + bio.contacts.mobile);
  $(".link-email").attr("href", "mailto:" + bio.contacts.email);
  $(".link-github").attr("href", bio.contacts.githubURL);

  // SKILLS
  $("#skills").append(elementSkills);
};


// EDUCATION

education.display = function() {
  // Create section header underline element
  var $elementSectionUnderline = $(HTMLsectionUnderline);
  $elementSectionUnderline.addClass("background-green");
  $("#education").append($elementSectionUnderline);

  // DISPLAY SCHOOLS
  education.schools.forEach(function(school) {

    // Create elements for this school's details
    var elementSchoolName     = HTMLschoolName.replace("%data%", school.name);
    var elementSchoolDegree   = HTMLschoolDegree.replace("%data%", school.degree);
    var elementSchoolDates    = HTMLschoolDates.replace("%data%", school.dates);
    var elementSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    // Get majors
    var elementSchoolMajors = "";
    school.majors.forEach(function(major) {
      var elementMajor = HTMLschoolMajor.replace("%data%", major);
      elementSchoolMajors += elementMajor;
    });
    var elementMajorsList = '<ul class="list-majors">' + elementSchoolMajors + '</ul>';

    // Add school to DOM
    var elementSchool = elementSchoolDates + elementSchoolName + elementSchoolDegree + elementMajorsList + elementSchoolLocation;
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(elementSchool);
    $(".education-entry:last").after(HTMLentryDivider);

    // Add school URL to link
    $(".link-school:last").attr("href", school.url);
  });
  // Remove the unnecessary entry divider after the last education entry
  $(".entry-divider:last").remove();

  // DISPLAY ONLINE COURSES
  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(course) {

    // Create elements for this course's details
    var elementOnlineTitle  = HTMLonlineTitle.replace("%data%", course.title);
    var elementOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    var elementOnlineDates  = HTMLonlineDates.replace("%data%", course.dates);
    var elementOnlineURL    = HTMLonlineURL.replace("%data%", course.url.replace("http://", ""));

    // Add school to DOM
    var elementOnlineClass = elementOnlineDates + elementOnlineTitle + elementOnlineSchool + elementOnlineURL;
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(elementOnlineClass);
    $(".education-entry:last").after(HTMLentryDivider);

    // Add school URL to link
    $(".link-online-school:last").attr("href", course.url);
  });
  // Remove unnecessary entry divider after the last education entry
  $(".entry-divider:last").remove();
};


// WORK

work.display = function() {

  // Create section header underline element
  var $elementSectionUnderline = $(HTMLsectionUnderline);
  $elementSectionUnderline.addClass("background-pink");
  // TODO add color class for section underline
  $("#workExperience").append($elementSectionUnderline);

  work.jobs.forEach(function(job) {

    // Create elements for this job's details
    var elementEmployer     = HTMLworkEmployer.replace("%data%", job.employer);
    var elementTitle        = HTMLworkTitle.replace("%data%", job.title);
    var elementDates        = HTMLworkDates.replace("%data%", job.dates);
    var elementLocation     = HTMLworkLocation.replace("%data%", job.location);
    var elementDescription  = HTMLworkDescription.replace("%data%", job.description);

    // Add new job to DOM
    var elementJob = elementDates + elementTitle + elementEmployer + elementDescription + elementLocation;
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(elementJob);
    $(".work-entry:last").after($(HTMLentryDivider));
  });

  // Remove the unnecessary divider placed after the last work entry
  $(".entry-divider:last").remove();
};


// PROJECTS

projects.display = function() {
  // Create section header underline element
  var $elementSectionUnderline = $(HTMLsectionUnderline);
  $elementSectionUnderline.addClass("background-blue");
  $("#projects").append($elementSectionUnderline);

  // Iterate through each project
  projects.projects.forEach(function(project) {

    // Create elements for this project's details
    var elementProjectTitle       = HTMLprojectTitle.replace("%data%", project.title);
    var elementProjectDates       = HTMLprojectDates.replace("%data%", project.dates);
    var elementProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    // Get project images
    var elementProjectImages = "";
    project.images.forEach(function(image) {
      var elementProjectImage = HTMLprojectImage.replace("%data%", image);
      elementProjectImages += elementProjectImage;
    });
    var $projectImages = $(HTMLprojectImages).append(elementProjectImages);

    // Add this project to the DOM
    var elementProject = elementProjectTitle + elementProjectDates + elementProjectDescription;
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(elementProject);
    $(".project-entry:last").append($projectImages);
    $(".project-entry:last").after(HTMLentryDivider);
  });
  // Remove unnecessary entry divider after the last project entry
  $(".entry-divider:last").remove();
};


/*
  DISPLAY RESUME ELEMENTS
*/

function displayResume() {
  bio.display();
  work.display();
  projects.display();
  education.display();
}


/*
  GOOGLE MAP
*/

function displayGoogleMap() {
  $("#mapDiv").append(googleMap);
}



displayResume();
displayGoogleMap();
