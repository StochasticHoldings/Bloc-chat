(function() {
     function messageCtrl(MessageService) {
        var vm = this;
        // vm.rooms = [];

        //vm.message = Messages.all
        vm.messages = [{
          username: "<USERNAME HERE>",
         content: "<CONTENT OF THE MESSAGE HERE>",
         sentAt: "<TIME MESSAGE WAS SENT HERE>",
         roomId: "<ROOM UID HERE>"
       }];


        // Rooms.all.$loaded().then(function(){
        //    angular.forEach(Rooms.all, function(value, key){
        //       vm.rooms.push({id: key, data: value});
        //    });
        //   console.log(vm.rooms);
        // });

      //  vm.addMessage = function(){
      //    Messages.all.$add(vm.message)
      //  }

        window.foo = MessageService.all
    }

    angular
        .module('Bloc-chat')
        .controller('messageCtrl', ['MessageService', messageCtrl]);
})();
