angular.module("app")
	.service("authService", function($http) {

		this.login = function(user) {
			return $http({
					method: 'post',
					url: '/api/login',
					data: user
				})
				.then(function(response) {
					return response;
				});
		};

		this.logout = function() {
			return $http({
					method: 'get',
					url: '/api/logout'
				})
				.then(function(response) {
					return response;
				});
		};

		this.getCurrentUser = function() {
			return $http({
					method: 'GET',
					url: '/api/me'
				})
				.then(function(response) {
					return response;
				});
		};

		this.registerUser = function(user) {
			return $http({
					method: 'POST',
					url: '/api/register',
					data: user
				})
				.then(function(response) {
					return response;
				});
		};

		this.editUser = function(id, user) {
			return $http({
					method: 'PUT',
					url: "/user/" + id,
					data: user
				})
				.then(function(response) {
					return response;
				});
		};
	});
