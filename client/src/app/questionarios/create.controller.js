angular.module('lyra').controller('questionarioCreateCtrl', function($scope, questionarioApi) {
    $scope.questionario = {
        questoes: [{}]
    };

    $scope.save = function(questionario) {
        questionarioApi.save(questionario).success(function() {
            alert("Questionário criado com sucesso!");
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