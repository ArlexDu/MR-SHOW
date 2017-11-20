'use strict';
    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app', {
                url:'/',
                abstract: true,
                views: {
                    'shell': {
                        templateUrl: '../views/shell.html'
                    }
                }
            })
            .state('app.guide', {
                url: 'guide',
                views: {
                    'content': {
                        templateUrl: '../views/guide.html',
                        controller: 'guideController'
                    }
                }
            })
            .state('app.home', {
                url: 'home',
                views: {
                    'content': {
                        templateUrl: '../views/home.html'
                    }
                }
            })
            .state('app.customer', {
                url: 'customer',
                views: {
                    'content': {
                        templateUrl: '../views/customer.html'
                    }
                }
            })
            .state('app.service', {
                url: 'service',
                views: {
                    'content': {
                        templateUrl: '../views/service.html'
                    }
                }
            })
            .state('app.aboutus', {
                url: 'aboutus',
                views: {
                    'content': {
                        templateUrl: '../views/aboutus.html'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/guide');

    });
