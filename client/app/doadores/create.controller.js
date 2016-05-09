angular.module('lyra').controller('doadorCreateCtrl', function($scope, doadorApi) {
    $scope.tiposSanguineos = [ 'O', 'B', 'A', 'AB' ];

    $scope.save = function(doador) {
        doadorApi.save(doador).success(function() {
            alert("Doador criado com sucesso!");
        });
    }
});