angular.module('mean.training').controller('TrainingController',
 ['$scope', '$http', '$location', 'Global', 
  function ($scope, $http, Global) {
    $scope.global = Global;

    $scope.viewAll = function(){
    	$scope.maxModules = 5;
    	$scope.viewAll = "";
    };
	$scope.modules = function(){
		$http.get('users/me').success(function(data) {
			$scope.user = data;
			$scope.modules = [{
			    "title": "Behavior",
			    "reference": "behavior",
			    "link" : "#",
			    "label": $scope.user.completionOne + "%",
			    "percentage": $scope.user.completionOne/100
			}, {
			    "title": "Module 2",
			    "label": $scope.user.completionTwo + "%",
			    "percentage": $scope.user.completionTwo/100			
			}, { 
				"title": "Module 3",
				"label": $scope.user.completionThree + "%",
				"percentage": $scope.user.completionThree/100
			}, {
				"title": "Module 4",
				"label": $scope.user.completionFour + "%",
				"percentage": $scope.user.completionFour/100
			}, {
				"title": "Module 5",
				"label": $scope.user.completionFive + "%",
				"percentage": $scope.user.completionFive/100
			}];
		});
		$scope.maxModules = 3;
		$scope.viewAll = "View All";
	};

	$scope.update = function() {
		var user = $scope.user;
		user.updated.push();
		user.$update(function() {
			$location.path('#/training');
		});
	};

}]); 