angular.module('lyra').controller('receptorCreateCtrl', function($scope, receptorApi) {
    $scope.tiposSanguineos = [ 'O', 'B', 'A', 'AB' ];

    $scope.save = function(receptor) {
        receptorApi.save(receptor).success(function() {
            alert("Receptor criado com sucesso!");
        });
    }
});