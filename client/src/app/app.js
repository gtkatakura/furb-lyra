import '../components/measures';

angular.module('lyra', ['ngRoute', 'ui.utils.masks', 'ngMeasures']);

angular.module('lyra').value('config', {
  baseUrl: 'http://localhost:3412',
});
