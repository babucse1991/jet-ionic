angular.module('SkuOrderDetailCtrl', []).controller('SkuOrderDetailCtrl', function ($scope, orderUrlReturn, $ionicLoading,skuCreatAcknowledgetService) {
	//alert( JSON.stringify(orderUrlReturn))
//	console.log(">>>>>skuOrderListProducts>>>>>>>>>>"+ JSON.stringify(orderUrlReturn));
	$scope.skuOrderDetailProducts = orderUrlReturn;

	$ionicLoading.hide();


	$scope.CreatAcknowledge = function(){
		
		var ackData = {
				"acknowledgement_status": "accepted", 
				"alt_order_id": $scope.skuOrderDetailProducts.data.alt_order_id,
				"order_items": [
				                {
				                	"order_item_acknowledgement_status": "fulfillable",
				                	"order_item_id": $scope.skuOrderDetailProducts.data.order_items[0].order_item_id
				                }
				                ]
		};

		skuCreatAcknowledgetService.post(ackData, $scope.skuOrderDetailProducts.data.merchant_order_id).success(function (response) {
			$ionicLoading.hide();
		});       
	}

});


