// import addEventToFirestore function from backend js file
import { addEventToFirestore } from ". /backend/firestore.js";

document. addEventListener ("DOMContentLoaded", function () {
    
    // Get the form element
    const form = document. querySelector ("form");
    
    // Listen for the submit event on the form
    form. addEventListener ("submit", async function (event) {
        
        // Prevent the default form submission behavior
        event. preventDefault ();
        
        // Create an object to hold the form data
        const formData = {            
            eventName: form.cename.value,
            organiserName: form.ceorganiser.value,
            eventCategory: form.cecategory.value,
            eventLocation: form.celocation.value,
            eventDate: form.cedate.value,
            time: form.cetime.value,
            wifi: form.cewifi.value,
        };
        
        // Call the addEventToFirestore function 
        await addEventToFirestore (formData);
    });
});