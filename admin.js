// admin.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAFugvOwEne6oIHWbufXNtucMzeEF0I448",
    authDomain: "linfy-contact-form.firebaseapp.com",
    projectId: "linfy-contact-form",
    storageBucket: "linfy-contact-form.firebasestorage.app",
    messagingSenderId: "790251662770",
    appId: "1:790251662770:web:ea374b2e00b88dddbf08ab"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get messages and render
async function fetchMessages() {
    const querySnapshot = await getDocs(collection(db, "messages"));
    const tableBody = document.querySelector("#messagesTable tbody");

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = document.createElement("tr");

        row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>${data.message}</td>
      <td>${new Date(data.timestamp?.seconds * 1000).toLocaleString()}</td>
    `;

        tableBody.appendChild(row);
    });
}

fetchMessages();