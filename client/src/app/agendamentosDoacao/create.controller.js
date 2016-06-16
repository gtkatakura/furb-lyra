angular.module('lyra').controller('agendamentoDoacaoCreateCtrl', function($scope, agendamentosDoacaoApi, receptorApi, doadorApi, hemocentroApi) {
    $scope.receptores = [];
    $scope.doadores = [];
    $scope.hemocentros = [];

    receptorApi.all().success(function(receptores) {
        $scope.receptores = receptores;
    });

    doadorApi.all().success(function(doadores) {
        $scope.doadores = doadores;
    });

    hemocentroApi.all().success(function(hemocentros) {
        $scope.hemocentros = hemocentros;
    });

    $scope.save = function(agendamentoDoacao) {
        var horaMinute = agendamentoDoacao.hora.split(':');
        var hora = +horaMinute[0];
        var minuto = +horaMinute[1];
        var totalDeMinutos = hora * 60 + minuto;

        agendamentoDoacao.dataHora = new Date(agendamentoDoacao.data.setMinutes(totalDeMinutos));
        agendamentoDoacao.cancelado = false;

        agendamentosDoacaoApi.save(agendamentoDoacao).success(function() {
            alert('Agendamento de Doação criada com sucesso!');
        });
    }
});
