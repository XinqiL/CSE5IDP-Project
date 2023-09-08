import { addEventToFirestore } from "./backend/firestore.js";

document.getElementById("eventDetails").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var eventName = document.getElementById("cename").value;
  var organiserName = document.getElementById("ceorganiser").value;
  var eventCategory = document.getElementById("cecategory").value;
  var eventLocation = document.getElementById("celocation").value;
  var eventDate = document.getElementById("cedate").value;
  var time = document.getElementById("cetime").value;
  var wifi = document.getElementById("cewifi").value;

  const saveData = {
    eventName: eventName,
    organiserName: organiserName,
    eventCategory: eventCategory,
    eventLocation: eventLocation,
    eventDate: eventDate,
    time: time,
    wifi: wifi,
  };

  addEventToFirestore(saveData); // call the backend function
}