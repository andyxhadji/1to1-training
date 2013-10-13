'use strict';

/* Controllers */
//var app = angular.module('angularjs-starter', ['$strap.directives']);

function OverviewCtrl($scope, $http) {
  $http.get('json/comment.json').success(function(data) {
	  $scope.comments = data;
	  $scope.gotoFlash = function(comment) {
		  //alert ("OK");
	  };
  });
}

