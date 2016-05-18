angular.module('skuReturnListCtrl', []).controller('skuReturnListCtrl', function ($scope, skuReturnListProducts,$stateParams, $ionicLoading) {
	
	var returns = $stateParams.returns;
	
	skuReturnListProducts.get(returns).success(function (response) {
        $scope.skureturnListProducts = response;
        
       $ionicLoading.hide();
     
      });      
     
  });
