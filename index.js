import { db, auth, storage } from "./firebase.mjs";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
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
        
            });
        // ...
    } else {
        // User is signed out
        window.location.href = './login.html'
        // ...
    }


// window.show = async () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//         let name = document.getElementById('name')
//         name.innerHTML = `<a href='./'>${doc.data().first}  ${doc.data().last} </a>`


//     });

// }



let pub = document.getElementById('pub')
pub.addEventListener('click', async () => {
    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value

    try {
        const docRef = await addDoc(collection(db, "blogs"), {
            Title: title,
            Content: text,
        });
        post()
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }



})


window.post = async () => {
    box.innerHTML = " ";
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {

        let content = document.getElementById('content');
        let descri = document.getElementById('descri');
        let box = document.getElementById('box');
        box.innerHTML += `<div  src=''></div><img src='' id="myimg"> <div class="content" id="content"><h1>${doc.data().Title}</h1><p>${new Date().toLocaleDateString()}</p><p>${new Date().toLocaleTimeString()}</div>
        <div id="descri"><p>${doc.data().Content}</p><button onclick="upd('${doc.id}')">Update</button><button onclick="del('${doc.id}')">delete</button></div>`
        getDownloadURL(ref(storage, user.uid))
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'
      
          const img = document.getElementById('myimg');
          img.setAttribute('src', url);
        })
        .catch((error) => {
          // Handle any errors
        });
      


    });

}
post()


const upd = async (id) => {
    console.log(id);
    const updateList = doc(db, "blogs", id);
    var updatedTitle = prompt('Enter Your Updated Title');
    var updatedDesc = prompt('Enter Your Updated description');
    // Set the "capital" field of the city 'DC'
    await updateDoc(updateList, {
        Title: updatedTitle,
        Content: updatedDesc,
    }).then(() => {
        window.location.reload();
    });
}

const del = async (id) => {
    await deleteDoc(doc(db, "blogs", id))

        .then(() => {
            window.location.reload();
        });

}


window.del = del;
window.upd = upd;

})

let logout = document.getElementById('logout')
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        location.href = './login.html'
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

})
