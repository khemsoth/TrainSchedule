
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

    $("#input-name").val("");
    $("#input-dest").val("");
    $("#input-first").val("");
    $("#input-freq").val("");
    console.log(newTrain);
})
