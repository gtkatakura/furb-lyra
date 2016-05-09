angular.module('lyra').controller('agendamentoDoacaoIndexCtrl', function($scope, agendamentosDoacaoApi) {
    $scope.agendamentosDoacao = [];
    
    $scope.cancelar = function(id) {
        if (confirm("Você tem certeza que deseja cancelar esse agendamento?")) {
            agendamentosDoacaoApi.cancel(id).success(function() {
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
