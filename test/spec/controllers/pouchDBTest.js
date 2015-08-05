'use strict';

describe('Controller: PouchdbCtrl', function () {

  // load the controller's module
  beforeEach(module('ehealthApp.pouchdb'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    $controller('PouchdbCtrl', {
      $scope: scope
    });
  })
);

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.hello.length).toBe(3);
  });
});
