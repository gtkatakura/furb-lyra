angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/hemocentros', {
        templateUrl: 'app/hemocentros/index.html',
        controller: 'hemocentroListCtrl'
    });
    
    $routeProvider.when('/hemocentros/criar', {
        templateUrl: 'app/hemocentros/create.html',
        controller: 'hemocentroCreateCtrl'
    });

    $routeProvider.when('/hemocentros/:id/editar', {
        templateUrl: 'app/hemocentros/edit.html',
        controller: 'hemocentroEditCtrl',
        resolve: {
            hemocentro: function($route, hemocentroApi) {
                return hemocentroApi.find($route.current.params.id);
            }
        }
    });
});
