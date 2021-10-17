var firebaseConfig = {
  apiKey: "AIzaSyBMpzL43FV_RAmYtt9zuJKH9834fP0Czyw",
  authDomain: "zooba-fed0b.firebaseapp.com",
  databaseURL: "https://zooba-fed0b-default-rtdb.firebaseio.com",
  projectId: "zooba-fed0b",
  storageBucket: "zooba-fed0b.appspot.com",
  messagingSenderId: "115922991465",
  appId: "1:115922991465:web:d79ec7278dfda054e3a5f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "💛";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "zooba_chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });


}



function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }