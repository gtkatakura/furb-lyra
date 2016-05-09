angular.module('lyra').controller('receptorListCtrl', function($scope, receptorApi) {
    $scope.receptores = [];

    $scope.excluir = function(contato) {
        if (confirm("Você tem certeza que deseja excluir esse receptor?")) {
            receptorApi.remove(contato).success(function() {
                carregarReceptores();
            });
        }
    };

    var carregarReceptores = function() {
        receptorApi.all().success(function(receptores) {
            $scope.receptores = receptores;
        });
    };
    
    carregarReceptores();
});
