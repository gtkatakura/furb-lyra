angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/agendamentosDoacao', {
        templateUrl: 'app/agendamentosDoacao/index.html',
        controller: 'agendamentoDoacaoIndexCtrl'
    });

    $routeProvider.when('/agendamentosDoacao/criar', {
        templateUrl: 'app/agendamentosDoacao/create.html',
        controller: 'agendamentoDoacaoCreateCtrl'
    });

    $routeProvider.when('/agendamentosDoacao/:id/editar', {
        templateUrl: 'app/agendamentosDoacao/edit.html',
        controller: 'agendamentoDoacaoEditCtrl',
        resolve: {
            agendamentoDoacao: function($route, agendamentosDoacaoApi) {
                return agendamentosDoacaoApi.find($route.current.params.id);
            }
        }
    });
});
