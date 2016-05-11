angular.module('SkuOrderListCtrl', []).controller('SkuOrderListCtrl', function ($scope, skuOrderListProducts) {
      
	skuOrderListProducts.get().success(function (response) {
        $scope.skuOrderListProducts = response;
      })        
    });
