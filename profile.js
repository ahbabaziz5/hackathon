import { db,auth,storage } from "./firebase.mjs";
import { signOut,onAuthStateChanged,updatePassword} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {collection, getDocs,addDoc,doc,deleteDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
// import {} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";


onAuthStateChanged(auth, async(user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
       
       
        const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                 let name = document.getElementById('name')
                name.innerHTML = `<a href='./'>${doc.data().first}  ${doc.data().last} </a>`
                let below = document.getElementById('below')
                below.innerHTML = `<span href='./'>${doc.data().first}  ${doc.data().last} </span>`

                getDownloadURL(ref(storage,uid))
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'
      
          const img = document.getElementById('myimg1');
          img.setAttribute('src', url);
        })
        
            });
          
        // ...
    } else {
        // User is signed out
        window.location.href = './login.html'
        // ...
    }
})

 let updatepass = document.getElementById('updatepass');
 updatepass.addEventListener('click',async()=>{
    let password = document.getElementById('password').value
    let newpass = document.getElementById('newpass').value
    let repeat = document.getElementById('repeat').value


  
const user = auth.currentUser;
const newPassword = newpass.value

updatePassword(user, newPassword)
.then(() => {
  // Update successful.
  alert("updated")
}).catch((error) => {
  // An error ocurred
  // ...
});


    // const washingtonRef = doc(db, "", "DC");

    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //   capital: true
    // });
    


 })





let logout = document.getElementById('logout')
logout.addEventListener('click',()=>{
    signOut(auth).then(() => {
        location.href='./login.html'
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

})