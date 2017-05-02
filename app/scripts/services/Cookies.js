(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(`currentUser is : ${currentUser}`)
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $cookies.put('blocChatCurrentUser', prompt("This is where I need to put user variable"));
    }
  }

  angular
    .module('Bloc-chat')
    .run(['$cookies', BlocChatCookies]);
})();
