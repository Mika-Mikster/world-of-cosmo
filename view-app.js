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
        when('/dialogThree', {
            templateUrl: '/dialog/dialogThree.html',
            controller: 'dialogThreeController'
        }).
        when('/dialogFourA', {
            templateUrl: '/dialog/dialogFourA.html',
            controller: 'dialogFourAController'
        }).
        when('/dialogFourB', {
            templateUrl: '/dialog/dialogFourB.html',
            controller: 'dialogFourBController'
        }).
        when('/dialogFourC', {
            templateUrl: '/dialog/dialogFourC.html',
            controller: 'dialogFourCController'
        }).
        when('/dialogFiveA', {
            templateUrl: '/dialog/dialogFiveA.html',
            controller: 'dialogFiveAController'
        }).
        when('/dialogFiveB', {
            templateUrl: '/dialog/dialogFiveB.html',
            controller: 'dialogFiveBController'
        }).
        otherwise({
            redirectTo: '/dialogOne'
        });
    }]);


viewApp.controller('dialogOneController', function($scope) {
});


viewApp.controller('dialogTwoController', function($scope, $http, testService) {

    $scope.itemsbag1 = {
        id: 0,
        itemName: "Jar of Bicarbonate",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "0",
        itemHeal: "0"
    };
    $scope.save = function() {
        $http.post(
            '/itemsbag',
            angular.toJson($scope.itemsbag1)).success(
            function() {
                testService.setTrigger("Item from dialog 2");
            });
    };

});

viewApp.controller('dialogThreeController', function($scope, testService) {
    testService.setTrigger("Item from dialog 3");
});

viewApp.controller('dialogFourAController', function($scope) {

    $scope.itemsbag2 = {
        id: 0,
        itemName: "Bottle of Water",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "15",
        itemHeal: "15"
    };
    $scope.save = function() {
        $http.post(
            '/itemsbag',
            angular.toJson($scope.itemsbag2)).success(
            function() {
                testService.setTrigger("Item from dialog 4");
            });
    };

});

viewApp.controller('dialogFourBController', function($scope) {
});

viewApp.controller('dialogFourCController', function($scope) {
});


viewApp.controller('dialogFiveAController', function($scope, $http) {

    $scope.itemsbag3 = {
        id: 0,
        itemName: "Bottle of Olive Oil",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "5",
        itemHeal: "15"
    };

    $scope.itemsbag4 = {
        id: 0,
        itemName: "Bottle of Water",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "15",
        itemHeal: "15"
    };

    $scope.save = function () {
        $http.post('/itemsbag', angular.toJson($scope.itemsbag3)).success(function () {
            $scope.load();
        });
        $http.post('/itemsbag', angular.toJson($scope.itemsbag4)).success(function () {
            $scope.load();
        });
    };

});
viewApp.controller('dialogFiveBController', function($scope) {
});

// service
viewApp.service('testService', function(){

    this.setTrigger= function(text){
        notification();
    };
    var notification;
    this.addNotification= function(notification2) {
        notification = notification2;
    };
});

// Itembag controller
viewApp.controller ("itembagCtrl", function ($scope, $http, testService){
        $scope.load = function(){

            console.log("load function");
                    $http.get('/itemsbag').
                    success(function(data, status, headers, config)
                    {
                        $scope.itemsbags = data;
                    })

                    .error(function(data, status, headers, config)
                    {
                        console.log(status);
                        console.log(data);
                    });
                };
    testService.addNotification(
        $scope.load
    );
    $scope.load();
});



// $scope.delete = function (ID) {
//     $http.delete("/itemsbag/" + ID).success(function() {
//         $scope.load();
//     });
// };