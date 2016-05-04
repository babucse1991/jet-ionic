'use strict';

angular
    .module('friendDetail.module')
    .controller('FriendDetailCtrl', FriendDetailCtrl);

FriendDetailCtrl.$inject = ['$scope','$stateParams','Friends'];

function FriendDetailCtrl($scope, $stateParams, Friends) {
    /* jshint validthis: true */
    var vm = this;

    vm.friend = Friends.getMessageById($stateParams.friendId);
}