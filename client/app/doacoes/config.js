angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/doacoes', {
        templateUrl: 'app/doacoes/index.html',
        controller: 'doacaoIndexCtrl'
    });

    $routeProvider.when('/doacoes/criar', {
        templateUrl: 'app/doacoes/create.html',
        controller: 'doacaoCreateCtrl'
    });

    $routeProvider.when('/doacoes/:id/editar', {
        templateUrl: 'app/doacoes/edit.html',
        controller: 'doacaoEditCtrl',
        resolve: {
            doacao: function($route, doacaoApi) {
                return doacaoApi.find($route.current.params.id);
            }
        }
    });
});
