'use strict';

angular
    .module('friendDetail.module')
    .config(function config($stateProvider) {
        $stateProvider

            .state('tab.friend-detail', {
                url: '/friend/:friendId',
                views: {
                    'tab-friends': {
                        templateUrl: '../templates/friend-detail.html',
                        controller: 'FriendDetailCtrl',
                        controllerAs: 'vm'
                    }
                }
            });
    });