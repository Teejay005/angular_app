'use strict';

var app = angular.module('ehealthApp', ['ehealthApp.pouchdb', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	});
});

