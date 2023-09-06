// import addEventToFirestore function from backend js file
import { addEventToFirestore, registerUser } from "./backend/firestore.js";

document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.querySelector("form");

  // Listen for the submit event on the form
  form.addEventListener("submit", async function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create an object to hold the form data
    const formData = {
      organiserName: form.organiser.value,
      time: form.timing.value,
      wifi: form.wifi.value,
    };

    // Call the addEventToFirestore function
    await addEventToFirestore(formData);
  });
});
