(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");

        return {
            getByRoomId: function(roomId) {
                // Filter the messages by their room ID.
            }
        };
    }
    angular
        .module('Bloc-chat')
        .factory('MessageService', ['$firebaseArray', Message]);
})();
