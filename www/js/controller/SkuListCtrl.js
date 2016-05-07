angular.module('SkuListCtrl', []).controller('SkuListCtrl', function ($scope, skuListProducts) {
      
	skuListProducts.get().success(function (response) {
        $scope.skuListProducts = response;
      })        
    });
