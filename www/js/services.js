angular.module('starter.services', [])


	.factory('tokenService', function ($http) {
	    return {
	        post: function (userModel) {
	            var url = '';
	            return $http({
	    			url: 'https://merchant-api.jet.com/api/token',
	    			method	: 'POST',
	    			headers	: { 'Authorization' :  'Bearer ' + userModel.merchantId },
	    			dataType: 'json',
	    			data	: userModel
	    		});
	        },
	        get: function (productUrl) {
	            // Final url is productUrl + the _type=json argument
	            var url = productUrl + "?_type=json";
	            return $http.get(url);
	        }
	    }
	})
    .factory('Products', function ($http) {
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
    })
    
     .factory('Status', function ($http) {
        return {
            get: function () {
                return $http.get("../json/SKU-Status.json");
            }
        }
    })
    
         .factory('skuProducts', function ($http,localStorageService) {
        return {
            get: function (skuId) {
            	var bearerToken = localStorageService.get('bearerToken');
                console.log(">>>userData>>>>>"+ JSON.stringify(bearerToken.id_token));
                return $http({
	    			url: 'https://merchant-api.jet.com/api/' + skuId,
	    			method	: 'GET',
	    			headers	: { 'Authorization' :  'Bearer ' + bearerToken.id_token },
	    			dataType: 'json'
	    		});
            }
        }
    })
    
       
     .factory('skuListProducts', function ($http,localStorageService) {
        return {
          
        	 get: function () {
             	var bearerToken = localStorageService.get('bearerToken');
                 console.log(">>>userData333333333>>>>>"+ JSON.stringify(bearerToken.id_token));
                 return $http({
 	    			url: 'https://merchant-api.jet.com/api/merchant-skus' ,
 	    			method	: 'GET',
 	    			headers	: { 'Authorization' :  'Bearer ' + bearerToken.id_token },
 	    			dataType: 'json'
 	    		});
             }
        }
    })
    
    .factory('skuOrderListProducts', function ($http,localStorageService){
        return {
       	 get: function (status) {
            	var bearerToken = localStorageService.get('bearerToken');
                console.log(">>>userData222222222>>>>>"+ JSON.stringify(bearerToken.id_token));
                return $http({
	    			url: 'https://merchant-api.jet.com/api/orders/' + status ,
	    			method	: 'GET',
	    			headers	: { 'Authorization' :  'Bearer ' + bearerToken.id_token },
	    			dataType: 'json'
	    		});
            }
       }
    })
    
     .factory('skuOrderDetailProducts', function ($http,localStorageService){
        return {
       	 get: function (orderId) {
            	var bearerToken = localStorageService.get('bearerToken');
                console.log(">>>userData11111111111>>>>>"+ JSON.stringify(bearerToken.id_token));
                return $http({
	    			url: 'https://merchant-api.jet.com/api' + orderId ,
	    			method	: 'GET',
	    			headers	: { 'Authorization' :  'Bearer ' + bearerToken.id_token },
	    			dataType: 'json'
	    		});
            }
       }
    })
    
    .factory('skuCreateListService', function ($http,localStorageService) {
	    return {
	        post: function (productList) {
	        	console.log(">>>sice>>>>>"+ JSON.stringify(productList))
	        	alert(">>>sice>>>>>"+ JSON.stringify(productList))
	        	var bearerToken = localStorageService.get('bearerToken');
	        	 console.log(">>>skuCreateListService>>>>>"+ JSON.stringify(bearerToken.id_token));
	            return $http({
	    			url: 'https://merchant-api.jet.com/api/merchant-skus/'+productList.merchant_sku,
	    			method	: 'PUT',
	    			headers	: { 'Authorization' :  'Bearer ' + bearerToken.id_token },
	    			dataType: 'json',
	    			data	: productList
	    		});
	        }
	    }
	})

    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [
            {
                id: 0,
                name: 'Ben Sparrow',
                lastText: 'You on your way?',
                face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
            },
            {
                id: 1,
                name: 'Max Lynx',
                lastText: 'Hey, it\'s me',
                face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
            },
            {
                id: 2,
                name: 'Andrew Jostlin',
                lastText: 'Did you get the ice cream?',
                face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
            },
            {
                id: 3,
                name: 'Adam Bradleyson',
                lastText: 'I should buy a boat',
                face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            },
            {
                id: 4,
                name: 'Perry Governor',
                lastText: 'Look at my mukluks!',
                face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
            }
        ];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        }
    })

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        // Some fake testing data
        var friends = [
            {
                id: 0,
                name: 'Ben Sparrow',
                notes: 'Enjoys drawing things',
                face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
            },
            {
                id: 1,
                name: 'Max Lynx',
                notes: 'Odd obsession with everything',
                face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
            },
            {
                id: 2,
                name: 'Andrew Jostlen',
                notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
                face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
            },
            {
                id: 3,
                name: 'Adam Bradleyson',
                notes: 'I think he needs to buy a boat',
                face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            },
            {
                id: 4,
                name: 'Perry Governor',
                notes: 'Just the nicest guy',
                face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
            }
        ];


        return {
            all: function () {
                return friends;
            },
            get: function (friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    });
