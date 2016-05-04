'use strict';

angular
    .module('friends.module')
    .config(function config($stateProvider) {
        $stateProvider

            .state('tab.friends', {
                url: '/friends',
                views: {
                    'tab-friends': {
                        templateUrl: '../templates/tab-friends.html',
                        controller: 'FriendsCtrl',
                        controllerAs: 'vm'
                       
                    }
                }
            })
    });