var quinventApp = angular.module('quinventApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'pages/home.html',
            })
            .state('about', {
                url: '/about',
                templateUrl: 'pages/about.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'pages/contact.html',
            });
    }])
