angular.module('ngMeasures').filter('height', function(numberFilter) {
    return function(input) {
        return numberFilter(input, 2) + 'm';
    };
});
