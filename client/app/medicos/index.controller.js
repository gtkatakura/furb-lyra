angular.module('lyra').controller('medicoListCtrl', function($scope, medicoApi) {
    $scope.medicos = [];

    $scope.excluir = function(medico) {
        if (confirm("Você tem certeza que deseja excluir esse médico?")) {
            medicoApi.remove(medico).success(function() {
                carregarMedicos();
            });
        }
    };

    var carregarMedicos = function() {
        medicoApi.all().success(function(medicos) {
            $scope.medicos = medicos;
        });
    };
    
    carregarMedicos();
});