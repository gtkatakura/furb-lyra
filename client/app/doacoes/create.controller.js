angular.module('lyra').controller('doacaoCreateCtrl', function($scope, doacaoApi) {
    $scope.save = function(doacao) {
        doacaoApi.save(doacao).success(function() {
            alert("Doação criada com sucesso!");
        });
    }
});