//Define an angular module for our app
var viewApp = angular.module('viewApp', [
    'ngRoute'
]);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
viewApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/dialogOne', {
            templateUrl: '/dialog/dialogOne.html',
            controller: 'dialogOneController'
        }).
        when('/dialogTwo', {
            templateUrl: '/dialog/dialogTwo.html',
            controller: 'dialogTwoController'
        }).
        otherwise({
            redirectTo: '/dialogOne'
        });
    }]);


viewApp.controller('dialogOneController', function($scope) {

    $scope.message = 'This is Add new order screen';

});


viewApp.controller('dialogTwoController', function($scope) {

    $scope.message = 'This is Show orders screen';

});

viewApp.controller ("itembagctrl", function ($scope, $http) {
    $scope.load = function ()  {
        $http.get('/itemsbag').
        success(function(data, status, headers, config) {
            $scope.itemsbags = data;
        }).
        error(function(data, status, headers, config) {
            console.log(status);
            console.log(data);
        });
    };

    $scope.load();
});