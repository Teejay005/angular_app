'use strict';

var pouchdb = angular.module('ehealthApp.pouchdb', ['pouchdb']);

pouchdb.controller('PouchdbCtrl', function ($scope, PouchdbService){
  var myName = {_id: '1', 'firstName': 'Adetunji', 'lastName': 'Sunmonu'};
  PouchdbService.add(myName).then(function(response){
     $scope.results = response;
  }, function(err){
      if(err.status === 409) {
        $scope.results = 'Record exists';
      }
  });

});

pouchdb.factory('ehealthDB', function(pouchdb) {
    return pouchdb.create('ehealthDB');
});

pouchdb.factory('PouchdbService', function(ehealthDB) {
    return {
        add: function(obj){ 
          return ehealthDB.put(obj);
        },
        get: function(id){
          return ehealthDB.get(id, {conflicts: true});
        }
    };
});

