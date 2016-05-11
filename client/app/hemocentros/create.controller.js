angular.module('lyra').controller('hemocentroCreateCtrl', function($scope, hemocentroApi) {

    $scope.save = function(hemocentro) {
        hemocentroApi.save(hemocentro).success(function() {
            alert("Hemocentro criado com sucesso!");
        });
    }
});