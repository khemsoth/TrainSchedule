
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC__gsKxTcrNGzLRxTn7aNbbPMZmEXTg4A",
    authDomain: "train-schedule-527b3.firebaseapp.com",
    databaseURL: "https://train-schedule-527b3.firebaseio.com",
    projectId: "train-schedule-527b3",
    storageBucket: "train-schedule-527b3.appspot.com",
    messagingSenderId: "1080981391959"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  
$("#submitButton").on("click", function(event) {
    event.preventDefault();
    var trainName = $("#input-name").val().trim();
    var destination = $("#input-dest").val().trim();
    var firstTrain = $("#input-first").val().trim();
    var frequency = $("#input-freq").val().trim();
    var newTrain = {
      train: trainName,
      destination: destination,
      first: firstTrain,
      frequency: frequency
    }
    database.ref().push(newTrain);
    $("#input-name").val("");
    $("#input-dest").val("");
    $("#input-first").val("");
    $("#input-freq").val("");
     // var form = $("form");
     // form.reset();
})

database.ref().on("child_added", function(trainAdded) {
  var trainName = trainAdded.val().train;
  var destination = trainAdded.val().destination;
  var firstTrain = trainAdded.val().first;
  var frequency = trainAdded.val().frequency;
 // var nextArrival = moment().add(minutesAway.val().trim(), moment());
 // var minutesAway
  var dynRow = $("<tr>").append(
  $("<td>").text(trainName),
  $("<td>").text(destination),
  $("<td>").text(frequency)
 // getNextArrival(),
 // $("<td>").text(minutesAway)
);
$("tbody").append(dynRow);
  })
/*var timeNow = moment().format('HHmm');
var x = timeNow - firstTrain;
function getNextArrival() {
  if(timeNow > "2000") {
    $('<td>').text(firstTrain);
  }
  else if(x < frequency) {
    $("<td>").text(timeNow + x);
  }
  else {
    console.log("oops");
  }
}
console.log(timeNow);
console.log(firstTrain);
console.log(x);
})
*/
