(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('studentsService', StudentsService);

	StudentsService.$inject = [];
	function StudentsService() {

		/**
		 * Exposed functions
		 */

	
		var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {
  $http.get("http://il-resume-api.azurewebsites.net/api/students").then(function (data1) {
      $scope.myWelcome = data1.data;
  });
});

		/**
		 * Implementations
		 */

		function getName() {
			return 'studentsService';
		}
	}
})();
