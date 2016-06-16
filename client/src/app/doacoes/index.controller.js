angular.module('lyra').controller('doacaoIndexCtrl', function($scope, doacaoApi) {
    $scope.doacoes = [];

    $scope.excluir = function(doacoes) {
        if (confirm("Você tem certeza que deseja excluir esse doação?")) {
            doacaoApi.remove(doacoes).success(function() {
                carregarDoacoes();
            });
        }
    };

    var carregarDoacoes = function() {
        doacaoApi.all().success(function(doacoes) {
            $scope.doacoes = doacoes;
        });
    };
    
    carregarDoacoes();
});
