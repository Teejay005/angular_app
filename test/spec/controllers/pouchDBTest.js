'use strict';

describe('Controller: PouchdbCtrl', function () {

  // load the controller's module
  beforeEach(module('ehealthApp.pouchdb'));

  var scope,
   mockPouchdbService, 
   deferred;
 

    module(function ($provide) {
      $provide.value('PouchdbService', mockPouchdbService);
    });

  // Initialize the controller and a mock scope and PouchdbService
  beforeEach(inject(function ($controller, $rootScope, $q) {
    mockPouchdbService = jasmine.createSpyObj('mockPouchdbService', ['add', 'get']);

    deferred = $q.defer();
    scope = $rootScope.$new();

    mockPouchdbService.add.and.returnValue(deferred.promise);
    mockPouchdbService.get.and.returnValue(deferred.promise);

    $controller('PouchdbCtrl', {
        $scope: scope, 
        PouchdbService: mockPouchdbService
      });
    })
  );

  it('should set results to response from pouchdb', function () {
    var stubResults = {'ok': true,'_id': "1", 'rev': "1-y"};
    deferred.resolve(stubResults);

    scope.$apply();

    expect('1').toBe(scope.results._id);
    expect(scope.results.ok).toBeTruthy();
  });

  it('should set results to undefined if data cannot be saved to couchdb', function () {
    var errorMessage = {'status': 409}
    deferred.reject(errorMessage);
    scope.$apply();

    expect(scope.results).toBe('Record exists');
  });

  it('should retrieve records saved in the db', function () {
    var stubResults = {'_id': '1','_rev': '1-cb','firstName': 'Adetunji','lastName': 'Sunmonu'};
    deferred.resolve(stubResults);
    scope.$apply();

    expect('Adetunji').toBe(scope.nameFromDB.firstName);
  });
});
