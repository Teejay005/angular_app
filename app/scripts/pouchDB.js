'use strict';

var pouchdb = angular.module('ehealthApp.pouchdb', ['pouchdb']);

pouchdb.controller('PouchdbCtrl', function ($scope, PouchdbService){

 PouchdbService.add($scope.myName).then(function(response){
     $scope.results = response;
  });
});

pouchdb.factory('ehealthDB', function(pouchdb) {
    return pouchdb.create('ehealthDB');
});

pouchdb.factory('PouchdbService', function(ehealthDB) {
    return {
        add: function(obj) { ehealthDB.put(obj); }
    };
});

