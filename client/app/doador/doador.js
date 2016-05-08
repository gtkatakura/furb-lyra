angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/doadores', {
        templateUrl: 'app/doador/index.html',
        controller: 'doadorListCtrl'
    });
});
