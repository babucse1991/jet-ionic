angular.module('ProductCtrl', [])

.controller('ProductCtrl', function ($scope, product) {
    $scope.product = product.data;
});
