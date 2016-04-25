(function(angular) {
	var AuthorDialogController = function($scope,$uibModalInstance) {
		$scope.cancel = function(){
			$uibModalInstance.dismiss('cancel');
		}
		
	};
	AuthorDialogController.$inject = ['$scope','$uibModalInstance'];
	angular.module("myApp.controllers").controller("AuthorDialogController", AuthorDialogController);
	
}(angular));