angular.module('lyra').controller('mainCtrl', function($scope, doadorApi, receptorApi, medicoApi, hemocentroApi) {
    $scope.quantidadeDoadores = 'Buscando...';
    $scope.quantidadeReceptores = 'Buscando...';
    $scope.quantidadeMedicos = 'Buscando...';
    $scope.quantidadeHemocentros = 'Buscando...';

    doadorApi.count().then(function(response) {
      $scope.quantidadeDoadores = response.data;
    });

    receptorApi.count().then(function(response) {
      $scope.quantidadeReceptores = response.data;
    });

    medicoApi.count().then(function(response) {
      $scope.quantidadeMedicos = response.data;
    });

    hemocentroApi.count().then(function(response) {
      $scope.quantidadeHemocentros = response.data;
    });
});
