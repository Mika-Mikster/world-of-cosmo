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

viewApp.controller('dialogThreeController', function($scope, testService, $http) {
    testService.setTrigger("Item from dialog 2");

    $scope.itemsbag2 = {
        id: 2,
        itemName: "Bottle of Water",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "15",
        itemHeal: "15"
    };

    $scope.save = function() {
        $http.post(
            '/itemsbag', angular.toJson($scope.itemsbag2)
        ).success(
            function() {
                testService.setTrigger("Item from dialog 3");
            });
    };
});

viewApp.controller('dialogFourAController', function($scope, $http, testService, $timeout) {
    $timeout(function(){
        testService.setTrigger("Delay save item from dialog 3");
    }, 2000);

    $scope.itemsbag5 = {
        id: 0,
        itemName: "Bottle of Water",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "15",
        itemHeal: "15"
    };

    $scope.delete = function (Name) {
        $timeout(function(){
            $http.delete("/itemsbag/" + "Bottle of Water").success(function() {
                testService.setTrigger("Deleted item from dialog 5A");
            });
        }, 14000);
    };
});

viewApp.controller('dialogFourBController', function($scope, $http, testService) {

    $scope.itemsbag3 = {
        id: 0,
        itemName: "Bottle of Water",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "15",
        itemHeal: "15"
    };

    $scope.save = function() {
        $http.post(
            '/itemsbag', angular.toJson($scope.itemsbag3)
        ).success(
            function () {
                testService.setTrigger("Item from dialog 3");
            });
    };
});

viewApp.controller('dialogFourCController', function($scope, $http, testService) {

    $scope.itemsbag4 = {
        id: 0,
        itemName: "Bottle of Water",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "15",
        itemHeal: "15"
    };

    $scope.save = function() {
        $http.post(
            '/itemsbag', angular.toJson($scope.itemsbag4)
        ).success(
            function () {
                testService.setTrigger("Item from dialog 3");
            });
    };
});


viewApp.controller('dialogFiveAController', function($scope, $http, $timeout, testService) {
    $timeout(function(){
        testService.setTrigger("Delay delete item from dialog 4A");
    }, 3000);

    $scope.itemsbag7 = {
        id: 0,
        itemName: "Bottle of Olive Oil",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "5",
        itemHeal: "15"
    };

    $scope.itemsbag8 = {
        id: 0,
        itemName: "Bottle of Water",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "15",
        itemHeal: "15"
    };


    $scope.save = function () {
        $http.post(
            '/itemsbag', angular.toJson($scope.itemsbag7)
        ).success(function () {
            $scope.load();
        });
        $http.post(
            '/itemsbag', angular.toJson($scope.itemsbag8)
        ).success(function () {
            $scope.load();
        });
    };

});
viewApp.controller('dialogFiveBController', function($scope, $http, testService) {

    $scope.itemsbag6 = {
        id: 0,
        itemName: "Bottle of Water",
        itemDescr: "An ingredient used for ......",
        itemAbi: "It can be mixed with other ingredients",
        itemHit: "15",
        itemHeal: "15"
    };

    $scope.delete = function (Name) {
        $timeout(function(){
            $http.delete("/itemsbag/" + "Bottle of Water").success(function() {
                testService.setTrigger("Deleted item from dialog 5A");
            });
        }, 14000);
    };
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

        console.log("loading item");
        $http.get('/itemsbag').
        success(function(data, status, headers, config)
        {
            $scope.itemsbags = data;
        }).error(function(data, status, headers, config) {
            console.log(status);
            console.log(data);
        });
    };
    testService.addNotification(
        $scope.load
    );

    $scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };

    $scope.load();
});



