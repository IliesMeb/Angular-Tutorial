var app = angular.module("tutorialApp", []);

// // $scope übertragt Daten vom Controller an den View bzw. auch andersrum
// app.controller("tutorialController", function($scope, $timeout) {
//     $scope.counter = 0;

//     $scope.incrementCounter = function() {
//         $timeout(function() {
//             $scope.counter = $scope.counter + 1;
//             console.log($scope);
//         }, 1000);
//         // check for scope changes
//     };
// });
// -------------------

// var c = ["$scope", "$timeout", function(a, b) {
//     console.log(b)
// }];

// app.controller("tutorialController", c);

// console.log(angular.injector.$$annotate(c));
// ------------------------

// app.factory("notify", ["$timeout",
//     function($timeout) {
//     return function(message) {
//         $timeout(function() {
//             alert(message);
//         }, 1000);
//     };
// }]);

// app.controller("tutorialController", ["$scope", "notify",
// function($scope, notify) {
//     $scope.notify= function(message) {
//         notify(message);
//     };
// }]);
// --------------

app.controller("tutorialController",
function($scope) {
    $scope.randomNumber = Math.random();
});

app.factory("randomNumber", function() {
    var randomNumber = Math.random();
    return function() {
        return randomNumber;
    }
});
app.controller("tutorialController2",
function($scope, randomNumber) {
    $scope.randomNumber = randomNumber();
});