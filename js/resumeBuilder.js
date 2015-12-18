/*
	Bio, work, projects, education, travel JSON Objects.
	Functions contain all the neccesary code for adding elements to the resume.
	Functions are encapsulated within the same objects containing the resume data.
 */

var bio = {
	"name": "Eva Simon",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "773-340-0EVA",
		"github": "evasimon",
		"linkedin": "simoneva",
		"twitter": "@codediet",
		"portfolio": "www.evasimon.me",	
		"location": "Chicago"
	},
	"emails": [
		{
			"type": "personal",
			"address": "eva.simon@gmail.com"
		},
		{
			"type": "work",
			"address": "eva@evasimon.me"
		}
	],
	"biopic": "img/myimage2.jpg",
	"welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas ante sit amet congue dignissim. Fusce id sagittis arcu. Suspendisse nec blandit ipsum. P",
	"skills": ["HTML", "CSS", "Javascript"],
	display: function() {

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
		var formattedPortfolio = HTMLportfolio.replace("%data%", bio.contacts.portfolio);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedName);
		$("#header").prepend(formattedBioPic);
		$(".title").append(formattedRole);

		$(".mobile-box").append(formattedMobile);

		for (email in bio.emails){
			var formattedEmailAddress = HTMLemailAddress.replace("%data%", bio.emails[email].address);
			var formattedEmailType = HTMLemailType.replace("%data%", bio.emails[email].type);

			$(".email-box").append(formattedEmailAddress + formattedEmailType);

			formattedEmailAddress = formattedEmailAddress
			formattedEmailType = formattedEmailType
		}

		$(".social-box").append(formattedGithub);
		$(".social-box").append(formattedLinkedin);
		$(".social-box").append(formattedTwitter);
		$(".web-box").append(formattedPortfolio);

		$(".flex-box").append(formattedMobile);
		$(".flex-box").append(formattedEmailAddress + formattedEmailType);
		$(".flex-box").append(formattedLinkedin);
		$(".flex-box").append(formattedGithub);
		$(".flex-box").append(formattedLocation);

		$("#welcome").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {
			$("#skills").append(HTMLskillsStart);
			for (skill in bio.skills){
				var formattedSkillName = HTMLskillName.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkillName);
			}
		}

		// if (bio.skills.length > 0) {
		// 	$("#skills").append(HTMLskillsStart);
		// 	for (skill in bio.skills){
		// 		var formattedSkillName = HTMLskillName.replace("%data%", bio.skills[skill].name);
		// 		var formattedSkillLevel = HTMLskillLevel.replace("%data%", bio.skills[skill].level);
		// 		$("#skills").append(formattedSkillName + formattedSkillLevel);
		// 	}
		// }
	}
}

var education = {
	"schools": [
		{
			"name": "MUN",
			"location": "St. John's, Canada",
			"degree": "Ph.D. Candidate",
			"majors": "Computational Chemistry",
			"dates": 2014,
			"url": "mun.ca"
		},
		{
			"name": "BBU",
			"location": "Cluj-Napoca, Romania",
			"degree": "M.Sc.",
			"majors": "Chemical Process Engineering",
			"dates": 2005,
			"url": "mun.ca"
		},
		{
			"name": "BBU",
			"location": "Cluj-Napoca, Romania",
			"degree": "B.Sc.",
			"majors": "Chemical Engineering",
			"dates": 2004,
			"url": "mun.ca"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Nanodegree",
			"school": "Udacity",
			"date": 2016,
			"url": "www.udacity.com"
		}
	],
	display: function() {
		for (onlineCourse in education.onlineCourses){

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			// $("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);

		};

		for (school in education.schools) {

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchoolDegree + formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);

		};
	}
}

var work = {
	"jobs": [
		{
			"employer": "DESIGNATION",
			"title": "Front-End Developer",
			"location": "Chicago",
			"dates": "Mar 2015 - Present",
			"description": "Responsive web development"
		},
		{
			"employer": "absupply.net",
			"title": "Technical Product Manager",
			"location": "Chicago",
			"dates": "Nov 2010 - Present",
			"description": "bla bla bla"
		},
		{
			"employer": "MUN",
			"title": "Researcher and Graduate Teaching Assistant",
			"location": "St. John's, Canada",
			"dates": "Sep 2005 - Dec 2014",
			"description": "Conducted Research on..."
		}
	],
	display: function() {

		for (job in work.jobs) {

			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedWorkTitle + formattedWorkEmployer);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkDescription);

		};
	}
}

var projects = {
	"projects": [
		{
			"title": "Pulseband",
			"dates": "May 2015 - Jul 2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas ante sit amet congue dignissim. Fusce id sagittis arcu. Suspendisse nec blandit ipsum. P",
			"images": ["img/pulseband-medium.jpg"]
		},
		{
			"title": "Glass Coat Photo Booth",
			"dates": "May 2015 - Jul 2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas ante sit amet congue dignissim. Fusce id sagittis arcu. Suspendisse nec blandit ipsum. PLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas ante sit amet congue dignissim. Fusce id sagittis arcu. Suspendisse nec blandit ipsum. PLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas ante sit amet congue dignissim. Fusce id sagittis arcu. Suspendisse nec blandit ipsum. P",
			"images": ["img/photobooth-medium.jpg"]
		},		
		{
			"title": "Joinesty",
			"dates": "May 2015 - Jul 2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas ante sit amet congue dignissim. Fusce id sagittis arcu. Suspendisse nec blandit ipsum. P",
			"images": ["img/joinesty-medium.jpg"]
		}
	],
	display: function() {
		for (project in projects.projects) {

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$("#projects").append(HTMLprojectStart);
					$(".project-entry:last").append(formattedProjectImages);
					$(".card-image:last").append(formattedProjectTitle);
					$(".project-entry:last").append(formattedProjectDates);
					$(".project-entry:last").append(formattedProjectDescription);
				}
			}

		}
	}
}

var travel = {
	"trips": [
		{
			"location": "Kauai, Hawai'i Island",
			"dates": 2015,
			"description": "Amazing trip.",
			"images": [
				"img/197x148.gif",
				"img/197x148.gif"
			]
		},
		{
			"location": "Vancouver, British Columbia",
			"dates": 2015,
			"description": "Amazing trip.",
			"images": [
				"img/197x148.gif",
				"img/197x148.gif"
			]
		}
	]
}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);


// $("#main").append(internationalizeButton);


