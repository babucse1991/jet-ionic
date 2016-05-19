angular.module('skuRefundListCtrl', []).controller('skuRefundListCtrl', function ($scope, skuRefundListProducts,$stateParams, $ionicLoading) {
	
	var refund = $stateParams.refund;
	
	skuRefundListProducts.get(refund).success(function (response) {
        $scope.skuRefundListProducts = response;
        
       $ionicLoading.hide();
     
      });      
     
  });
