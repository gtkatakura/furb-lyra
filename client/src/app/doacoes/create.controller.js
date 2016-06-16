angular.module('lyra').controller('doacaoCreateCtrl', function($scope, $routeParams, agendamentosDoacaoApi, doacaoApi) {
    $scope.doacao = {};

    agendamentosDoacaoApi.find($routeParams.agendamentoId).success(function(agendamentoDoacao) {
        $scope.doacao.agendamentoDoacao = agendamentoDoacao;
    });

    $scope.save = function(doacao) {
        doacaoApi.save(doacao).success(function() {
            alert("Doação criada com sucesso!");
        });
    }
});