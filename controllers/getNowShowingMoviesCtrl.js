 angular.module('bookmyshowApp').controller('getNowShowingMoviesController',function($scope,nowShowingMoviesListService){
   console.log('eshwar');
     console.log(JSON.stringify(nowShowingMoviesListService));
     $scope.nowShowingMovies = nowShowingMoviesListService;
});