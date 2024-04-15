//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBSR0XSzfbqnlrS3ulNVLAG4B52YyEkM-g",
    authDomain: "kwitter-ca45e.firebaseapp.com",
    databaseURL: "https://kwitter-ca45e-default-rtdb.firebaseio.com",
    projectId: "kwitter-ca45e",
    storageBucket: "kwitter-ca45e.appspot.com",
    messagingSenderId: "1023762677641",
    appId: "1:1023762677641:web:c5f3c22c6eaad7ab1beb58"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser() {
    user_name = document.getElementById("user_name").value ;
    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
}