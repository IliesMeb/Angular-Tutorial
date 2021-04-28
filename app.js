var app = angular.module('tutorialApp', ['ngRoute']); //ngSanitize

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

// app.controller("tutorialController", function($scope, $sce) {
//     $scope.description = $sce.trustAsHtml("<p style='color: red'><strong>Hallo</strong> Welt</p>");
// });
// ---------------------

// app.controller("tutorialController", function($scope, $timeout) {
//     $scope.showPanel = false;
//     $scope.$watch("showPanel",function(newValue, oldValue) {
//         if(newValue == true) {
//             $timeout(function(){
//                 $scope.showPanel = false;
//             }, 1000);
//         };
//     });
// });
// --------------

// app.controller("tutorialController", function($scope) {
//     $scope.showCities = false;
//     $scope.cities = [];
//     $scope.$watch("showCities", function() { 
//         if ($scope.showCities == true) {
//             var request = new XMLHttpRequest();
//             request.onreadystatechange = function() {
//                 if (request.readyState == 4 && request.status == 200) {
//                     $scope.cities = JSON.parse(request.responseText);
//                     $scope.$apply();
//                 }
//             };
//            request.open("GET", "cities.json", "true");
//            request.send();
//         }
//     });
// });
// -----------------

// app.controller("tutorialController", function($scope, $http) {
//         $scope.showCities = false;
//         $scope.cities = [];
//         $scope.$watch("showCities", function() { 
//             if ($scope.showCities == true) {
//                 $http.get("cities-nichtexistent.json").then(function(data) {
//                     $scope.cities = data.data;
//                 }, function(err) {
//                     alert("Bitte Internetzverbidnung prüfen");
//                 });
//             }
//         });
//     });
// --------------

    app.config(function($routeProvider) {
        $routeProvider.when("/start", {
            templateUrl: "partials/start.html",
            controller: "StartController"
        }).when("/start/:name/:age", {
            templateUrl: "partials/start.html",
            controller: "StartController"
        }).when("/about", {
            templateUrl: "partials/about.html"
        }).when("/about2", {
            template: "<h3>about2</h3>"
        }).otherwise({
            redirectTo:"/start"
        });
    });

    app.controller("StartController", function($scope, $routeParams) {
        $scope.title = "StartController:" + $routeParams.name;
        $scope.age = $routeParams.age;
        console.log($routeParams);
    });

    app.controller("tutorialController", function($scope) {

    });
