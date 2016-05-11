angular.module('lyra').controller('questionarioIndexCtrl', function($scope, questionarioApi) {
    $scope.questionarios = [];
    
    questionarioApi.all().success(function(questionarios) {
        $scope.questionarios = questionarios;
    });
});
