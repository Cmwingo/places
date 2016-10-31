//Business Logic

function Place(longLat, landmarks, timeOfYear, notes, climate) {
  this.longLat = longLat;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.climate = climate;
};

var BurningMan = new Place([44,-123], ["Gerlinger Park", "Black Rock Rd"], "Fall", ["It's awesome", "Try it at least once in your life"], "Desert");
var Leiden = new Place([52,-4.4],["Leids University", "Leiden Rembrandt statue"], "winter", ["Cool place to visit","Good bakeries and coffee shops"], "Temperate" );
var Prague = new Place([50,-14],["Charles Bridge", "Saint Vitus Cathedral", "Old Town"], "Spring", ["Always something going on","Amazing gothic arcitechture"], "Oceanic" );
var London = new Place([51,0],["Big Ben", "Buckingham Palace", "Tower of London"], "Summer", ["One of Europe's most historic cities","Classic pubs", "Lots of tourist attractions", "Go Arsenal!"], "Temperate Oceanic" );
var Edinburgh = new Place([56,3],["Arthur's Seat", "Holyrood Palace", "Royal Botanic Garden"], "Spring", ["One of the gems of Scotland","Misty meadows"], "Marine" );


$(document).ready(function(){

 $(".clickable").on( "click", function() {
   placeHeading = this;
   placeName = $(this).text();
   placeName = placeName.replace(" ", "");
   console.log(placeName);
   console.log(eval(placeName).timeOfYear);
   console.log($(this).text());
   alert("Click!");
   $(this).after('<div id="' + placeName +'">');
   $("#" + placeName).append('<br><ul>');
   $("#" + placeName).append('<li>' + 'Longitude: ' + eval(placeName).longLat[0] + '</li>');
   $("#" + placeName).append('<li>' + 'Latitude: ' + eval(placeName).longLat[1] + '</li>');
   $("#" + placeName).append('<li>' + 'Climate: ' + eval(placeName).climate + '</li>');
   $("#" + placeName).append('<li>' + 'Time of Year: ' + eval(placeName).timeOfYear + '</li>');
   $("#" + placeName).append('<br><ul>' + 'Landmarks: ');
   eval(placeName).landmarks.forEach(function(i){
     $("#" + placeName).append('<li>' + i + '</li>');
   });
   $("#" + placeName).append('</ul>');
   $("#" + placeName).append('<br><ul>' + 'Notes: ');
   eval(placeName).notes.forEach(function(i){
     $("#" + placeName).append('<li>' + i + '</li>');
   });
   $("#" + placeName).append('</ul>');
   $("#" + placeName).append('</div>')

 });
});
