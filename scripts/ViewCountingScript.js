// Access 
const firebaseConfig = { 
    apiKey: "AIzaSyAivz05g9HVxOq0QPd8RPZbJIK4qjPQ6jE",
    authDomain: "website-visitor-counter-d2b13.firebaseapp.com",        databaseURL: "https://website-visitor-counter-d2b13-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "website-visitor-counter-d2b13",
    storageBucket: "website-visitor-counter-d2b13.firebasestorage.app",
    messagingSenderId: "64299652159",
    appId: "1:64299652159:web:a850132178c989c04cd48a"
};
// Logging Raw Viewer Count -- NO IDENTIFYING INFO
firebase.initializeApp(firebaseConfig);

// Wrapping in a DOM Loading Event
document.addEventListener("DOMContentLoaded", function () {
    const db = firebase.database();
    const counterRef = db.ref("views");

    // Counting Viewer
    counterRef.transaction(current => (current || 0) + 1);
    counterRef.on("value", snapshot => {
        const countE1 = document.getElementById("count");
        if (countEl) {
            countEl.innerText = snapshot.val();
        }
    });

    // Logging the Timestamp of Each Visit
    const logsRef = db.ref("view_logs");
    logsRef.push(new Date().toISOString());
});