 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAto1vVEHS7eG5tPEFt0V_vbUFQZRIN7aU",
   authDomain: "hackathon-37c36.firebaseapp.com",
   projectId: "hackathon-37c36",
   storageBucket: "hackathon-37c36.appspot.com",
   messagingSenderId: "60018208850",
   appId: "1:60018208850:web:dd808117ef6e550e74ef8b"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
export  const storage = getStorage(app)