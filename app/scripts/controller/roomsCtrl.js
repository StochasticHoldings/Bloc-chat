(function() {
     function roomCtrl(Rooms) {
        var vm = this;
        // vm.rooms = [];

        vm.rooms = Rooms.all

        // Rooms.all.$loaded().then(function(){
        //    angular.forEach(Rooms.all, function(value, key){
        //       vm.rooms.push({id: key, data: value});
        //    });
        //   console.log(vm.rooms);
        // });

        vm.addRoom = function(){
          Rooms.all.$add(vm.newRoom)
        }

        window.foo = Rooms.all
    }

    angular
        .module('Bloc-chat')
        .controller('RoomCtrl', ['Rooms', roomCtrl]);
})();
