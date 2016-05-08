angular.module('lyra').controller('doadorEditCtrl', function($scope, doadorApi, doador) {
    $scope.tiposSanguineos = [ 'O', 'B', 'A', 'AB' ];

    $scope.doador = doador.data;

    $scope.update = function(doador) {
        doadorApi.update(doador).success(function() {
            alert("Alteração efetuada com sucesso!");
        });
    }
});
