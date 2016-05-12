angular.module('ngMeasures').filter('temperature', function(numberFilter) {
    return function(input) {
        return numberFilter(input, 1) + ' C°'; 
    };
});
