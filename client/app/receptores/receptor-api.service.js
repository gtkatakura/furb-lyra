angular.module('lyra').service('receptorApi', function($http, config) {
    this.all = function() {
        return $http.get(config.baseUrl + '/receptores');
    };
    
    this.find = function(id) {
        return $http.get(config.baseUrl + '/receptores/' + id);
    }
    
    this.save = function(receptor) {
        return $http.post(config.baseUrl + '/receptores', receptor);
    };
    
    this.update = function(receptor) {
        return $http.put(config.baseUrl + '/receptores/' + receptor.id, receptor);
    };
    
    this.remove = function(receptor) {
        return $http.delete(config.baseUrl + '/receptores/' + receptor.id);
    };
});
