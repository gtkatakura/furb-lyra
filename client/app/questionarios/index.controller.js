angular.module('lyra').controller('questionarioIndexCtrl', function($scope, questionarioApi) {
    $scope.questionarios = [];

    $scope.excluir = function(questionario) {
        if (confirm('Você tem certeza que deseja excluir esse questionário?')) {
            questionarioApi.remove(questionario).success(function() {
                carregarQuestionarios();
            });
        }
    };

    var carregarQuestionarios = function() {
        questionarioApi.all().success(function(questionarios) {
            $scope.questionarios = questionarios;
        });
    };

    carregarQuestionarios();
});
