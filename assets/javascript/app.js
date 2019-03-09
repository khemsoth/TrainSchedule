
  // Initialize Firebase
//  var config = {
  //  apiKey: "AIzaSyC__gsKxTcrNGzLRxTn7aNbbPMZmEXTg4A",
    //authDomain: "train-schedule-527b3.firebaseapp.com",
  //  databaseURL: "https://train-schedule-527b3.firebaseio.com",
  //  projectId: "train-schedule-527b3",
  //  storageBucket: "train-schedule-527b3.appspot.com",
  //  messagingSenderId: "1080981391959"
  //};
  //firebase.initializeApp(config);

  // Create variables to hold form input
  // Fill variables with value from form input
  // Push input values to Firebase
  // Pull from Firebase to update values
  // Display values on website

  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = "";

$("#submitButton").on("click", function() {
    trainName = $("#input-name").val().trim();
    destination = $("#input-dest").val().trim();
    firstTrain = $("#input-first").val().trim();
    frequency = $("#input-freq").val().trim();
    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);
})
