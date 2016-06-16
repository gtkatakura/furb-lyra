angular.module('lyra').service('doacaoApi', function(lyraApi) {
    this.all = function() {
        return lyraApi.get('/doacoes');
    };
    
    this.find = function(id) {
        return lyraApi.get('/doacoes/' + id);
    }
    
    this.save = function(doacao) {
        return lyraApi.post('/doacoes', doacao);
    };
    
    this.update = function(doacao) {
        return lyraApi.put('/doacoes/' + doacao.id, doacao);
    };

    this.remove = function(doacao) {
        return lyraApi.delete('/doacoes/' + doacao.id);
    };
});
