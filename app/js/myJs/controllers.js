'use strict';

var gitUsersApp = angular.module('gitUsersApp', []);

gitUsersApp.controller('usersController', ['$scope', '$http', function(scope, http) {
  scope.query = "andela";
  console.log(scope.query);

  http({url: 'https://api.github.com/search/users', method: 'GET', params: {q: "andela"}}).success(function (data) {
    scope.users = data.items;
  });

  scope.userSearch = function () {
    http({url: 'https://api.github.com/search/users', method: 'GET', params: {q: scope.query}}).success(function (data) {
    scope.users = data.items;
    console.log(scope.users.length);
    console.log("clicked");
    scope.query = "";
  });
  };
}]);
