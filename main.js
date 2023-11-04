// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD1xfJQVZ9qG_RjdgllB0qlWereVBuLBKM",
        authDomain: "hackutdx.firebaseapp.com",
        projectId: "hackutdx",
        storageBucket: "hackutdx.appspot.com",
        messagingSenderId: "204527794784",
        appId: "1:204527794784:web:b1cb1453e38a79063ee105",
        measurementId: "G-HHZVV8KJXF"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href="profile.html";
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href="profile.html";
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}