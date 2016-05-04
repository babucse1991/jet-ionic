(function(){

    'use strict';

angular
    .module('products.module')
    .factory('Products', [ProductsService])

;




function ProductsService($http) {

        return {
            top: function () {
                var url = '../json/topproducts.json';
                return $http.get(url);
            },
            get: function (productUrl) {
                // Final url is productUrl + the _type=json argument
                var url = productUrl + "?_type=json";
                return $http.get(url);
            }
        }
    }
 });
