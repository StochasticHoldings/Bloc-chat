(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child("rooms"));
    return {
      all: rooms
    };

  //Trying to make my popup work for the add rooms
    // Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("You Need A Name For Your Room");
} else {
document.getElementById('form').submit();
alert("Your Chat Room Has Been Created");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}
  }

  angular
    .module('Bloc-chat')
    .factory('Rooms', ['$firebaseArray', Room]);
})();
