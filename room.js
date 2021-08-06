var firebaseConfig = {
    apiKey: "AIzaSyDGy_wp8shV1lfCbXgxjLj1ZzJ6Gq2fYkY",
    authDomain: "ui-chatapp.firebaseapp.com",
    databaseURL: "https://ui-chatapp-default-rtdb.firebaseio.com",
    projectId: "ui-chatapp",
    storageBucket: "ui-chatapp.appspot.com",
    messagingSenderId: "226361703881",
    appId: "1:226361703881:web:c5308a8a896398c791bc18",
    measurementId: "G-FM10DVG6NY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;

     } });  }); }
     getData();


     function send()
     {
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
           });
     
           document.getElementById("msg").value = "";
     }


