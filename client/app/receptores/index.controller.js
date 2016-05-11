angular.module('lyra').controller('receptorListCtrl', function($scope, receptorApi) {
    $scope.receptores = [];

    $scope.excluir = function(receptor) {
        if (confirm("Você tem certeza que deseja excluir esse receptor?")) {
            receptorApi.remove(receptor).success(function() {
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
