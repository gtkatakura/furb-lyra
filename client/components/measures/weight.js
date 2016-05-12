angular.module('ngMeasures').filter('weight', function(numberFilter) {
    return function(input) {
        return numberFilter(input) + 'kg'; 
    };
});
