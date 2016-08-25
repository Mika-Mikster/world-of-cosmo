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
        when('/dialogSix', {
            templateUrl: '/dialog/dialogSix.html',
            controller: 'dialogSixBController'
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
        $http.delete("/itemsbag/" + "Bottle of Water").success(function() {
            testService.setTrigger("Deleted item from dialog 5A");
        });
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

    $scope.recipeShampoo = {
        id: 0,
        mixItemName: "Shampoo",
        itemName1: "Bottle of Water",
        itemName2: "Jar of Bicarbonate"
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
        $http.post(
            '/recipe', angular.toJson($scope.recipeShampoo)
        ).success(function () {
            $scope.load();
        });
    };
    testService.setTrigger("Item from dialog 2");
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
        $http.delete("/itemsbag/" + "Bottle of Water").success(function() {
            testService.setTrigger("Deleted item from dialog 5A");
        });
    };
});
viewApp.controller('dialogSixController', function($scope, $http, testService) {

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



// Recipe controller
viewApp.controller ("recipeCtrl", function ($scope, $http, testService){
    $scope.load = function() {

        console.log("loading recipe");
        $http.get('/recipe').success(function (data, status, headers, config)
        {
            $scope.recipes = data;
        }).error(function (data, status, headers, config) {
            console.log(status);
            console.log(data);
        });


    };

    $scope.hovered = function(){
        this.hoverShow = true;
    };

    $scope.nothovered = function(){
        this.hoverShow = false;
    };

    $scope.load();
});


// mixed items controller
viewApp.controller ("mixeditemsCtrl", function ($scope, $http, testService){
    $scope.load = function() {

        console.log("loading mixed item");
        $http.get('/mixeditems').success(function (data, status, headers, config)
        { console.log(data);
            $scope.mixeditems = data;
        }).error(function (data, status, headers, config) {
            console.log(status);
            console.log(data);
        });
        
    };
    $scope.load();

    $scope.hovered = function () {
        this.hoverShow = true;
    };

    $scope.hoveredOut = function () {
        this.hoverShow = false;
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
        testService.addNotification(
            $scope.load
        );
    };


    $scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };

    $scope.itemShampoo = ["Bottle of Water", "Jar of Bicarbonate"];

    $scope.selection = [];

    $scope.toggle = function (idx) {
        var pos =
            $scope.selection.indexOf($scope.itemsbags[idx].itemName);
        if (pos == -1) {
            $scope.selection.push($scope.itemsbags[idx].itemName);
        } else {
            $scope.selection.splice(pos, 1);
        }

        $scope.save = function () {
            $http.get('/mixeditems').success(function (data, status, headers, config) {
                $scope.mixeditems = data;
            }).error(function (data, status, headers, config) {
                console.log(status);
                console.log(data);
            });
            console.log("Saving items for mixing");
            var mix = document.getElementById("mix");
            // Dit is een voorlopige check of beide scopes gelijk zijn aan elkaar
            if ($scope.selection.length == $scope.itemShampoo.length ) {
                var showMix = document.getElementById('createdItems');
                showMix.style.visibility = "visible";

                $http.delete("/itemsbag/" + $scope.itemShampoo[0]).success(function() {
                    testService.setTrigger("Deleted items for mixing");
                });
                $http.delete("/itemsbag/" + $scope.itemShampoo[1]).success(function() {
                    testService.setTrigger("Deleted items for mixing");
                });
            }
        }
    };
    $scope.load();
});