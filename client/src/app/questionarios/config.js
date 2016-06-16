angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/questionarios', {
        templateUrl: 'app/questionarios/index.html',
        controller: 'questionarioIndexCtrl'
    });

    $routeProvider.when('/questionarios/criar', {
        templateUrl: 'app/questionarios/create.html',
        controller: 'questionarioCreateCtrl'
    });

    $routeProvider.when('/questionarios/:id/editar', {
        templateUrl: 'app/questionarios/edit.html',
        controller: 'questionarioEditCtrl',
        resolve: {
            questionario: function($route, questionarioApi) {
                return questionarioApi.find($route.current.params.id);
            }
        }
    });
});
