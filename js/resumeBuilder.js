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
      majors: ["BS"],
      dates: "September 2013 - May 2015",
      url: "www.colorado.edu"
    },
    {
      name: "Front Range Community College",
      location: "Fort Collins, CO",
      degree: "N/A",
      majors: "N/A",
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
    }
  ]
};
education.display = function() {
  // TODO
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
  workExperienceElements.forEach(function($job) {
    $("#workExperience").append($job);
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
      images: ["images/oxo-small.png"]
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
  // TODO
};


/*
  CREATE HTML ELEMENTS FOR HEADER
  */
var elementHeaderName = HTMLheaderName.replace("%data%", bio.name);
var elementHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
var elementBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var elementWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

/*
  CREATE HTML ELEMENTS FOR CONTACT INFO
  */
var contacts = bio.contacts;

var elementContactMobile = HTMLmobile.replace("%data%", contacts.mobile);
var elementContactEmail = HTMLemail.replace("%data%", contacts.email);
var elementContactGithub = HTMLgithub.replace("%data%", contacts.github);
var elementContactLocation = HTMLlocation.replace("%data%", contacts.location);

/*
  CREATE HTML ELEMENTS FOR SKILLS
  */
var elementSkills = "";
bio.skills.forEach(function(skill) {
  var elementSkill = HTMLskills.replace("%data%", skill);
  elementSkills += elementSkill;
});

/*
  CREATE HTML ELEMENTS FOR WORK EXPERIENCE
  */
  
// list of all jobs represented as jQuery objects
var workExperienceElements = [];

work.jobs.forEach(function(job) {

  // Create elements for this job's details
  var elementEmployer = HTMLworkEmployer.replace("%data%", job.employer);
  var elementTitle = HTMLworkTitle.replace("%data%", job.title);
  var elementDates = HTMLworkDates.replace("%data%", job.dates);
  var elementLocation = HTMLworkLocation.replace("%data%", job.location);
  var elementDescription = HTMLworkDescription.replace("%data%", job.description);

  // Use jQuery to consolidate job details into a single element
  var $elementJob = $(HTMLworkStart);
  var $elementDescription = $(elementEmployer +
                              elementTitle +
                              elementDates +
                              elementLocation +
                              elementDescription);
  $elementJob.append($elementDescription);

  // Add this job to the list of all jobs
  workExperienceElements.push($elementJob);
});

/*
  DISPLAY RESUME ELEMENTS
  */
bio.display();
work.display();
