angular.module('SignInCtrl', []) .controller('SignInCtrl', function($scope, $state,localStorageService, tokenService, $location, $ionicLoading ) {
	  

	var userData = 'user';
	var bearerTokenData = 'bearerToken';

	$scope.users = [];
	$scope.user = {
			"user": "6F11B196321D4C79FB503AD99AC82F30982CBFBE",
			"pass": "Kcg6nJqIOF3TojQk9sENX0QnBeI0OGHMeaF7D0P7LMDV",
			"merchantId"	:	"b7f808daefae4f2e9d0d5303a6029df9"
	};

	$scope.createLogIn = function () {
		
		$scope.getLogIn();
		console.log(">>>>>>>>>>$scope.users.length : "+ $scope.users.length);

		tokenService.post($scope.user).success(function (response) {
			$ionicLoading.hide();
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