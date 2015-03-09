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
        //      
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthCtrl',
            resolve: {
                user: function (Auth) {
                    return Auth.resolveUser();
                }
            }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl',
            resolve: {
                user: function (Auth) {
                    return Auth.resolveUser();
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });

});