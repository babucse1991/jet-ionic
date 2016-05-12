angular.module('SkuListCtrl', []).controller('SkuListCtrl', function ($scope, skuListProducts) {
    
	skuListProducts.get().success(function (response) {
        $scope.skuListProducts = response;
      })     
      $scope.itemsPerPage = 10;
	  $scope.currentPage = 1;
    })
.filter('offset', function () {
	  return function (input, offset) {
		    return (input instanceof Array) ? input.slice(+offset) : input; 
		  }
		});