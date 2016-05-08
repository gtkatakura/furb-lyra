angular.module('lyra').controller('doadorListCtrl', function($scope, doadorApi) {
    $scope.doadores = [];

    $scope.excluir = function(contato) {
        doadorApi.remove(contato).success(function() {
            carregarDoadores();
        });
    };

    var carregarDoadores = function() {
        doadorApi.all().success(function(doadores) {
            $scope.doadores = doadores;
        });
    };
    
    carregarDoadores();
});
