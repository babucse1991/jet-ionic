angular.module('SkuOrderListCtrl', []).controller('SkuOrderListCtrl', function ($scope, skuOrderListProducts) {
      
	skuOrderListProducts.get().success(function (response) {
        $scope.skuOrderListProducts = response;
        $scope.skuOrderListProducts.order_urls.ll = skuOrderListProducts.response;
        console.log(JSON.stringify($scope.skuOrderListProducts.order_urls))
      })        
    });
