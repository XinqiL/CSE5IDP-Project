import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyC2560pETTPekmI-ABPf_xZ3M3UB6ZqMK4",
    authDomain: "message-display-system.firebaseapp.com",
    databaseURL: "https://message-display-system-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "message-display-system",
    storageBucket: "message-display-system.appspot.com",
    messagingSenderId: "260068152843",
    appId: "1:260068152843:web:2336283608fddc0e41d90e",
    measurementId: "G-HCK0JW6RYC"
  };

// Initialise Firebase and Firestore
const app = initializeApp(firebaseConfig);

// reference your database
var eventDetailsDB = firebase.database().ref("eventDetails");

document.getElementById("eventDetails").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var eventName = getElementById("cename");
  var organiserName = getElementById("ceorganiser");
  var eventCategory = getElementById("cecategory");
  var eventLocation = getElementById("celocation");
  var eventDate = getElementById("cedate");
  var time = getElementById("cetime");
  var wifi = getElementById("cewifi");

  saveData(eventName, organiserName, eventCategory, eventLocation, eventDate, time, wifi);

}

const saveData = (eventName, organiserName, eventCategory, eventLocation, eventDate, time, wifi) => {
  var neweventDetails = eventDetailsDB.push();

  neweventDetails.set({
    eventName: cename,
    organiserName: ceorganiser,
    eventCategory: cecategory,
    eventLocation: celocation,
    eventDate: cedate,
    time: cetime,
    wifi: cewifi,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};