
'use strict';

angular
    .module('signIn.module')
    .controller('SignInCtrl', SignInCtrl);

SignInCtrl.$inject = ['$scope','$state'];

function SignInCtrl($scope,$state) {
  
   $scope.signIn = function(user) {
	    console.log('Sign-In', user);
	    $state.go('tab.dash');
	  };
}