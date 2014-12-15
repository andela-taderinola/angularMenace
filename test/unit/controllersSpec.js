'use strict';

describe('GitHub controllers', function () {
  describe ('usersController', function () {

    beforeEach(module('gitUsersApp'));

    beforeEach(inject(function ($controller) {
      scope = {};
      controller = $controller('usersController', {$scope:scope});
    }));

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
      expect(typeof scope.employed).toEqual(boolean);
    });

  });
});