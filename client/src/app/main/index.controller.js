google.charts.load('current', {'packages':['corechart']});

angular.module('lyra').controller('mainCtrl', function($scope, doadorApi, receptorApi, medicoApi, hemocentroApi, doacaoApi, dateFilter) {
    $scope.quantidadeDoadores = 'Buscando...';
    $scope.quantidadeReceptores = 'Buscando...';
    $scope.quantidadeMedicos = 'Buscando...';
    $scope.quantidadeHemocentros = 'Buscando...';

    var loaders = 0;

    doadorApi.count().then(function(response) {
      $scope.quantidadeDoadores = response.data;
      loadChart();
    });

    receptorApi.count().then(function(response) {
      $scope.quantidadeReceptores = response.data;
      loadChart();
    });

    medicoApi.count().then(function(response) {
      $scope.quantidadeMedicos = response.data;
      loadChart();
    });

    hemocentroApi.count().then(function(response) {
      $scope.quantidadeHemocentros = response.data;
      loadChart();
    });

    function loadChart() {
      loaders++;
      if (loaders !== 4) return;
      google.charts.setOnLoadCallback(function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Entidade', 'Quantidade'],
          ['Doadores', $scope.quantidadeDoadores],
          ['Receptores', $scope.quantidadeReceptores],
        ]);

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, {
          title: "Número de Cadastros",
          height: 450
        });
      });

      doacaoApi.all().then(function(doacoes) {
        doacoes = doacoes.data;

        var doacoesPorMes = doacoes.reduce(function(reduced, doacao) {
          var month = dateFilter(new Date(doacao.agendamentoDoacao.dataHora), 'MMMM');
          month = month[0].toUpperCase() + month.substring(1, month.length);
          reduced[month] = reduced[month] || 0;
          reduced[month] += 1;
          return reduced;
        }, {})

        doacoesPorMes = Object.keys(doacoesPorMes).map(function(month, quantidade) {
          return [month, doacoesPorMes[month]];
        });

        google.charts.setOnLoadCallback(function drawChart() {
          var dated = [['Mês', 'Quantidade']].concat(doacoesPorMes);
          var data = google.visualization.arrayToDataTable(dated);

          var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

          chart.draw(data, {
            title: 'Quantidade de Doações',
            height: 450
          });
        });
      });
    }
});
