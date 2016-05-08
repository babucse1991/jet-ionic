angular.module('SignInCtrl', []) .controller('SignInCtrl', function($scope, $state,localStorageService, $ionicModal) {
	  
	 /* $scope.signIn = function(user) {
	    console.log('Sign-In', user);
	    $state.go('tab.dash');
	  };*/
	//store the entities name in a variable
	var userData = 'user';

	//initialize the tasks scope with empty array
	$scope.users = [];

	//initialize the task scope with empty object
	$scope.user = {};
	$scope.createLogIn = function () {
		 //creates a new task
       $scope.users.push($scope.user);
       localStorageService.set(userData, $scope.users);
       $scope.user = {};
       //close new task modal
     //  $scope.newTaskModal.hide();
	}
	$scope.getLogIn = function () {
	    //fetches task from local storage
		 //fetches task from local storage
        if (localStorageService.get(userData)) {
            $scope.users = localStorageService.get(userData);
        } else {
            $scope.users = [];
        }
	}
	
	$scope.openTaskModal  = function() {
		$scope.newTaskModal.show();
	}
	$ionicModal.fromTemplateUrl('templates\Re-password.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	}).then(function (modal) {
	    $scope.newTaskModal = modal;
	});
	
	/*
	$scope.addRePassword = function (size){
		var modalInstance = $ionicModal.fromTemplateUrl({ 'templates\Re-password.html',
			
		});
		modalInstance.result.then(function(selectedItem) {

		}, function() {
			$scope.getCompanyData();

		});
	};*/
});