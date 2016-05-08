angular.module('lyra').controller('doadorListCtrl', function($scope) {
    $scope.doadores = [
        {
            id: 1,
            nomeCompleto: 'Gabriel Takashi Katakura',
            tipoSanguineo: 'B',
            fatorRh: true
        },
        {
            id: 2,
            nomeCompleto: 'Alesson Ricardo Bernardo',
            tipoSanguineo: 'O',
            fatorRh: false
        },
        {
            id: 3,
            nomeCompleto: 'Ivan Manoel da Silva Filho',
            tipoSanguineo: 'A',
            fatorRh: true
        }
    ];
    
    $scope.excluir = function(contato) {
        var index = $scope.doadores.indexOf(contato);
        $scope.doadores.splice(index, 1);
    };
});
