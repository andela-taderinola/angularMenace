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
      httpGet.expectGET('../app/data/users.json').
        respond([ {
    "name" : "Deji",
    "age" : 40,
    "hobbies": ["singing", "dancing", "wooing"],
    "employed" : true},{
    "name" : "Finidi",
    "age" : 39,
    "hobbies": ["eating", "sleeping", "playing"],
    "employed" : false}]);
    }));

    it('should create users fetched from ../app/data/users.json', function() {
        expect(scope.users).toBeUndefined();
        httpGet.flush();

        expect(scope.users).toEqual([ {
    "name" : "Deji",
    "age" : 40,
    "hobbies": ["singing", "dancing", "wooing"],
    "employed" : true},{
    "name" : "Finidi",
    "age" : 39,
    "hobbies": ["eating", "sleeping", "playing"],
    "employed" : false}])
    });

    it('should create two users', function() {
        httpGet.flush();
        expect(scope.users.length).toEqual(2);
    });

    it('should have the first user\'s name to be "Deji"', function() {
        httpGet.flush();
        expect(scope.users[0].name).toEqual("Deji");
    });

    it('should have the last user\'s employed property to be "false"', function() {
        httpGet.flush();
        expect(scope.users[1].employed).toBe(false);
    });

    it('should have a name property', function () {
      expect(scope.name).toBeDefined();
    });

    it('should have a name property of type String', function () {
      expect(typeof scope.name).toEqual("string");
    });

    it('should have an age property', function () {
      expect(scope.age).toBeDefined();
    });

    it('should have an age property of type Number', function () {
      expect(typeof scope.age).toEqual("number");
    });

    it('should have a hobbies property', function () {
      expect(scope.hobbies).toBeDefined();
    });

    it('should be of type Array', function () {
      expect(Array.isArray(scope.hobbies)).toBe(true);
    });

    it('length of array should be 3', function () {
      expect(scope.hobbies.length).toEqual(3);
    });

    it('should have an employed property', function () {
      expect(scope.employed).toBeDefined();
    });

    it('employed property should be of type boolean', function () {
      expect(typeof scope.employed).toEqual("boolean");
    });

  });
});