angular.module('lyra').controller('agendamentoDoacaoIndexCtrl', function($scope, $location, agendamentosDoacaoApi) {
    $scope.agendamentosDoacao = [];
    
    $scope.concluir = function(agendamentoDoacao) {
        if (confirm("Você tem certeza que deseja concluir esse agendamento?")) {
            $location.path('/doacoes/criar').search({
                agendamentoId: agendamentoDoacao.id
            });
        }
    };
    
    $scope.cancelar = function(agendamentoDoacao) {
        if (confirm("Você tem certeza que deseja cancelar esse agendamento?")) {
            agendamentosDoacaoApi.cancel(agendamentoDoacao).success(function() {
                carregarAgendamentosDoacao();
            });
        }
    };

    $scope.excluir = function(agendamentosDoacao) {
        if (confirm("Você tem certeza que deseja excluir esse agendamento?")) {
            agendamentosDoacaoApi.remove(agendamentosDoacao).success(function() {
                carregarAgendamentosDoacao();
            });
        }
    };

    var carregarAgendamentosDoacao = function() {
        agendamentosDoacaoApi.all().success(function(agendamentosDoacao) {
            $scope.agendamentosDoacao = agendamentosDoacao;
        });
    };
    
    carregarAgendamentosDoacao();
});
