import { db, auth, storage } from "./firebase.mjs";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";





let logout = document.getElementById('logout')
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        location.href = './login.html'
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
})

onAuthStateChanged(auth, async(user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                 let name = document.getElementById('name')
                name.innerHTML = `<a href='./'>${doc.data().first}  ${doc.data().last} </a>`
        
            });
        // ...
    } else {
        // User is signed out
        // window.location.href = './login.html'
        // ...
    }
})