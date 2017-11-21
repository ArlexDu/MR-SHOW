'use strict';

/**
 * @ngdoc overview
 * @name mingruapp
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

