angular.module('lyra').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/main/index.html',
        controller: 'mainCtrl'
    });
});
