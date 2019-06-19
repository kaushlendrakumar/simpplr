var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

	$scope.getValueFromInput = "";
	$scope.totalResults = 0;
	$scope.allList = []
	$scope.pressEnter = function(keyEvent) {
	  	if (keyEvent.which === 13 && $scope.getValueFromInput){
	  		$scope.totalResults = 0; $scope.allList = [];
	  		var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBZbwQOnwtlio5EcxyTEAEehgXPlprGJL8&cx=008534924047867193897:vux-_cu2oxi&q="+$scope.getValueFromInput;
			
			$http.get(url).then(function(response) {
			    $scope.responseData = response.data;
			    console.log($scope.responseData)
			    console.log($scope.responseData.items)
			    if($scope.responseData.items && $scope.responseData.items.length > 0){
				    $scope.totalResults = $scope.responseData.searchInformation.totalResults;
				    $scope.allList = $scope.responseData.items;
				}
				else{
					alert("Result not found")
				}
			});
	  	}
	  	else if (keyEvent.which === 13 && !$scope.getValueFromInput){
	  		alert('Firts Please the some value')
	  	}
	}
});