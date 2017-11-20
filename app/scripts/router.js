'use strict';
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider

        .state('app', {
                url:'/',
                views: {
                    'shell': 'shell'
                }
            })
            .state('app.guide', {
                url: 'guide',
                views: {
                    'content': 'guide'
                }
            })
            .state('app.home', {
                url: 'home',
                views: {
                    'content': 'home'
                }
            })
            .state('app.customer', {
                url: 'customer',
                views: {
                    'content': 'customer'
                }
            })
            .state('app.service', {
                url: 'service',
                views: {
                    'content': 'service'
                }
            })
            .state('app.aboutus', {
                url: 'aboutus',
                views: {
                    'content': 'aboutus'
                }
            })
        ;

        $urlRouterProvider.otherwise('/');
    });
