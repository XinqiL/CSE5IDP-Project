// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
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

// General function to add data to Firestore
export async function addDataToFirestore(collectionName, data) {
  try {
    await addDoc(collection(db, collectionName), data);
    console.log("Data successfully added!");
  } catch (e) {
    console.error("Error adding data: ", e);
  }
}

// Usage example:
// const inputData = { key1: "value1", key2: "value2" };
// addDataToFirestore("yourCollectionName", inputData);

// fetch data from Firestore
export async function fetchData() {
  const dataArr = [];
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    dataArr.push(doc.data());
  });
  return dataArr;
}
