angular.module('lyra').service('doadorApi', function($http, config) {
    this.all = function() {
        return $http.get(config.baseUrl + '/doadores');
    };
    
    this.find = function(id) {
        return $http.get(config.baseUrl + '/doadores/' + id);
    }
    
    this.save = function(doador) {
        return $http.post(config.baseUrl + '/doadores', doador);
    };
    
    this.update = function(doador) {
        return $http.put(config.baseUrl + '/doadores/' + doador.id, doador);
    };
    
    this.remove = function(doador) {
        return $http.delete(config.baseUrl + '/doadores/' + doador.id);
    };
});
