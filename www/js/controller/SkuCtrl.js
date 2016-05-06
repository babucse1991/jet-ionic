angular.module('SkuCtrl', [])

    .controller('SkuCtrl', function ($scope, skuProducts) {
        $scope.skuProducts = skuProducts.data;
        $scope.skuProducts.standard_product_codes = skuProducts.data;
    });
