angular.module('lyra').service('questionarioApi', function(lyraApi) {
    this.all = function() {
        return lyraApi.get('/questionarios');
    };

    this.find = function(id) {
        return lyraApi.get('/questionarios/' + id);
    }

    this.save = function(agendamentoDoacao) {
        return lyraApi.post('/questionarios', agendamentoDoacao);
    };
    
    this.update = function(agendamentoDoacao) {
        return lyraApi.put('/questionarios/' + agendamentoDoacao.id, agendamentoDoacao);
    };

    this.remove = function(agendamentoDoacao) {
        return lyraApi.delete('/questionarios/' + agendamentoDoacao.id);
    };
});
