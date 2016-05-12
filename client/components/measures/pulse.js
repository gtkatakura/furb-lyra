angular.module('ngMeasures').filter('pulse', function(numberFilter) {
    return function(input) {
        return numberFilter(input) + ' bpm';
    };
});
