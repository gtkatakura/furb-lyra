angular.module('lyra').controller('questionarioEditCtrl', function($scope, questionarioApi, questionario) {
    $scope.questionario = questionario.data;

    $scope.update = function(questionario) {
        questionarioApi.update(questionario).success(function() {
            alert("Alteração efetuada com sucesso!");
        });
    };

    $scope.adicionarQuestao = function() {
        $scope.questionario.questoes.push({});
    };
    
    $scope.removerQuestao = function(questao) {
        var index = $scope.questionario.questoes.indexOf(questao);
        $scope.questionario.questoes.splice(index, 1);
    };
});
