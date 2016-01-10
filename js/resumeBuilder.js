/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
// var name = "Zhiyun Yuchi";
// var role = "Web Developer";

/* var bio = {

 	"name" : "Zhiyun Yuchi",
 	"role" : "Web Developer"
 };

 var work = {};

 work.job = "ICT Support Engineer";
 work.employer = "China Mobile";
 work.years = 2;
 work.city = "Nanjing";

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

 var formattedJob = HTMLworkTitle.replace("%data%", work.job);
 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
 var formattedYears = HTMLworkDates.replace("%data%", work.years);
 var formattedCity = HTMLworkLocation.replace("%data%", work.city); 

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 $("#workExperience").append(formattedEmployer + formattedJob);
 $("#workExperience").append(formattedYears);
 $("#workExperience").append(formattedCity);
*/

 var bio = {
 	"name": "Zhiyun Yuchi",
 	"role": "Web Developer",
 	"welcomeMessage": "Currently a ICT Engineer, seeking new oppotunites in web
 		programming field where my passion is.",
 	"contacts": "zyuchi@outlook.com",
 	"skills": ["HTML5", "CSS3", "Javascript", "JQuery"]
 };

 var work = {
 	"jobs": [{
 		"employer": "China Mobile",
 		"title": "ICT Support Engineer",
 		"location": "Nanjing, China",
 		"dates": "May 2014 - Now",
 		"description": "Setting, debuging, and providing consultation on 
 		Internet and APN services for company and agency business"
 	}]
 };

 var project = {
 	"projects": [{
 		"title": "Core Equipments Upgrade",
 		"dates": "Jan 2015 - Now",
 		"description": "Phase out old routers (10 Huawei 5200F) and transfer 
 			all their servies (Internet, voice and VPN) to Cisco 7750, 
 			Redback SE800 and Huawei ME60"
 	}, {
 		"title": "APN Core Equipments Upgrade",
 		"dates": "Oct 2015 - Jan 2016",
 		"description": "Phase out the old routers (Cisco 7206 and Huawei NE20),
 			and transfer their APN services to the new Huawei NE40"
 	}, {
 		"title": "Electricity Meter Reading",
 		"dates": "Sep 2015 - Now",
 		"description": "Setup two APN and VPN services for all electricity meter
 			reading in entire Jiangsu Province"
 	}]
 };

 var education = {
 	"schools": [{
 		"sName": "University of Wollongong",
 		"sCity": "Wollongong",
 		"sMajor": "Information Communication Technology",
 		"sMinor": "Computer Science - Intelligent System",
 		"sGradYear": 2013
 	}, {
 		"sName": "Nanjing Institute of Technology",
 		"sCity": "Nanjing",
 		"sMajor": "Computer Network",
 		"sGradYear": 2010
 	}]
 };