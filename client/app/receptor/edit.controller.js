angular.module('lyra').controller('receptorEditCtrl', function($scope, receptorApi, receptor) {
    $scope.tiposSanguineos = [ 'O', 'B', 'A', 'AB' ];

    $scope.receptor = receptor.data;

    $scope.update = function(receptor) {
        receptorApi.update(receptor).success(function() {
            alert("Alteração efetuada com sucesso!");
        });
    }
});
