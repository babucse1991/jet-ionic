/*'use strict';

angular
    .module('products.module')
    .config(function config($stateProvider) {
        $stateProvider

        .state('tab.products', {
            url: '/products',
            views: {
                'tab-products': {
                    templateUrl: '../templates/tab-products.html',
                    controller: 'ProductsCtrl',
                    controllerAs: 'vm',
                    
                    resolve: {
                        products: function (Products) {
                            return Products.top();
                        }
                    }

                }
            }
        })
    });

*/
'use strict';

angular
    .module('products.module')
    .config(function config($stateProvider) {
        $stateProvider

            .state('tab.products', {
                url: '/products',
                views: {
                    'tab-products': {
                        templateUrl: '../templates/tab-products.html',
                        controller: 'ProductsCtrl',
                        controllerAs: "vm"
                     /*   
                        resolve: {
                            products: function (Products) {
                                return Products.top();
                            }
                        }*/
                    }
                }
            });
    });

