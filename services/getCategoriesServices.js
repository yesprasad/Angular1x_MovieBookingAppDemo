angular.module('bookmyshowApp').service('getCategoriesService',function(){
   var fac={};
    var types = ['Action','Adventure','Family','Romance','Thriller','children'];
    fac.categories = types;
    return fac;
});