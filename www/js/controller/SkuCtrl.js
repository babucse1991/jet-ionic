angular.module('SkuDetailsCtrl', []).controller('SkuDetailsCtrl', function ($scope, skuUrlReturn) {
	console.log(">>>>>skuUrlReturn>>>>>>>>>>"+ JSON.stringify(skuUrlReturn));
	$scope.skuProducts = skuUrlReturn;
	        
});


