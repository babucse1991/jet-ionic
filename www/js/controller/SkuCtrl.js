angular.module('SkuCtrl', []).controller('SkuCtrl', function ($scope, skuProducts) {
      
    skuProducts.get().success(function (response) {
        $scope.skuProducts = response;
       // $scope.skuProducts.standard_product_codes.stdProduct =skuProducts.response;
       // console.log(JSON.stringify($scope.skuProducts.standard_product_codes))
      })
        
        /*
        $scope.stdProductCode = function(){
        	 skuProducts.get().success(function (response) {
        	$scope.skuProduct = response;
        $scope.skuProduct.standard_product_codes = response;
            console.log(JSON.stringify(response))
        });
        	 }*/
        
    });
