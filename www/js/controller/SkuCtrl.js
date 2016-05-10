angular.module('SkuCtrl', []).controller('SkuCtrl', function ($scope, skuProducts,localStorageService) {
      
	var skuId = 'merchant-skus/NA1193';
    
    skuProducts.get(skuId).success(function (response) {
        $scope.skuProducts = response;
       // $scope.skuProducts.standard_product_codes.stdProduct =skuProducts.response;
       // console.log(JSON.stringify($scope.skuProducts.standard_product_codes))
      })        
    });
