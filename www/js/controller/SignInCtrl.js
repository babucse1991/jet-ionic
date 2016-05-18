angular.module('SignInCtrl', []) .controller('SignInCtrl', function($scope, $state,localStorageService, tokenService, $location, $ionicLoading ) {
	  
	var userData = 'userApiKey';
	var bearerTokenData = 'bearerToken';

	$scope.user = {};

	$scope.createLogIn = function () {

		tokenService.post($scope.user).success(function (response) {
			$ionicLoading.hide();
			$scope.bearerToken= response;
			console.log("login token : " + JSON.stringify($scope.bearerToken));
			localStorageService.set(userData, $scope.user);
			localStorageService.set(bearerTokenData, $scope.bearerToken);
			$location.path("/tab/dash");
		}) ; 
		
	};
	
	$scope.getExistingUser = function () {
        if (localStorageService.get(userData)) {
            $scope.user = localStorageService.get(userData);
            $scope.createLogIn();
        } 
	}
	$scope.getExistingUser();
	
	
});