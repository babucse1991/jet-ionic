angular.module('ProductCtrl', [])

.controller('ProductCtrl', function ($scope, product) {
	console.log(">>>>>product>>>>>>>>>>"+ JSON.stringify(product));
    $scope.product = product.data;
});
