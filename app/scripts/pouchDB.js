'use strict';

var shops = angular.module('ehealthApp.pouchdb', []);

var PouchdbCtrl = function ($scope) {
	$scope.hello = [1,2,3];
};

shops.controller('PouchdbCtrl', PouchdbCtrl);



