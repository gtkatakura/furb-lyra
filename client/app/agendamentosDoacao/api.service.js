angular.module('lyra').service('agendamentosDoacaoApi', function(lyraApi, config) {
    this.all = function() {
        return lyraApi.get('/agendamentosDoacao');
    };

    this.find = function(id) {
        return lyraApi.get('/agendamentosDoacao/' + id);
    }

    this.save = function(agendamentoDoacao) {
        return lyraApi.post('/agendamentosDoacao', agendamentoDoacao);
    };
    
    this.update = function(agendamentoDoacao) {
        return lyraApi.put('/agendamentosDoacao/' + agendamentoDoacao.id, agendamentoDoacao);
    };

    this.remove = function(agendamentoDoacao) {
        return lyraApi.delete('/agendamentosDoacao/' + agendamentoDoacao.id);
    };

    this.cancel = function(agendamentoDoacao) {
        return lyraApi.post('/agendamentosDoacao/' + agendamentoDoacao.id + '/cancel');
    };
});
