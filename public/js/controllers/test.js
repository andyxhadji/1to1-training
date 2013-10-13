var myApp = angular.module('myApp',[]);
 
myApp.controller('GreetingCtrl', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
}]);