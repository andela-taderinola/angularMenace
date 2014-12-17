'use strict';

describe('GitHub controllers', function () {
  describe ('usersController', function () {

    var scope;
    var controller;
    var httpGet;

    beforeEach(module('gitUsersApp'));

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
      scope = $rootScope.$new();
      httpGet = _$httpBackend_;
      controller = $controller('usersController', {$scope:scope});
      httpGet.expectGET('https://api.github.com/users/andela-eisaac').
        respond(
          {
            login: "andela-eisaac",
            name: "Timilehin Aderinola",
            location: "Ibadan",
            company: "Isawuru Plc"
          }
        );
      }));

    it('should return an object', function() {
      expect(scope.user).toBeUndefined();
      httpGet.flush();
      expect(scope.user).toEqual(
          {
            login: "andela-eisaac",
            name: "Timilehin Aderinola",
            location: "Ibadan",
            company: "Isawuru Plc"
          }
      );
    });

    it('should return an object with name property of "Timilehin Aderinola"', function() {
      httpGet.flush();
      expect(scope.user.name).toEqual('Timilehin Aderinola');
    });

    it('should return an object with company property of "Isawuru Plc"', function() {
      httpGet.flush();
      expect(scope.user.company).toEqual('Isawuru Plc');
    });

  });
});