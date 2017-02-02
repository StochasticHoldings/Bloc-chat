(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child("rooms"));
    return {
      all: rooms
    };
  }

  angular
    .module('Bloc-chat')
    .factory('Rooms', ['$firebaseArray', Room]);
})();
