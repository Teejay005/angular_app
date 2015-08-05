'use strict';

describe('Controller: PouchdbCtrl', function () {

  // load the controller's module
  beforeEach(module('ehealthApp.pouchdb'));

  var scope, mockPouchdbService, deferred;

    module(function ($provide) {
      $provide.value('PouchdbService', mockPouchdbService);
    });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    mockPouchdbService = jasmine.createSpyObj('mockPouchdbService', ['add']);

    deferred = $q.defer();
    scope = $rootScope.$new();

    mockPouchdbService.add.and.returnValue(deferred.promise)

    $controller('PouchdbCtrl', {
      $scope: scope, 
      PouchdbService: mockPouchdbService
    });
  })
);

  it('should add a given document to pouch db', function () {
    var stubResults = {
      'firstName': 'Adetunji',
      'lastName': 'Sunmonu'
    };

    deferred.resolve(stubResults);
    scope.$apply();
    expect(scope.results.firstName).toBe('Adetunji');
  });

});
