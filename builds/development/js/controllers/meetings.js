myApp.controller('meetingsController', ['$scope', '$firebase', function($scope, $firebase){
	
	//reference to the database
	var ref = new Firebase('https://angulardataapp.firebaseio.com/meetings');
	//storing the database 
	var meetings = $firebase(ref);
	//store the data inside the scope as an object
	$scope.meetings = meetings.$asObject();

	//callback to execute after the object is loaded
	$scope.meetings.$loaded().then(function() {
      console.log("record ID:", $scope.meetings.$id);
    });

	$scope.addMeeting = function(){
		console.log("add the meeting");
		meetings.$push({
			name: $scope.meetingname,
			date: Firebase.ServerValue.TIMESTAMP
		})
	};

	$scope.deleteMeeting = function(key){
		console.log($scope.meetings+" :::: "+meetings);
		meetings.$remove(key);
	};
}]);