angular.module('lyra').service('medicoApi', function(lyraApi) {
    this.all = function() {
        return lyraApi.get('/medicos');
    };
    
    this.find = function(id) {
        return lyraApi.get('/medicos/' + id);
    }
    
    this.save = function(medico) {
        return lyraApi.post('/medicos', medico);
    };
    
    this.update = function(medico) {
        return lyraApi.put('/medicos/' + medico.id, medico);
    };
    
    this.remove = function(medico) {
        return lyraApi.delete('/medicos/' + medico.id);
    };
});
