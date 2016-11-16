angular.module("app")
	.controller("profileCtrl", function($scope, user, userService) {
		$scope.user = user;

		$scope.updateUser = function(user) {
			userService.updateUser(user)
				.then(function(response) {
					$scope.user = response.data;
				});
		};
	});
