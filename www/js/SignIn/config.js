'use strict';

angular
    .module('signIn.module')
    .config(function config($stateProvider,$urlRouterProvider) {
        $stateProvider

        .state('signin', {
            url: '/sign-in',
            templateUrl: '../templates/sign-in.html',
            controller: 'SignInCtrl'
          })
          $urlRouterProvider.otherwise('/sign-in');
    });