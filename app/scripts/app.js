'use strict';

/**
 * @ngdoc overview
 * @name angularTutorialApp
 * @description
 * # angularTutorialApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angularTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
    .constant('FIREBASE_URL', 'https://boiling-fire-9739.firebaseio.com/');

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        })
        .when('/posts/:postId', {
            templateUrl: 'views/showpost.html',
            controller: 'PostViewCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

});