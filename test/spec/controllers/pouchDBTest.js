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

  it('should add a given document to pouch db', function () {
    var myName = {
      'firstName': 'Adetunji',
      'lastName': 'Sunmonu'
    };
    scope.addToPouchDB(myName);
    expect(scope.results.firstName).toBe('Adetunji');
  });

});
