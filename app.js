var app = angular.module("tutorialApp", ["ngSanitize"]);

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

// app.controller("tutorialController",
// function($scope) {
//     $scope.randomNumber = Math.random();
// });

// app.factory("randomNumber", function() {
//     var randomNumber = Math.random();
//     return function() {
//         return randomNumber;
//     }
// });
// app.controller("tutorialController2",
// function($scope, randomNumber) {
//     $scope.randomNumber = randomNumber();
// });

// ------------------------
// app.controller("tutorialController",
// function($scope) {
//     $scope.title = "";
// });
//------------

// app.controller("tutorialController",
// function($scope) {
//     $scope.newMember = "";
//     $scope.members = [
//         "Mark",
//         "Peter"
//     ];

//     $scope.addNewMember = function () {
//         $scope.members.push($scope.newMember);
//         $scope.newMember = "";
//     };
// });
// --------------------

// app.controller("tutorialController",
// function($scope) {
//     $scope.checked = false;
// });
// -----------

// app.controller("tutorialController",
// function($scope) {
//     $scope.availableOptions = [
//         {
//             "id": "123",
//             "title": "AngularJS"
//         },
//         {
//             "id": "321",
//             "title": "NodeJS"
//         }
//     ];
// });
// ------------------------

// app.controller("tutorialController", function($scope) {
//     $scope.isBlue = "false";
// });
// ---------------------

app.controller("tutorialController", function($scope, $sce) {
    $scope.description = $sce.trustAsHtml("<p style='color: red'><strong>Hallo</strong> Welt</p>");
});