var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'appControllers'])
	.value('FIREBASE_URL', 'https://angulardataapp.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/meetings', {
			templateUrl: 'views/meetings.html',
			controller: 'meetingsController'
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);