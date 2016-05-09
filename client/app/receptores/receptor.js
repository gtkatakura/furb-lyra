angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/receptores', {
        templateUrl: 'app/receptores/index.html',
        controller: 'receptorListCtrl'
    });
    
    $routeProvider.when('/receptores/criar', {
        templateUrl: 'app/receptores/create.html',
        controller: 'receptorCreateCtrl'
    });

    $routeProvider.when('/receptores/:id/editar', {
        templateUrl: 'app/receptores/edit.html',
        controller: 'receptorEditCtrl',
        resolve: {
            receptor: function($route, receptorApi) {
                return receptorApi.find($route.current.params.id);
            }
        }
    });
});
