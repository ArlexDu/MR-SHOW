'use strict';

/**
 * @ngdoc overview
 * @name shuapiaoBackWebApp
 * @description
 * # app
 *
 * Main module of the application.
 */

var app = angular.module('app', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'textAngular',
    'ngFileUpload'
]);
app.config(function($httpProvider) {

});

