var firebaseConfig = {
    apiKey: "AIzaSyAdUoLAMIUA3LG6mVTag_1IIgQ_3ZHYJg4",
    authDomain: "letsgtok1.firebaseapp.com",
    databaseURL: "https://letsgtok1-default-rtdb.firebaseio.com",
    projectId: "letsgtok1",
    storageBucket: "letsgtok1.appspot.com",
    messagingSenderId: "485002581053",
    appId: "1:485002581053:web:f196692062a121cfbd4654",
    measurementId: "G-XBD8PLV06W"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  var messagesRef = firebase.database().ref('messages');

document.getElementById('contactform').addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    var name = getinputval('usr');
    var email= getinputval('email');
    var comment = getinputval('comment');
    
    saveMessage(name,email,comment);

}

function getinputval(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,message){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:comment
    });
}