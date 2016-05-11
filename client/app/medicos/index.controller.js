angular.module('lyra').controller('medicoListCtrl', function($scope, medicoApi) {
    $scope.receptores = [];

    $scope.excluir = function(contato) {
        if (confirm("Você tem certeza que deseja excluir esse médico?")) {
            medicoApi.remove(contato).success(function() {
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
