angular.module('lyra').service('hemocentroApi', function(lyraApi) {
    this.all = function() {
        return lyraApi.get('/hemocentros');
    };

    this.find = function(id) {
        return lyraApi.get('/hemocentros/' + id);
    }

    this.save = function(hemocentro) {
        return lyraApi.post('/hemocentros', hemocentro);
    };

    this.update = function(hemocentro) {
        return lyraApi.put('/hemocentros/' + hemocentro.id, hemocentro);
    };

    this.remove = function(hemocentro) {
        return lyraApi.delete('/hemocentros/' + hemocentro.id);
    };

    this.count = function() {
        return lyraApi.get('/hemocentros/count');
    };
});
