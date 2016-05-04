

/*angular.module('products.module', [])
    .controller('ProductsCtrl', function ($scope, products) {
        $scope.products = products.data;
    });*/
'use strict';

angular
    .module('products.module')
    .controller('ProductsCtrl', ProductsCtrl);

ProductsCtrl.$inject = ['$scope'];

function ProductsCtrl($scope, products) {
   
    var vm = this;

    //alert("aaa")
   // $scope.products = products.data;

    vm.title = "products"
}