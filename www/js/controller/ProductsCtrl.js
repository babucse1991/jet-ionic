angular.module('ProductsCtrl', [])

.controller('ProductsCtrl', function ($scope, products) {
    $scope.products = products.data;
})