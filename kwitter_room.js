
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
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name+ "!";
function addRoom(){
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

