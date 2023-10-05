console.log('hi');
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDD4PiP8lNMSCEFxVnijuQ1G3SG1dfWmeo",
    authDomain: "webathon-327a7.firebaseapp.com",
    projectId: "webathon-327a7",
    storageBucket: "webathon-327a7.appspot.com",
    messagingSenderId: "148161110223",
    appId: "1:148161110223:web:a03a0ab58fa4fe28ded7ba",
    measurementId: "G-BW307DF8JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
const sub = document.getElementById("Sub");
sub.addEventListener("click", (event) => {
    event.preventDefault();
    console.log('asff')
    const auth = getAuth();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location.href = 'home.html';

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
            console.log(errorMessage);
            // ..
        });

});


console.log('byefghiol')


import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const sub1 = document.getElementById("Sub_1");
sub1.addEventListener("click", (event) => {
    event.preventDefault();
    const auth = getAuth();
    const email1 = document.getElementById('email_1').value;
    const pass1 = document.getElementById('pass_1').value;
    signInWithEmailAndPassword(auth, email1, pass1)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = 'home.html';

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('nope')
        });


})


