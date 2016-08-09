(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('studentsService', StudentsService);

	StudentsService.$inject = [];
	function StudentsService($scope,$http) {

		$scope.StudentDetails=function(){
    $http.get('http://il-resume-api.azurewebsites.net/api/students').then(function(value) {
        $scope.Students = value.data;
        $scope.status=value.status;
if(value.status=="503"){
  $scope.StudentDetails();
        }
    });
    }
    $scope.retrieveData=function(student){
    $scope.StudentDetails=student;   
    }
}
		function getName() {
			return 'studentsService';
		}
	
})();
