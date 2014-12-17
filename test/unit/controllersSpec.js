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
      httpGet.expectGET('https://api.github.com/search/users').
        respond(
          [
            {
              login: "andela-eisaac",
              name: "Timilehin Aderinola",
              location: "Ibadan",
              company: "Isawuru Plc"
            },
            {
              login: "andela-taderinola",
              name: "Emmanuel Aderinola",
              location: "Lagos",
              company: "DoucheBag Plc"
            }
          ]
        );
      }));

    it('should return an array', function() {
      expect(scope.users).toBeUndefined();
      httpGet.flush();
      expect(Array.isArray(scope.users)).toBe(true);
    });

    it('should have two embedded objects with keys and values', function () {
      httpGet.flush();
      expect(scope.users).toEqual(
          [
            {
              login: "andela-eisaac",
              name: "Timilehin Aderinola",
              location: "Ibadan",
              company: "Isawuru Plc"
            },
            {
              login: "andela-taderinola",
              name: "Emmanuel Aderinola",
              location: "Lagos",
              company: "DoucheBag Plc"
            }
          ]
        );
    });

    it('name property in the first object should have a value "Timilehin Aderinola"', function() {
      httpGet.flush();
      expect(scope.users[0].name).toEqual('Timilehin Aderinola');
    });

    it('company property in the second object should have a value "DoucheBag Plc"', function() {
      httpGet.flush();
      expect(scope.users[1].company).toEqual('DoucheBag Plc');
    });

  });
});