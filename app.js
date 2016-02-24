var routeApp = angular.module('routeApp',['ngRoute']);

routeApp.config(function ($routeProvider) {
		$routeProvider
			.when('/users',{
				templateUrl:  'views/partials/users.html',
				controller: 'userCtrl'
			})
			
});
