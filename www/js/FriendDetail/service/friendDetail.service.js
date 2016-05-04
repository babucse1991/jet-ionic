(function(){

	'use strict';

	angular
	.module('friendDetail.module')
	.factory('Friends', [friendDetailService])

	;

	function friendDetailService() {
		
		
		var service = {
		        getAll: all,
		        getMessageById: get
		    };
		  return service;
		
		function all() {
			return friends;
		}
		function get(friendId) {
			 return friends[friendId];
		}
	}
	
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

})();