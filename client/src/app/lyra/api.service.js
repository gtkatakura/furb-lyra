angular.module('lyra').factory('lyraApi', function($http, config) {
    var methods = ['get', 'post', 'put', 'delete'];

    return methods.reduce(function(lyraApi, method) {
        lyraApi[method] = function(uri) {
            arguments[0] = config.baseUrl + uri;
            return $http[method].apply($http, arguments);
        };

        return lyraApi;
    }, {});
});
