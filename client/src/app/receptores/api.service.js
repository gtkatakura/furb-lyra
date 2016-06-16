angular.module('lyra').service('receptorApi', function(lyraApi) {
    this.all = function() {
        return lyraApi.get('/receptores');
    };

    this.find = function(id) {
        return lyraApi.get('/receptores/' + id);
    }

    this.save = function(receptor) {
        return lyraApi.post('/receptores', receptor);
    };

    this.update = function(receptor) {
        return lyraApi.put('/receptores/' + receptor.id, receptor);
    };

    this.remove = function(receptor) {
        return lyraApi.delete('/receptores/' + receptor.id);
    };

    this.count = function() {
        return lyraApi.get('/receptores/count');
    };
});
