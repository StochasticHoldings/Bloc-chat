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


        

        window.foo = MessageService.all
    }

    angular
        .module('Bloc-chat')
        .controller('messageCtrl', ['MessageService', messageCtrl]);
})();
