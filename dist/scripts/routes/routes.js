var app = angular.module("Bloc-chat");

app.config(function ($stateProvider, $urlRouterProvider){
  console.log("configuring routes");
  $urlRouterProvider.otherwise("/");

  $stateProvider.
    state('home', {
         url: '/',
         templateUrl: 'templates/home.html'
    })
});
