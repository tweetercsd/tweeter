(function() {
    'use strict';

    angular
        .module('myApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    function stateConfig($stateProvider,$urlRouterProvider) {
        
    	$urlRouterProvider.otherwise('/');
    	
    	$stateProvider
    	.state('home', {
            url:'/',
            templateUrl:'app/home/home.html'
         })
    	.state('items',{
        	url:'/item',
        	templateUrl:'app/item/item.html'
        })
        .state('authors',{
        	url:'/author',
        	templateUrl:'app/author/author.html'
        })
        .state('authors.new',{
        	parent:'authors',
        	url:'/new',
        	onEnter:['$state', '$uibModal', function($state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/author/author-dialog.html',
                    controller: 'AuthorDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg'
                }).result.then(function() {
                    $state.go('authors', null, { reload: true });
                }, function() {
                    $state.go('authors');
                });
            }]
        })
        ;
    }
})();