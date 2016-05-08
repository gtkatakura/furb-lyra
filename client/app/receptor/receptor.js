angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/receptores', {
        templateUrl: 'app/receptor/index.html',
        controller: 'receptorListCtrl'
    });
    
    $routeProvider.when('/receptores/criar', {
        templateUrl: 'app/receptor/create.html',
        controller: 'receptorCreateCtrl'
    });

    $routeProvider.when('/receptores/:id/editar', {
        templateUrl: 'app/receptor/edit.html',
        controller: 'receptorEditCtrl',
        resolve: {
            receptor: function($route, receptorApi) {
                return receptorApi.find($route.current.params.id);
            }
        }
    });
});
