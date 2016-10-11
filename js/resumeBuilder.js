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
        "location" : "Mississauga, ON"
    },
    "picture" : "http://placehold.it/350x350",
    "msg" : "Welcome to my Resume!",
    "skills" : ["organized", " punctual", " team player", " c language"]
};

var education = {
    "schools" : [
        {
            "name" : "University of Waterloo",
            "degree" : "Bachelor of Science",
            "grad" : "2014",
            "city" : "Waterloo, ON",
            "major": "Biology"
        },
        {
            "name" : "University of Guelph",
            "degree" : "Bachelor of Computing",
            "grad" : "2017",
            "city" : "Guelph, ON",
            "major" : "Computer Science"
        }
    ],
    "online" : [
        {
            "title" : "How to Use Git and Github",
            "school" : "Udacity",
            "date" : "2016"
        },
        {
            "title" : "Intro to HTML and CSS",
            "school" : "Udacity",
            "date" : "2016"
        },
        {
            "title" : "Javascript Basics",
            "school" : "Udacity",
            "date" : "2016"
        }
    ]
}

var experience = {
    "work" : [
        {
            "position" : " Volunteer",
            "employer" : "Community Support Connections",
            "years" : "Oct.2011 - April.2014",
            "city" : "Waterloo, ON",
            "description" : "One on one exercise sessions in a senior's home to help them maintain mobility and independence. Worked with four clients since joining the program. Sessions are usually one hour and occur over twelve weeks. Received certification of participation in a leadership course for the Home Support Exercise Program (HSEP) established by the CCAA."
        },
        {
            "position" : " Job Shadowing",
            "employer" : "Marcos Pharmacy",
            "years" : "May.2011 - Sept.2011",
            "city" : "Mississauga, ON",
            "description" : "Count inventory and expiry dates of items. Check incoming items and stock shelves. Count prescription pill and label containers. Work the cashier by accepting cash, debit cards and credit cards."
        }
    ],
    "project" : [
        {
            "title" : "Library Search Engine",
            "dates" : "December.2015",
            "description" : "Developed a search engine for library books and journals in Java. Completed as a series of assignments for Object Oriented Programming class at the University of Guelph."
        },
        {
            "title" : "iCal Software Application",
            "dates" : "April.2016",
            "description" : "Completed as a series of assignemnts for Software Systems Development class at the University of Guelph. Integrate C language backend to Python - TKinter GUI frontend with an SQL database."
        }
    ]
}

bio.display = function() {
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

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedMsg);

    if (bio.skills.length !== 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkills = ""
        for (theSkill in bio.skills) {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[theSkill]);
            $("#skills").append(formattedSkills);
        }
    }
}

experience.work.display = function() {
    if (experience.work.length !== 0) {
        for (var i = 0; i < experience.work.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedCompany = HTMLworkEmployer.replace("%data%", experience.work[i].employer);
            var formattedPosition = HTMLworkTitle.replace("%data%", experience.work[i].position);
            var formattedDate = HTMLworkDates.replace("%data%", experience.work[i].years);
            var formattedCity = HTMLworkLocation.replace("%data%", experience.work[i].city);
            var formattedDescription = HTMLworkDescription.replace("%data%", experience.work[i].description);

            $(".work-entry:last").append(formattedCompany + formattedPosition);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedCity);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

experience.project.display = function() {
    if (experience.project.length !== 0) {
        for (var i = 0; i < experience.project.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", experience.project[i].title);
            var formattedDate = HTMLprojectDates.replace("%data%", experience.project[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", experience.project[i].description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDate);
            $(".project-entry:last").append(formattedDescription);
        }
    }
}

education.schools.display = function () {
    if (education.schools.length !== 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedYear = HTMLschoolDates.replace("%data%", education.schools[i].grad);
            var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[i].city);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedYear);
            $(".education-entry:last").append(formattedCity);
            $(".education-entry:last").append(formattedMajor);
        }
    }
}

education.online.display = function() {
    $("#education").append(HTMLonlineClasses);
    if (education.online.length !== 0) {
        for (var i = 0; i < education.online.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.online[i].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.online[i].school);
            var formattedDate = HTMLonlineDates.replace("%data%", education.online[i].date);

            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDate);
        }
    }
}

bio.display();
experience.work.display();
experience.project.display();
education.schools.display();
education.online.display();

$("#main").append(internationalizeButton);

function inName(name) {
    var names = name.trim().split(" ");
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();

    return names[0] + " " + names[1];
}

$("#mapDiv").append(googleMap);
