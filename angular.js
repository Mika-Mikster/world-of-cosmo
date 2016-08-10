angular.module('windowExample', [])
    .controller('ExampleController', ['$scope', '$window', function($scope, $window) {
        $scope.greeting = 'Hello, World!';
        $scope.doGreeting = function(greeting) {
            $window.alert(greeting);
        };
    }]);

