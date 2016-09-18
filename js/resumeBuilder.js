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
    mobile: "(303) 847-5273",
    email: "hnyelek@gmail.com",
    github: "h-n-y",
    location: "Boulder, CO"
  },
  welcomeMessage: "Hi! I'm Hans.",
  skills: ["Front-End Web", "iOS"],
  biopic: "images/me.jpg",
};
// TODO
bio.display = function() {

  /*
    CREATE HTML ELEMENTS FOR HEADER
    */

  // Header
  var elementHeaderName = HTMLheaderName.replace("%data%", bio.name);
  var elementHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  var elementBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var elementWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  // Contact Info
  var contacts = bio.contacts;

  var elementContactMobile = HTMLmobile.replace("%data%", contacts.mobile);
  var elementContactEmail = HTMLemail.replace("%data%", contacts.email);
  var elementContactGithub = HTMLgithub.replace("%data%", contacts.github);
  var elementContactLocation = HTMLlocation.replace("%data%", contacts.location);

  // Skills
  var elementSkills = "";
  bio.skills.forEach(function(skill) {
    var elementSkill = HTMLskills.replace("%data%", skill);
    elementSkills += elementSkill;
  });


  /*
    ADD HEADER ELEMENTS TO DOM
    */
  // Header
  $(elementHeaderName).insertBefore($("#topContacts"));
  $(elementHeaderRole).insertBefore($("#topContacts"));
  $("#header").append(elementBioPic);
  $("#header").append(elementWelcomeMsg);
  $("#header").append(HTMLskillsStart);

  // Contacts
  $("#topContacts").append(elementContactMobile);
  $("#topContacts").append(elementContactEmail);
  $("#topContacts").append(elementContactGithub);
  $("#topContacts").append(elementContactLocation);

  // Skills
  $("#skills").append(elementSkills);
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
      majors: ["BS", "MS"],
      dates: "September 2013 - May 2015",
      url: "www.colorado.edu"
    },
    {
      name: "Front Range Community College",
      location: "Fort Collins, CO",
      degree: "N/A",
      majors: ["N/A"],
      dates: "September 2011 - May 2013",
      url: "www.frontrange.edu"
    }
  ],
  onlineCourses: [
    {
      title: "Front-End Web Development",
      school: "Udacity",
      dates: "September 2016 - Present",
      url: "www.udacity.com",
    },
    {
      title: "iOS Programming",
      school: "Udacity",
      dates: "March 2016 - August 2016",
      url: "www.udacity.com"
    }
  ]
};
education.display = function() {

  // Display schools
  education.schools.forEach(function(school) {

    // Create elements for this school's details
    var elementSchoolName = HTMLschoolName.replace("%data%", school.name);
    var elementSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var elementSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var elementSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    // Get majors
    var elementSchoolMajors = "";
    school.majors.forEach(function(major) {
      var elementMajor = HTMLschoolMajor.replace("%data%", major);
      elementSchoolMajors += elementMajor;
    });

    // Add school to DOM
    var elementSchool = elementSchoolName + elementSchoolDegree + elementSchoolDates + elementSchoolLocation + elementSchoolMajors;
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(elementSchool);
  });

  // Display Online Courses
  $("#education").append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(course) {

    // Create elements for this course's details
    var elementOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    var elementOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    var elementOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
    var elementOnlineURL = HTMLonlineURL.replace("%data%", course.url);

    // Add school to DOM
    var elementOnlineClass = elementOnlineTitle + elementOnlineSchool + elementOnlineDates + elementOnlineURL;
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(elementOnlineClass);
  });
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
work.display = function() {

  work.jobs.forEach(function(job) {

    // Create elements for this job's details
    var elementEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var elementTitle = HTMLworkTitle.replace("%data%", job.title);
    var elementDates = HTMLworkDates.replace("%data%", job.dates);
    var elementLocation = HTMLworkLocation.replace("%data%", job.location);
    var elementDescription = HTMLworkDescription.replace("%data%", job.description);

    // Add new job to DOM
    var elementJob = elementEmployer + elementTitle + elementDates + elementLocation + elementDescription;
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(elementJob);
  });
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
      images: ["images/oxo-small.png", "http://www.placehold.it/300x250"]
    },
    {
      title: "Bloom",
      dates: "July 2016 - Present",
      description: "A coloring book app for iOS",
      images: ["http://www.placekitten.com/300/250"]
    }
  ]
};
projects.display = function() {
  // Iterate through each project
  projects.projects.forEach(function(project) {

    // Create elements for this project's details
    var elementProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var elementProjectDates = HTMLprojectDates.replace("%data%", project.dates);
    var elementProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    // Get project images
    var elementProjectImages = "";
    project.images.forEach(function(image) {
      var elementProjectImage = HTMLprojectImage.replace("%data%", image);
      elementProjectImages += elementProjectImage;
    });

    // Add this project to the DOM
    var elementProject = elementProjectTitle + elementProjectDates + elementProjectDescription + elementProjectImages;
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(elementProject);
  });
};




/*
  DISPLAY RESUME ELEMENTS
  */
bio.display();
work.display();
projects.display();
education.display();
