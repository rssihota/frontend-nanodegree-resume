/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*var awesomeThoughts = "I am Ranbir and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

$("#main").append(funThoughts);*/

var bio = {
    "name" : "Ranbir Sihota",
    "role" : "Software Developer",
    "contact" : {
        "mobile": "647-884-8327",
        "email" : "ranbirsihota@gmail.com",
        "github" : "rssihota",
        "location" : "Mississauga"
    },
    "picture" : "http://placehold.it/350x350",
    "msg" : "Welcome to my Resume!",
    "skills" : ["organized", " punctual", " team player", " c language"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", "none");
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);

var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.msg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedMsg);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

var work = {
    "position" : " Volunteer",
    "employer" : "Community Support Connections",
    "years" : "Oct.2012 - April.2014",
    "city" : "Waterloo, ON",
    "description" : "Assist seniors with simple exercises to help maintain their independent lifestyle."
};

var formattedPosition = HTMLworkTitle.replace("%data%", work.position);
var formattedCompany = HTMLworkEmployer.replace("%data%", work.employer);
var formattedDate = HTMLworkDates.replace("%data%", work.years);
var formattedCity = HTMLworkLocation.replace("%data%", work.city);
var formattedDescription = HTMLworkDescription.replace("%data%", work.description);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedCompany);
$(".work-entry").append(formattedPosition);
$(".work-entry").append(formattedDate);
$(".work-entry").append(formattedCity);
$(".work-entry").append(formattedDescription);

var school = {
    "name" : "University of Guelph",
    "degree" : "Bachelor of Computing",
    "years" : "2014 - Present",
    "city" : "Guelph, ON",
    "major" : "Computer Science"
};

var formattedSchool = HTMLschoolName.replace("%data%", school["name"]);
var formattedDegree = HTMLschoolDegree.replace("%data%", school["degree"]);
var formattedYears = HTMLschoolDates.replace("%data%", school["years"]);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school["city"]);
var formattedMajor = HTMLschoolMajor.replace("%data%", school["major"]);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchool);
$(".education-entry").append(formattedDegree);
$(".education-entry").append(formattedYears);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedMajor);