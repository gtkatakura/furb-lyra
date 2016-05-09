angular.module('lyra').service('agendamentosDoacaoApi', function($http, config) {
    this.all = function() {
        return $http.get(config.baseUrl + '/agendamentosDoacao');
    };
    
    this.find = function(id) {
        return $http.get(config.baseUrl + '/agendamentosDoacao/' + id);
    }
    
    this.save = function(agendamentoDoacao) {
        return $http.post(config.baseUrl + '/agendamentosDoacao', agendamentoDoacao);
    };
    
    this.update = function(agendamentoDoacao) {
        return $http.put(config.baseUrl + '/agendamentosDoacao/' + agendamentoDoacao.id, agendamentoDoacao);
    };
    
    this.remove = function(agendamentoDoacao) {
        return $http.delete(config.baseUrl + '/agendamentosDoacao/' + agendamentoDoacao.id);
    };

    this.cancel = function(agendamentoDoacao) {
        return $http.post(config.baseUrl + '/agendamentosDoacao/' + agendamentoDoacao.id + '/cancel');
    };
});
