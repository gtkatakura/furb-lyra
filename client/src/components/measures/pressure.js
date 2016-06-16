angular.module('ngMeasures').filter('pressure', function() {
    return function(input) {
        var maximum = input[0];
        var minimum = input[1];
        return maximum + '/' + minimum + ' mmHg';
    };
});
