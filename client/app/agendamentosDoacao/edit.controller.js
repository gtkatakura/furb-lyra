angular.module('lyra').controller('agendamentoDoacaoEditCtrl', function($scope, dateFilter, agendamentosDoacaoApi, receptorApi, doadorApi, agendamentoDoacao) {
    $scope.agendamentoDoacao = agendamentoDoacao.data;
    var dataHora = new Date($scope.agendamentoDoacao.dataHora);
    $scope.agendamentoDoacao.data = dateFilter(dataHora, 'dd/MM/yyyy');
    $scope.agendamentoDoacao.hora = dateFilter(dataHora, 'HH:mm');

    $scope.receptores = [];
    $scope.doadores = [];

    receptorApi.all().success(function(receptores) {
        $scope.receptores = receptores;
        $scope.agendamentoDoacao.receptor = $scope.receptores.find(function(receptor) {
            return $scope.agendamentoDoacao.receptor.id === receptor.id;
        });
    });

    doadorApi.all().success(function(doadores) {
        $scope.doadores = doadores;
        $scope.agendamentoDoacao.doador = $scope.doadores.find(function(doador) {
            return $scope.agendamentoDoacao.doador.id === doador.id;
        });
    });

    $scope.update = function(agendamentoDoacao) {
        agendamentosDoacaoApi.update(agendamentoDoacao).success(function() {
            alert("Alteração efetuada com sucesso!");
        });
    }
});
