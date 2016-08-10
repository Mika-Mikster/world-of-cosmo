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
