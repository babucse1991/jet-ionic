angular.module('skuCreateListCtrl', []) .controller('skuCreateListCtrl', function($scope,skuCreateListService,localStorageService ) {
	  

		/*var skuProducts = 'productList';
	var bearerTokenData = 'bearerToken';
	
	$scope.productLists = [];*/
	$scope.productList = {};
	$scope.productList.standard_product_codes=[]
	$scope.skuCreateList= function () {
		//var skuProducts=skuProducts;
		//console.log(">>>>>>>>>>$scope.skuProducts.length : "+ $scope.productLists.length);

		skuCreateListService.post($scope.productList).success(function (response) {
			$scope.productList.standard_product_codes.sss=productList.response;
			//$scope.bearerToken= response;
		//	console.log(">>>>>>1st time login : " + JSON.stringify($scope.bearerToken));
			$scope.productLists.push($scope.productList);
			$scope.productList.standard_product_codes.push($scope.productList.standard_product_codes);
			//localStorageService.set(skuProducts, $scope.productLists);
			//localStorageService.set(bearerTokenData, $scope.bearerToken);
			
		});       

	}

});