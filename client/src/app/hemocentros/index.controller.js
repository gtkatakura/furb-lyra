angular.module('lyra').controller('hemocentroListCtrl', function($scope, hemocentroApi) {
    $scope.hemocentro = [];

    $scope.excluir = function(hemocentro) {
        if (confirm("Você tem certeza que deseja excluir esse hemocentro?")) {
            hemocentroApi.remove(hemocentro).success(function() {
                carregarHemocentros();
            });
        }
    };

    var carregarHemocentros = function() {
        hemocentroApi.all().success(function(hemocentros) {
            $scope.hemocentros = hemocentros;
        });
    };
    
    carregarHemocentros();
});
