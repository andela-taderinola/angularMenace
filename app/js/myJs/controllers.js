'use strict';

var gitUsersApp = angular.module('gitUsersApp', []);

gitUsersApp.controller('usersController', ['$scope', function(scope) {
  scope.name = "Deji";
  scope.age = 40;
  scope.hobbies = ["singing,", "dancing,", "wooing."];
  scope.employed = true;  
}]);
