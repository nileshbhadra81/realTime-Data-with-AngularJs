myApp.factory('Authentication', ['$firebase', '$firebaseAuth', 'FIREBASE_URL', '$location', function($firebase, $firebaseAuth, FIREBASE_URL, $location){

	var ref = new Firebase(FIREBASE_URL);
	var simpleLogin = $firebaseAuth(ref);

	var myObject = {
		login: function(user){
			return simpleLogin.$authWithPassword({
				email: user.email,
				password: user.password
			});
		}
	}

	return myObject;
}]);