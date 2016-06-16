angular.module('lyra').controller('agendamentoDoacaoEditCtrl', function($scope, dateFilter, agendamentosDoacaoApi, receptorApi, doadorApi, hemocentroApi, agendamentoDoacao) {
    $scope.agendamentoDoacao = agendamentoDoacao.data;
    var dataHora = new Date($scope.agendamentoDoacao.dataHora);
    $scope.agendamentoDoacao.data = new Date(dateFilter(dataHora, 'dd/MM/yyyy'));
    $scope.agendamentoDoacao.hora = dateFilter(dataHora, 'HH:mm');

    $scope.receptores = [];
    $scope.doadores = [];
    $scope.hemocentros = [];

    receptorApi.all().success(function(receptores) {
        $scope.receptores = receptores;
        if ($scope.agendamentoDoacao.receptor) {
          $scope.agendamentoDoacao.receptor = $scope.receptores.find(function(receptor) {
              return $scope.agendamentoDoacao.receptor.id === receptor.id;
          });
        }
    });

    doadorApi.all().success(function(doadores) {
        $scope.doadores = doadores;
        $scope.agendamentoDoacao.doador = $scope.doadores.find(function(doador) {
            return $scope.agendamentoDoacao.doador.id === doador.id;
        });
    });

    hemocentroApi.all().success(function(hemocentros) {
        $scope.hemocentros = hemocentros;
        $scope.agendamentoDoacao.hemocentro = $scope.hemocentros.find(function(hemocentro) {
            return $scope.agendamentoDoacao.hemocentro.id === hemocentro.id;
        });
    });

    $scope.update = function(agendamentoDoacao) {
        var horaMinute = agendamentoDoacao.hora.split(':');
        var hora = +horaMinute[0];
        var minuto = +horaMinute[1];
        var totalDeMinutos = hora * 60 + minuto;

        agendamentoDoacao.dataHora = new Date(agendamentoDoacao.data.setMinutes(totalDeMinutos));

        agendamentosDoacaoApi.update(agendamentoDoacao).success(function() {
            alert("Alteração efetuada com sucesso!");
        });
    }
});
