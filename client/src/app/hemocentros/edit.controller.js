angular.module('lyra').controller('hemocentroEditCtrl', function($scope, hemocentroApi, hemocentro) {
    
    $scope.hemocentro = hemocentro.data;

    $scope.update = function(hemocentro) {
        hemocentroApi.update(hemocentro).success(function() {
            alert("Alteração efetuada com sucesso!");
        });
    }
});
