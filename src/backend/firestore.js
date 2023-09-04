// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC2560pETTPekmI-ABPf_xZ3M3UB6ZqMK4",
  authDomain: "message-display-system.firebaseapp.com",
  projectId: "message-display-system",
  storageBucket: "message-display-system.appspot.com",
  messagingSenderId: "260068152843",
  appId: "1:260068152843:web:2336283608fddc0e41d90e",
  measurementId: "G-HCK0JW6RYC",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// function to add an event to Firestore database
export async function addEventToFirestore(event) {
  try {
    const eventData = {
      ...(event.time && { time: event.time }),
      ...(event.organiserName && { organiserName: event.organiserName }),
      ...(event.wifi && { wifi: event.wifi }),
    };

    await addDoc(collection(db, "events"), eventData);
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
