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

    // header begins
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var header = $("#header");
    header.prepend(formattedRole);
    header.prepend(formattedName);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var topContacts = $("#topContacts");
    topContacts.append(formattedEmail);
    topContacts.append(formattedMobile);
    topContacts.append(formattedTwitter);
    topContacts.append(formattedGithub);
    topContacts.append(formattedLocation);
    // header ends

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  }
};

var education = {
  "schools": [
    {
      "name": "National University of Singapore",
      "location": "Singapore",
      "degree": "Bachelor of Engineering",
      "majors": ["Computer Engineering"],
      "dates": "Jul 2010 - May 2014",
      "url": "http://www.nus.edu.sg/"
    },
    {
      "name": "University of New South Wales",
      "location": "Sydney",
      "degree": "Exchange Program",
      "majors": ["Computer Engineering"],
      "dates": "Mar 2013 - Jun 2013",
      "url": "https://www.unsw.edu.au/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Developer Nanodegree",
      "school": "Udacity",
      "dates": "Aug 2016 - present",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "German",
      "school": "Duolingo",
      "dates": "Big Bang - present",
      "url": "https://www.duolingo.com/course/de/en/Learn-German-Online"
    },
    {
      "title": "Game Theory II: Advanced Applications",
      "school": "Coursera",
      "dates": "",
      "url": "https://www.coursera.org/learn/game-theory-2"
    },
    {
      "title": "Game Theory",
      "school": "Coursera",
      "dates": "",
      "url": "https://www.coursera.org/learn/game-theory-1"
    }
  ],
  "display": function() {
    alert("Education, yo!");
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
    alert("Work, yo!");
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

$(function() {
  bio.display();
});