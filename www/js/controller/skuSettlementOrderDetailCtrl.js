angular.module('skuSettlementOrderDetailCtrl', []).controller('skuSettlementOrderDetailCtrl', function ($scope, settlement_idReturn,$ionicPopup, $ionicLoading) {
	$scope.skuSettlementOrderDetailProducts = settlement_idReturn;
	$ionicLoading.hide();
});


