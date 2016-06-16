angular.module('ngMeasures').filter('volume', function(numberFilter) {
    return function(input) {
        return input ? numberFilter(input) + ' ml' : '';
    };
});
