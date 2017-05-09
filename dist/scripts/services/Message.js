(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref();
        var messages = $firebaseArray(ref.child("messages"));
        return {
            getByRoomId: function(roomId) {
                // Filter the messages by their room ID.
                console.log(roomId)
                return $firebaseArray(ref.child("messages").orderByChild('roomId').equalTo(roomId));
            },
            all: messages
        };
        Message.send = function(newMessage) {
            // Send method logic
        };

    }
    angular
        .module('Bloc-chat')
        .factory('MessageService', ['$firebaseArray', Message]);
})();
