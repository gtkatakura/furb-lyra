angular.module('lyra').controller('doadorListCtrl', function($scope, doadorApi) {
    $scope.doadores = [];

    $scope.excluir = function(contato) {
        if (confirm("Você tem certeza que deseja excluir esse doador?")) {
            doadorApi.remove(contato).success(function() {
                carregarDoadores();
            });
        }
    };

    var carregarDoadores = function() {
        doadorApi.all().success(function(doadores) {
            $scope.doadores = doadores;
        });
    };
    
    carregarDoadores();
});
