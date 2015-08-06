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

  PouchdbService.get(myName._id).then(function(response){
      $scope.nameFromDB = response;
  });
});

pouchdb.factory('EhealthDB', function(pouchdb) {
    return pouchdb.create('ehealthDB');
});

pouchdb.factory('PouchdbService', function(EhealthDB) {
  return {
    add: function(obj){ 
      return EhealthDB.put(obj);
    },
    get: function(id){
      return EhealthDB.get(id, {conflicts: true});
    }
  };
});

