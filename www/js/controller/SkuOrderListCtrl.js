angular.module('SkuOrderListCtrl', []).controller('SkuOrderListCtrl', function ($scope, skuOrderListProducts,$stateParams, $ionicLoading) {
      
	
	 var status = $stateParams.status;
	skuOrderListProducts.get(status).success(function (response) {
        $scope.skuOrderListProducts = response;
        $ionicLoading.hide();
      })        
     
      $scope.itemsPerPage = 10;
	  $scope.currentPage = 1;
  })
.filter('offset', function () {
	  return function (input, offset) {
		    return (input instanceof Array) ? input.slice(+offset) : input; 
		  }
		});