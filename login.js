import { db,auth,storage } from "./firebase.mjs";
import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      location.href='./index.html'
  

      // ...
    } else {
      // User is signed out
      // ...
    }
  });


let login = document.getElementById('login')
login.addEventListener('click',()=>{

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
     
       
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

})


  

