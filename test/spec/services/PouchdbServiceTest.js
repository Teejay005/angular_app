describe('Service: PouchdbService', function() {

  var pouchdbService;

  var itemId = 1;

  beforeEach(function() {
    module('ehealthApp.pouchdb');

    inject(function(PouchdbService) {
      pouchdbService = PouchdbService;
    });
  });

  it('should know how to save data to pouchdb', function (done) {
      pouchdbService.add
  });
});