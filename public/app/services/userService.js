angular.module("app")
	.service("userService", function($http) {

		this.getUsers = function() {
			return $http({
				method: 'GET',
				url: '/api/user'
			});
		};

		this.getUser = function(id) {
			return $http({
				method: 'GET',
				url: '/api/user?id=' + id
			});
		};

		this.updateUser = function(user) {
			return $http({
				method: 'PUT',
				url: '/api/user/current',
				data: user
			});
		};

		// Pass in object like this
		// queryObject = {
		//  id: 1,
		//  email: 'test@test.com'
		// }
		// Or pass in nothing at all to search all users
		this.findUsers = function(queryObject) {
			// If no data passed, make queryObject = {}
			if (!queryObject) {
				queryObject = {};
			}

			// Use a post so you can pass a body
			return $http({
				method: 'POST',
				url: '/api/user',
				data: queryObject
			});
		};
	});
