angular.module('SkuStatusCtrl', []).controller('SkuStatusCtrl', function ($scope,Status) {
     

    Status.get().success(function (response) {
        $scope.skuStatus = response;
        console.log(JSON.stringify( $scope.skuStatus))
       // $scope.skuProducts.standard_product_codes.stdProduct =skuProducts.response;
       // console.log(JSON.stringify($scope.skuProducts.standard_product_codes))
      })        
    });
