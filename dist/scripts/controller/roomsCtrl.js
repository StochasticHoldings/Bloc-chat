(function() {
     function roomCtrl($scope, MessageService,RoomService, $cookies) {
        var vm = this;
        vm.rooms = [];
        vm.selectedRoom = null;
        vm.messages = [];
      // MessageService.all.$loaded().then(function(results){
      //     angular.forEach(results, function(value, key){
      //         vm.rooms.push({id: key, data: value});
      //       });
      //      console.log(vm.rooms);
      //    });

        RoomService.all.$loaded()
          .then(function(results){
            console.log(results);
            vm.rooms = results;
            if(vm.rooms.length > 0){
              vm.selectedRoom = vm.rooms[0];
              vm.messages = MessageService.all
            //  getMessages(vm.selectedRoom.$id);
            }
          });


        // Rooms.all.$loaded().then(function(){
        //    angular.forEach(Rooms.all, function(value, key){
        //       vm.rooms.push({id: key, data: value});
        //    });
        //   console.log(vm.rooms);
        // });

        vm.addRoom = function(){
          RoomService.all.$add(vm.newRoom)
        }
        vm.addMessage = function(){
          vm.newMessage.roomId = vm.selectedRoom.$id
          console.log($cookies.get('blocChatCurrentUser'));
          vm.newMessage.user = $cookies.get('blocChatCurrentUser');
          MessageService.all.$add(vm.newMessage)
        }

        vm.setRoom = function(room){
          vm.selectedRoom = room
          vm.messages = MessageService.getByRoomId(room.$id)
          console.log(vm.messages)
          // reset the specific messages that are visible

        }


        function getMessages(roomId){
            vm.messages = [];
            MessageService.getByRoomId(roomId).once('value', function(snapshot){
                snapshot.forEach(function(childSnapshot){
                  var msg = childSnapshot.val();
                  vm.messages.push({
                    key: childSnapshot.key,
                    content: msg.content,
                    timesent: msg.sentAt,
                    user: msg.username
                  });
                  console.log(['Messages', vm.messages]);
                  $scope.$apply();
                });
              });
        }
        window.foo = RoomService.all


        vm.logOut = function(){
          $cookies.remove('blocChatCurrentUser')
        }
    }

    angular
        .module('Bloc-chat')
        .controller('RoomCtrl', ['$scope', 'MessageService','RoomService', '$cookies', roomCtrl]);
})();
