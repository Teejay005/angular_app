'use strict';

describe('Controller: PouchdbCtrl', function () {

  // load the controller's module
  beforeEach(module('ehealthApp.pouchdb'));

  var scope, mockPouchdbService, deferred;

    module(function ($provide) {
      $provide.value('PouchdbService', mockPouchdbService);
    });

  // Initialize the controller and a mock scope and PouchdbService
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

  it('should set results to response from pouchdb', function () {
    var stubResults = {
      '_id': 1,
      'firstName': 'Adetunji',
      'lastName': 'Sunmonu'
    };

    scope.myName = {
      'firstName': 'Adetunji',
      'lastName': 'Sunmonu'
    };

    deferred.resolve(stubResults);
    scope.$apply();
    expect(scope.results._id).toBe(1);
  });

  it('should set results to undefined if data cannot be saved to couchdb', function () {

    deferred.reject();
    scope.$apply();
    expect(scope.results).toBeUndefined();
  });

});
