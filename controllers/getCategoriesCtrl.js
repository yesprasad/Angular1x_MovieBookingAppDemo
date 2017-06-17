angular.module('bookmyshowApp').controller('getCategories',function($scope,getCategoriesService){
    $scope.categories = getCategoriesService.categories;
})