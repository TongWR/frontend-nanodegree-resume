var bio = {
  "name": "Tong W. Ratanapan",
  "role": "Front-End Wannabe",
  "contacts": {
    "mobile": "(+66)818820369",
    "email": "tong.worapol@gmail.com",
    "github": "TongWR",
    "twitter": "TongWRatanapan",
    "location": "Chiang Mai"
  },
  "welcomeMessage": "PH Welcome Message",
  "skills": ["PH skill 1", "PH skill 2", "PH skill 3"],
  "biopic": "https://avatars0.githubusercontent.com/u/2169312",
  "display": function() {
    var header = $("#header");
    var topContacts = $("#topContacts");
    var footerContacts = $("#footerContacts");

    // Display Name/Role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    header.prepend(formattedRole);
    header.prepend(formattedName);

    // Display Contact Details at the Top
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    topContacts.append(formattedEmail);
    topContacts.append(formattedMobile);
    topContacts.append(formattedTwitter);
    topContacts.append(formattedGithub);
    topContacts.append(formattedLocation);

    // Display Picture/Welcome Message
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    header.append(formattedPic);
    header.append(formattedWelcomeMsg);

    // Display Skills
    header.append(HTMLskillsStart);
    var skillList = $("#skills");
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      skillList.append(formattedSkill);
    })

    // Display Contact Details at the Bottom
    footerContacts.append(formattedEmail);
    footerContacts.append(formattedMobile);
    footerContacts.append(formattedTwitter);
    footerContacts.append(formattedGithub);
    footerContacts.append(formattedLocation);
  }
};

var education = {
  "schools": [
    {
      "name": "Udacity",
      "location": "Mountain View",
      "degree": "Nanodegree",
      "majors": ["Front-End Web Developer"],
      "dates": "2016 (Ongoing)",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "name": "Malaysian Global Innovation & Creativity Centre",
      "location": "Cyberjaya",
      "degree": "Startup Accelerator Program",
      "majors": ["ASEAN Track"],
      "dates": "2015",
      "url": "http://accelerator.mymagic.my/en/asean/"
    },
    {
      "name": "National University of Singapore",
      "location": "Singapore",
      "degree": "B.Eng.",
      "majors": ["Computer Engineering"],
      "dates": "2014",
      "url": "http://www.nus.edu.sg/"
    },
    {
      "name": "University of New South Wales",
      "location": "Sydney",
      "degree": "Exchange Program",
      "majors": ["Computer Engineering"],
      "dates": "2013",
      "url": "https://www.unsw.edu.au/"
    }
  ],
  "onlineCourses": [
    {
      "title": "German",
      "school": "Duolingo",
      "dates": "Ongoing",
      "url": "https://www.duolingo.com/course/de/en/Learn-German-Online"
    },
    {
      "title": "Game Theory II: Advanced Applications",
      "school": "Coursera",
      "dates": "2014",
      "url": "https://www.coursera.org/learn/game-theory-2"
    },
    {
      "title": "Game Theory",
      "school": "Coursera",
      "dates": "2013",
      "url": "https://www.coursera.org/learn/game-theory-1"
    }
  ],
  "display": function() {
    var eduDiv = $("#education");

    // Display Schools
    education.schools.forEach(function(school) {
      eduDiv.append(HTMLschoolStart);
      var currentEntry = $(".education-entry:last");

      var formattedSchool = HTMLschoolName.replace("%data%", school.name).replace("#", school.url) + HTMLschoolDegree.replace("%data%", school.degree);;
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors.join([seperator = ', ']));
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);

      currentEntry.append(formattedSchool);
      currentEntry.append(formattedLocation);
      currentEntry.append(formattedDates);
      currentEntry.append(formattedMajors);
    })

    // Display Online Courses
    eduDiv.append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      eduDiv.append(HTMLschoolStart);
      var currentEntry = $(".education-entry:last");

      var formattedCourse = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedURL = HTMLonlineURL.replace("%data%", course.url);

      currentEntry.append(formattedCourse);
      currentEntry.append(formattedDates);
      currentEntry.append(formattedURL);
    })
  }
};

var work = {
  "jobs": [
    {
      "employer": "flipped (Thailand)",
      "title": "CEO and Co-founder",
      "location": "Chiang Mai",
      "dates": "Nov 2014 - Sep 2016",
      "description": "flipped blah blah blah"
    },
    {
      "employer": "Garena",
      "title": "Mobile Game Associate",
      "location": "Bangkok",
      "dates": "May 2014 - Nov 2014",
      "description": "Garena blah blah blah"
    },
    {
      "employer": "National University of Singapore",
      "title": "Teaching Assistant",
      "location": "Singapore",
      "dates": "Aug 2013 - Nov 2013",
      "description": "NUS blah blah blah"
    }
  ],
  "display": function() {
    var workDiv = $("#workExperience");

    // Display Work
    work.jobs.forEach(function(job) {
      workDiv.append(HTMLworkStart);
      var currentEntry = $(".work-entry:last");

      var formattedWork = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      currentEntry.append(formattedWork);
      currentEntry.append(formattedDates);
      currentEntry.append(formattedLocation);
      currentEntry.append(formattedDescription);
    })
  }
};

var projects = {
  "projects": [
    {
      "title": "flipped 2.0: Virtual TA for High School Maths",
      "dates": "Mar 2016 - Sep 2016",
      "description": "flipped 2.0 blah blah",
      "images": ["https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"]
    },
    {
      "title": "Incentive-based Cloud Pricing for Improved Resource Utilization and Revenue",
      "dates": "Aug 2013 - Apr 2014",
      "description": "Cloud Pricing blah blah",
      "images": ["https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150", "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"]
    },
    {
      "title": "Embedded Systems Design Project - Hypermarket",
      "dates": "Aug 2012 - Dec 2012",
      "description": "Hypermartket blah blah",
      "images": ["https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"]
    }
  ],
  "display": function() {
    alert("Projects, yo!");
  }
};

var displayMap = function() {
  var map = $("#mapDiv");
  map.append(googleMap);
}

$(function() {
  bio.display();
  work.display();
  education.display();

  displayMap();
});