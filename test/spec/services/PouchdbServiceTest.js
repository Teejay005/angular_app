describe('Service: PouchdbService', function() {

  var pouchdbService, scope, mockEhealthDB;

  beforeEach(function() {
    module('ehealthApp.pouchdb');

    mockEhealthDB = jasmine.createSpyObj('mockEhealthDB', ['put', 'get']);

      module(function ($provide) {
          $provide.value('EhealthDB', mockEhealthDB);
      });
    
    inject(function(PouchdbService, EhealthDB) {
      pouchdbService = PouchdbService;
    });
  });

  it('should know how to save data to pouchdb', function(){
    var stubData = {'name': 'jue'};
    pouchdbService.add(stubData);

    expect(mockEhealthDB.put).toHaveBeenCalledWith(stubData);
  });

  it('should know how to get data from pouchdb', function(){
    var id = 'my-id';
    pouchdbService.get(id);

    expect(mockEhealthDB.get).toHaveBeenCalledWith(id, {conflicts: true});
  });
});