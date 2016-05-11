angular.module('lyra').controller('medicoCreateCtrl', function($scope, medicoApi) {
    
    $scope.save = function(medico) {
        medicoApi.save(medico).success(function() {
            alert("Médico criado com sucesso!");
        });
    }
});