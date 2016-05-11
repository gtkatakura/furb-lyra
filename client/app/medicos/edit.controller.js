angular.module('lyra').controller('medicoEditCtrl', function($scope, medicoApi, medico) {

    $scope.medico = medico.data;

    $scope.update = function(medico) {
        medicoApi.update(medico).success(function() {
            alert("Alteração efetuada com sucesso!");
        });
    }
});
