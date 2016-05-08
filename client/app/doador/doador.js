angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/doadores', {
        templateUrl: 'app/doador/index.html',
        controller: 'doadorListCtrl'
    });
    
    $routeProvider.when('/doadores/criar', {
        templateUrl: 'app/doador/create.html',
        controller: 'doadorCreateCtrl'
    });

    $routeProvider.when('/doadores/:id/editar', {
        templateUrl: 'app/doador/edit.html',
        controller: 'doadorEditCtrl',
        resolve: {
            doador: function($route, doadorApi) {
                return doadorApi.find($route.current.params.id);
            }
        }
    });
});
