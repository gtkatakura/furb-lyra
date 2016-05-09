angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/doadores', {
        templateUrl: 'app/doadores/index.html',
        controller: 'doadorListCtrl'
    });
    
    $routeProvider.when('/doadores/criar', {
        templateUrl: 'app/doadores/create.html',
        controller: 'doadorCreateCtrl'
    });

    $routeProvider.when('/doadores/:id/editar', {
        templateUrl: 'app/doadores/edit.html',
        controller: 'doadorEditCtrl',
        resolve: {
            doador: function($route, doadorApi) {
                return doadorApi.find($route.current.params.id);
            }
        }
    });
});
