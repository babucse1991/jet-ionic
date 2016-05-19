angular.module('skuSettlementListCtrl', []).controller('skuSettlementListCtrl', function ($scope, skuSettlementListProducts,$stateParams, $ionicLoading) {
	
	var settlement = $stateParams.dateId;
	
	skuSettlementListProducts.get(settlement).success(function (response) {
        $scope.skuSettlementListProducts = response;
        
       $ionicLoading.hide();
     
      });      
     
  });
