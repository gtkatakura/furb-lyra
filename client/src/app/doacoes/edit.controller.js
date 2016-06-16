angular.module('lyra').controller('doacaoEditCtrl', function($scope, doacaoApi, doacao) {
    $scope.doacao = doacao.data;

    $scope.update = function(doacao) {
        doacaoApi.update(doacao).success(function() {
            alert("Alteração efetuada com sucesso!");
        });
    }
});
