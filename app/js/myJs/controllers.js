'use strict';

var gitUsersApp = angular.module('gitUsersApp', []);

gitUsersApp.controller('usersController', ['$scope', '$http', function(scope, http) {
  scope.name = "Deji";
  scope.age = 40;
  scope.hobbies = ["singing,", "dancing,", "wooing."];
  scope.employed = true;  

  http.get('../app/data/users.json').success(function (data) {
    scope.users = data;
    console.log(typeof scope.users);
  });

}]);
