/*

This file contains all of the code running in the background that makes resumeBuilder.js possible.
We call these helper functions because they support your code in this course.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<div class="col-sm-12 col-md-9 title"><h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span></div></div>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="offwhite-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="white-text">%data%</span><span class="offwhite-text">mobile</span></li>';
var HTMLemailAddress = '<li class="flex-item"><span class="white-text">%data%</span>';
var HTMLemailType = '<span class="offwhite-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="white-text">%data%</span><span class="offwhite-text">twitter</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="white-text">%data%</span><span class="offwhite-text">github</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="white-text">%data%</span><span class="offwhite-text">linkedin</span></li>';
var HTMLblog = '<li class="flex-item"><span class="white-text">%data%</span><span class="offwhite-text">blog</span></li>';
var HTMLportfolio = '<li class="flex-item"><span class="white-text">%data%</span><span class="offwhite-text">portfolio</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="white-text">%data%</span><span class="offwhite-text">location</span></li>';

var HTMLbioPic = '<div><a href="index.html"><img src="%data%" class="biopic" alt="Photot of Eva Simon"></a>';
var HTMLwelcomeMsg = '<p class="welcome-message custom-entry-wrapper">%data%</p>';

var HTMLskillsStart = '<h3 id="skills-h3">Professional Skills</h3>';
var HTMLskillName = '<span class="white-text">%data%</span>';
// var HTMLskillLevel = '<div class="progress"><div class="progress-bar" style="width: %data%;"><i class="fa fa-circle"></i></div></div>';

var HTMLworkStart = '<div class="work-entry custom-entry-wrapper"></div>';
var HTMLworkTitle = '<h3>%data% ';
var HTMLworkEmployer = '<a href="#">@%data%</a></h3>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry card hoverable"></div>';
var HTMLprojectTitle = '<span class="card-title"><a href="#">%data%</a></span></div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<div class="card-content"><p><br>%data%</p></div><div class="card-action"><a>This is a link</a></div></div>';
var HTMLprojectImage = '<div class="card-image"><div class="view overlay hm-white-slight z-depth-1"><img src="%data%" class="img-responsive" alt="Project Photo"><div class="mask waves-effect"></div>';

var HTMLschoolStart = '<div class="education-entry custom-entry-wrapper"></div>';
var HTMLschoolDegree = '<h3>%data% ';
var HTMLschoolName = '<a href="#">@%data%</a></h3>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<p><br>Major: %data%</p>';

var HTMLonlineClasses = '<h3>Online Classes';
var HTMLonlineTitle = '<h3>%data% ';
var HTMLonlineSchool = '<a href="#">@%data%</a></h3>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<p><br><a href="#">%data%</a></p>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';



/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {

    function inName() {
      var myNames = $('#name').html();

      myNames = myNames.split(" ");

      myNames[0] = myNames[0].slice(0,1).toUpperCase() + myNames[0].slice(1).toLowerCase()
      myNames[1] = myNames[1].toUpperCase();

      myNames = myNames.join(" ")

      return myNames;
    }

    $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true,
    scrollwheel: false
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    // iterates through travel locations and appends each location to
    // the locations array
    for (var trip in travel.trips) {
      locations.push(travel.trips[trip].location);
    }

    return locations;

  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      draggable: true,
      animation: google.maps.Animation.DROP,
      title: name
    });

    marker.addListener('click', toggleBounce);

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
        infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }


  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

  /*
  Uncomment the code below when you're ready to implement a Google Map!
  */

  // Calls the initializeMap() function when the page loads

  window.addEventListener('load', initializeMap);

  // Vanilla JS way to listen for resizing of the window
  // and adjust map bounds

  window.addEventListener('resize', function(e) {
    
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
