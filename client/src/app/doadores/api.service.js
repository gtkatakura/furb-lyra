angular.module('lyra').service('doadorApi', function(lyraApi) {
    this.all = function() {
        return lyraApi.get('/doadores');
    };
    
    this.find = function(id) {
        return lyraApi.get('/doadores/' + id);
    }
    
    this.save = function(doador) {
        return lyraApi.post('/doadores', doador);
    };
    
    this.update = function(doador) {
        return lyraApi.put('/doadores/' + doador.id, doador);
    };
    
    this.remove = function(doador) {
        return lyraApi.delete('/doadores/' + doador.id);
    };
});
