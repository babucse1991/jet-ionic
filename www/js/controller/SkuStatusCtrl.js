angular.module('SkuStatusCtrl', []).controller('SkuStatusCtrl', function ($scope,Status, $ionicLoading,$filter) {
	$scope.date = new Date();
	$scope.settlement_date={
			"dateId": "10"
	}

    Status.get().success(function (response) {
        $scope.skuStatus = response;
        console.log(JSON.stringify( $scope.skuStatus));
        $ionicLoading.hide();
       // $scope.skuProducts.standard_product_codes.stdProduct =skuProducts.response;
       // console.log(JSON.stringify($scope.skuProducts.standard_product_codes))
      })        
    });
