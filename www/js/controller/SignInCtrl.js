angular.module('SignInCtrl', []) .controller('SignInCtrl', function($scope, $state,localStorageService, tokenService, $location ) {
	  

	var userData = 'user';
	var bearerTokenData = 'bearerToken';

	$scope.users = [];
	$scope.user = {};

	$scope.createLogIn = function () {
		$scope.getLogIn();
		console.log(">>>>>>>>>>$scope.users.length : "+ $scope.users.length);

		tokenService.post($scope.user).success(function (response) {
			$scope.bearerToken= response;
			console.log(">>>>>>1st time login : " + JSON.stringify($scope.bearerToken));
			$scope.users.push($scope.user);
			localStorageService.set(userData, $scope.users);
			localStorageService.set(bearerTokenData, $scope.bearerToken);
			$location.path("/tab/dash");
		}) ;       

	}
	
	$scope.getLogIn = function () {
		console.log(">>>userData>>>>>"+ JSON.stringify(userData));
        if (localStorageService.get(userData)) {
            $scope.users = localStorageService.get(userData);
        } else {
            $scope.users = [];
        }
	}
	$scope.getLogIn();
	

});