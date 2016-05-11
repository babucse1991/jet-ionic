angular.module('SkuOrderDetailCtrl', []).controller('SkuOrderDetailCtrl', function ($scope,orderUrlReturn) {
	//alert( JSON.stringify(orderUrlReturn))
//	console.log(">>>>>skuOrderListProducts>>>>>>>>>>"+ JSON.stringify(orderUrlReturn));
	$scope.skuOrderDetailProducts = orderUrlReturn;
	        
});


