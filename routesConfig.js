angular.module('bookmyshowApp').config(function($routeProvider){
   //$locationProvider.html5Mode(true);
    
    $routeProvider.when('/movies',{
        templateUrl: 'templates/showmoviesTemplate.html',
        controller:'getNowShowingMoviesController' //name of the controller NOT the name of the file where the controller is 
    });
    
    
});





