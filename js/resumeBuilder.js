var bio;
var work;
var project;
var education;


biography();
workExperience();
myProjects();
educations();

$(document).ready(function() {

	$("toWork").click(function() {
		$("#workExperience").css("display", "block");
		$("#projects").css("display", "none");
		$("#education").css("display", "none");
		$("#mapDiv").css("display", "none");
		$("toWork").css("background-color", "white");
		$("toProject").css("background-color", "#484848");
		$("toEducation").css("background-color", "#484848");
		$("toMap").css("background-color", "#484848");
	});

	$("toProject").click(function() {
		$("#workExperience").css("display", "none");
		$("#projects").css("display", "block");
		$("#education").css("display", "none");
		$("#mapDiv").css("display", "none");
		$("toWork").css("background-color", "#484848");
		$("toProject").css("background-color", "white");
		$("toEducation").css("background-color", "#484848");
		$("toMap").css("background-color", "#484848");
	});	

	$("toEducation").click(function() {
		$("#workExperience").css("display", "none");
		$("#projects").css("display", "none");
		$("#education").css("display", "block");
		$("#mapDiv").css("display", "none");
		$("toWork").css("background-color", "#484848");
		$("toProject").css("background-color", "#484848");
		$("toEducation").css("background-color", "white");
		$("toMap").css("background-color", "#484848");
	});	

	$("toMap").click(function() {
		$("#workExperience").css("display", "none");
		$("#projects").css("display", "none");
		$("#education").css("display", "none");
		$("#mapDiv").css("display", "block");
		$("toWork").css("background-color", "#484848");
		$("toProject").css("background-color", "#484848");
		$("toEducation").css("background-color", "#484848");
		$("toMap").css("background-color", "white");
	});	
	
/*	$('totiles').click(function() {
		$('#map_canvas').css('display', 'none');
		$('#container').css('display', 'block');
		$('#search-form').css('display', 'block');
	});
*/
});


/*-----------------------Click Function--------------------------------*/

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});



/*-------------------------Google Map------------------------------*/

$("#mapDiv").append(googleMap);




/*---------------------------------function Bio-----------------------------------*/

function biography() {
	bio = {
	 	"name": "Zhiyun Yuchi",
	 	"role": "ICT Support Engineer",
	 	"contacts": {
	 		"mobile": "(86)18512526422",
	 		"email": "zyuchi@outlook.com",
	 		"github": "ericyuchi",
	 		"twitter": "ericyuchi",
	 		"location": "Nanjing, China"
	 	},
	 	"welcomeMessage": "Currently a ICT Engineer, seeking new oppotunites in web\
	 		programming field where my passion is.",
	 	"skills": ["HTML5", "CSS3", "Javascript", "jQuery", "JSON", "Computer Network"],
	 	"biopic": "./images/fry.jpg"
	};

	bio.display = function() {

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		 	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		 	$("#topContacts").append(formattedMobile);

		 	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		 	$("#topContacts").append(formattedEmail);

		 	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		 	$("#topContacts").append(formattedGithub);

		 	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		 	$("#topContacts").append(formattedTwitter);	

		 	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		 	$("#topContacts").append(formattedLocation);

		var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPicture);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		if (bio.skills) {
		 	$("#header").append(HTMLskillsStart);

		 	for (skill in bio.skills) {
		 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		 		$("#skills").append(formattedSkill);
		 	};
		};
	};

	bio.display();
};



/*----------------------------function Work Experience-------------------------------*/

function workExperience() {
	work = {
	 	"jobs": [{
	 		"employer": "China Mobile",
	 		"title": "ICT Support Engineer",
	 		"location": "Nanjing, China",
	 		"dates": "May 2014 - Now",
	 		"description": "Setting, debuging, and providing consultation on \
	 			Internet and APN services for company and agency business"
	 	}, {
			"employer": "Emooth Pty. Ltd.",
	 		"title": "Intern Front-End Developer",
	 		"location": "Sydney, Australia",
	 		"dates": "Sep 2013 - Jan 2014",
	 		"description": "Transfer mockup to webpages using HTML5 and phoneGap."
 		}]
	};

	work.display = function() {
	 	if (work.jobs) {
		 	for (job in work.jobs) {
		 		$("#workExperience").append(HTMLworkStart);

		 		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		 		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		 		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		 		$(".work-entry:last").append(formattedEmployerTitle);

		 		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		  		$(".work-entry:last").append(formattedDates);

		   		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		  		$(".work-entry:last").append(formattedLocation);

		  	 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		  		$(".work-entry:last").append(formattedDescription);

		 	};
	 	};
	};

	work.display();
};


 

/*-----------------------------function Project------------------------------*/

function myProjects() {
	project = {
	 	"projects": [{
	 		"title": "Core Equipments Upgrade",
	 		"dates": "Jan 2015 - Now",
	 		"description": "Phase out old routers (10 Huawei 5200F) and transfer \
	 			all their servies (Internet, voice and VPN) to Cisco 7750, \
	 			Redback SE800 and Huawei ME60"
	 	}, {
	 		"title": "APN Core Equipments Upgrade",
	 		"dates": "Oct 2015 - Jan 2016",
	 		"description": "Phase out the old routers (Cisco 7206 and Huawei NE20),\
	 			and transfer their APN services to the new Huawei NE40"
	 	}, {
	 		"title": "Electricity Meter Reading",
	 		"dates": "Sep 2015 - Now",
	 		"description": "Setup two APN and VPN services for all electricity meter\
	 			reading in entire Jiangsu Province"
	 	}]
 	};

	project.display = function() {
	 
	 	$("#projects").append(HTMLprojectStart);

	 	for (myProject in project.projects) {
	 		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[myProject].title);
	 		$(".project-entry:last").append(formattedTitle);

	 		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[myProject].dates);
	 		$(".project-entry:last").append(formattedDates);

	 		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[myProject].description);
	 		$(".project-entry:last").append(formattedDescription);

	 	};
	}

	project.display();
};




/*--------------------------------function Education-----------------------------------*/

function educations() {
	education = {
	 	"schools": [{
	 		"name": "University of Wollongong",
	 		"location": "Wollongong, Australia",
	 		"degree": "Master of ICT & Computer Science",
	 		"majors": ["Information Technology", "Intelligent System"],
	 		"gradYear": 2013
	 	}, {
	 		"name": "Nanjing Institute of Technology",
	 		"location": "Nanjing, China",
	 		"degree": "Bacholar of Telecommunication Engineering",
	 		"majors": ["Computer Network"],
	 		"gradYear": 2010
	 	}],

	 	"onlineCourse": {
	 		"title": "Front-End Web Developer Nanodegree",
	 		"school": "Udacity",
	 		"dates": "Current",
	 		"url": "http://www.udacity.com"
	 	}
	};

	education.display = function() {

		$("#education").append(HTMLschoolStart);

		for (school in education.schools) {
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var fomattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(fomattedNameDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].gradYear);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			};
		};

		$("#education").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse.title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".online-entry").append(formattedTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse.dates);
		$(".online-entry").append(formattedOnlineDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourse.url);
		$(".online-entry").append(formattedURL);



	};

	education.display();
};


