import { db,auth,storage } from "./firebase.mjs";
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {collection, addDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import {ref, uploadBytes} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";



let signbtn = document.getElementById('signbtn')
signbtn.addEventListener('click',()=>{
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let repeat = document.getElementById('repeat').value
    let file = document.getElementById('file').files[0]


    if(repeat === password){
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          try {
            const docRef = await addDoc(collection(db, "users"), {
              first: fname,
              last: lname,
              Email:email,
              Password:password,
              Repeat:repeat,
            });
            const storageRef = ref(storage, user.uid);

            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, file).then((snapshot) => {
              console.log('Uploaded a blob or file!');
            });
            console.log("Document written with ID: ", docRef.id);
 
            location.href='./login.html'
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    

        
    }
    else{
      alert('plz write correct password in repeat !')
    }
   


})
