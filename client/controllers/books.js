var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getBooks = function(){
		$http.get('/api/books').success(function(response){
			$scope.books = response;
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/'+id).success(function(response){
			$scope.book = response;
		});
	}

	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('/api/books/', $scope.book).success(function(response){
			window.location.href='#/books';
		});
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+id, $scope.book).success(function(response){
			window.location.href='#/books/details/'+id;
		});
	}

	$scope.removeBook = function(id){
		// var confirmPopup = $ionicPopup.confirm({
   //   title: 'Delete',
   //   template: 'Are you sure you want to delete this item?'
   // });
   // confirmPopup.then(function(res) {
   //   if(res) {
		// 	 $http.delete('/api/books/'+id).success(function(response){
	 // 			window.location.href='#/books';
	 // 		 });
   //   } else {
   //     // Code to be executed on pressing cancel or negative response
   //   }
   // });
	 $http.delete('/api/books/'+id).success(function(response){
	 window.location.href='#/books';
});
	}
}]);
