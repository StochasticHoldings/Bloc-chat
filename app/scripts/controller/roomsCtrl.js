(function() {
     function roomCtrl(Rooms) {
        var vm = this;
        vm.rooms = [];

        Rooms.all.$loaded().then(function(){
           angular.forEach(Rooms.all, function(value, key){
              vm.rooms.push({id: key, data: value});
           });
          console.log(vm.rooms);
        });
    }

    angular
        .module('Bloc-chat')
        .controller('RoomCtrl', ['Rooms', roomCtrl]);
})();
