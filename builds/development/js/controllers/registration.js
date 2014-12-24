myApp.controller('RegistrationController', ['$scope', '$firebaseAuth', '$location', 'Authentication',  function($scope, $firebaseAuth, $location, Authentication){
	$scope.name = 'Nilesh';	

	//check whether the corresponding view has finished loading
	$scope.$on('$viewContentLoaded', function() {
		//console.log($scope.myform);
	});

	$scope.login = function(){
		Authentication.login($scope.user)
		.then(function(user){
			$location.path('/meetings');
		}).catch(function(error) {
		  	console.error("Authentication failed:", error);
		});
	};

	$scope.register = function(){
		alert($scope.user.firstname);
	};
}]);