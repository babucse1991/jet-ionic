'use strict';

angular
    .module('friends.module')
    .controller('FriendsCtrl', FriendsCtrl);

FriendsCtrl.$inject = ['$scope','Friends'];

function FriendsCtrl($scope,Friends) {
    /* jshint validthis: true */
    var vm = this;

    vm.friends = Friends.getAll();
    
}