angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/medicos', {
        templateUrl: 'app/medicos/index.html',
        controller: 'medicoListCtrl'
    });
    
    $routeProvider.when('/medicos/criar', {
        templateUrl: 'app/medicos/create.html',
        controller: 'medicoCreateCtrl'
    });

    $routeProvider.when('/medicos/:id/editar', {
        templateUrl: 'app/medicos/edit.html',
        controller: 'medicoEditCtrl',
        resolve: {
            medico: function($route, medicoApi) {
                return medicoApi.find($route.current.params.id);
            }
        }
    });
});
