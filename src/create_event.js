import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { addEventToFirestore } from "./backend/firestore.js";

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

  var eventName = document.getElementById("cename");
  var organiserName = document.getElementById("ceorganiser");
  var eventCategory = document.getElementById("cecategory");
  var eventLocation = document.getElementById("celocation");
  var eventDate = document.getElementById("cedate");
  var time = document.getElementById("cetime");
  var wifi = document.getElementById("cewifi");

  const saveData = {
    eventName: eventName, 
    organiserName: organiserName, 
    eventCategory: eventCategory, 
    eventLocation: eventLocation, 
    eventDate: eventDate, 
    time: time, 
    wifi: wifi
    };
addEventToFirestore(saveData);
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