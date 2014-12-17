'use strict';

var gitUsersApp = angular.module('gitUsersApp', []);

gitUsersApp.controller('usersController', ['$scope', '$http', function(scope, http) {
  // scope.name = "Deji";
  // scope.age = 40;
  // scope.hobbies = ["singing,", "dancing,", "wooing."];
  // scope.employed = true;  

  http.get('https://api.github.com/users/andela-eisaac').success(function (data) {
    scope.user = data;
  });

}]);
